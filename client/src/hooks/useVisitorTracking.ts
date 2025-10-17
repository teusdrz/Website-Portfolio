import { useState, useEffect, useCallback, useMemo } from 'react';
import { VisitorEntity, VisitorStats } from '../domain/entities/Visitor';
import { LocalStorageVisitorRepository } from '../infrastructure/repositories/LocalStorageVisitorRepository';

export const useVisitorTracking = (currentPage: string) => {
    const [visitorStats, setVisitorStats] = useState<VisitorStats>({
        uniqueVisitors: [],
        pageViews: {},
        totalVisitors: 0,
        currentPageVisitors: 0
    });

    const [isLoading, setIsLoading] = useState(true);

    const repository = useMemo(() => new LocalStorageVisitorRepository(), []);

    const loadVisitorStats = useCallback(async () => {
        try {
            const stats = await repository.getVisitorStats();
            const currentPageVisitors = await repository.getCurrentPageVisitors(currentPage);

            setVisitorStats({
                ...stats,
                currentPageVisitors
            });
        } catch (error) {
            console.error('Error loading visitor stats:', error);
        } finally {
            setIsLoading(false);
        }
    }, [currentPage, repository]);

    const trackVisitor = useCallback(async () => {
        try {
            const { location, browser, referrer } = LocalStorageVisitorRepository.detectBrowserInfo();

            // Gerar ID único para este visitante
            const visitorId = VisitorEntity.generateUniqueId();

            // Verificar se visitante já existe
            const existingVisitor = await repository.getVisitorById(visitorId);

            if (existingVisitor) {
                // Visitante existente - atualizar visita
                const visitorEntity = new VisitorEntity(existingVisitor);
                const updatedVisitor = visitorEntity.updateVisit(currentPage);
                await repository.saveVisitor(updatedVisitor.getData());
            } else {
                // Novo visitante
                const newVisitor = VisitorEntity.create(location, browser, referrer, currentPage);
                await repository.saveVisitor(newVisitor.getData());
            }

            // Incrementar view da página
            await repository.incrementPageView(currentPage);

            // Atualizar estatísticas
            await loadVisitorStats();

        } catch (error) {
            console.error('Error tracking visitor:', error);
        }
    }, [currentPage, repository, loadVisitorStats]);

    useEffect(() => {
        trackVisitor();
    }, [trackVisitor]);

    const refreshStats = useCallback(() => {
        loadVisitorStats();
    }, [loadVisitorStats]);

    return {
        visitorStats,
        isLoading,
        refreshStats
    };
};
