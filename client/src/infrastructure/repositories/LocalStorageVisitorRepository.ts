import { VisitorRepository } from '../../domain/repositories/VisitorRepository';
import { VisitorData, VisitorStats, PageStats } from '../../domain/entities/Visitor';

export class LocalStorageVisitorRepository implements VisitorRepository {
    private readonly VISITORS_KEY = 'portfolio_visitors';
    private readonly PAGE_VIEWS_KEY = 'portfolio_page_views';

    async saveVisitor(visitor: VisitorData): Promise<void> {
        const visitors = await this.getAllVisitors();
        const existingIndex = visitors.findIndex(v => v.id === visitor.id);

        if (existingIndex >= 0) {
            visitors[existingIndex] = visitor;
        } else {
            visitors.push(visitor);
        }

        localStorage.setItem(this.VISITORS_KEY, JSON.stringify(visitors));
    }

    async getVisitorById(id: string): Promise<VisitorData | null> {
        const visitors = await this.getAllVisitors();
        return visitors.find(v => v.id === id) || null;
    }

    async getAllVisitors(): Promise<VisitorData[]> {
        const stored = localStorage.getItem(this.VISITORS_KEY);
        return stored ? JSON.parse(stored) : [];
    }

    async getVisitorStats(): Promise<VisitorStats> {
        const visitors = await this.getAllVisitors();
        const pageViews = await this.getPageViews();

        return {
            uniqueVisitors: visitors,
            pageViews,
            totalVisitors: visitors.length,
            currentPageVisitors: 0 // Will be calculated by the hook
        };
    }

    async incrementPageView(pageName: string): Promise<void> {
        const pageViews = await this.getPageViews();
        pageViews[pageName] = (pageViews[pageName] || 0) + 1;
        localStorage.setItem(this.PAGE_VIEWS_KEY, JSON.stringify(pageViews));
    }

    async getCurrentPageVisitors(pageName: string): Promise<number> {
        const visitors = await this.getAllVisitors();
        return visitors.filter(v => v.currentPage === pageName).length;
    }

    private async getPageViews(): Promise<PageStats> {
        const stored = localStorage.getItem(this.PAGE_VIEWS_KEY);
        return stored ? JSON.parse(stored) : {};
    }

    // Método para detectar informações do browser
    static detectBrowserInfo(): { location: string; browser: string; referrer: string } {
        const getUserLocation = (): string => {
            const lang = navigator.language || 'en-US';
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            // Simular localização baseada no timezone
            const locationMap: { [key: string]: string } = {
                'America/Sao_Paulo': 'São Paulo, BR',
                'America/New_York': 'New York, US',
                'Europe/London': 'London, UK',
                'Asia/Tokyo': 'Tokyo, JP',
                'Europe/Paris': 'Paris, FR',
                'Australia/Sydney': 'Sydney, AU'
            };

            return locationMap[timezone] || `${lang.split('-')[1] || 'Unknown'}, Unknown`;
        };

        const getBrowserName = (): string => {
            const userAgent = navigator.userAgent;

            if (userAgent.includes('Firefox')) return 'Firefox';
            if (userAgent.includes('Chrome')) return 'Chrome';
            if (userAgent.includes('Safari')) return 'Safari';
            if (userAgent.includes('Edge')) return 'Edge';
            if (userAgent.includes('Opera')) return 'Opera';

            return 'Unknown Browser';
        };

        const getReferrer = (): string => {
            const referrer = document.referrer;

            if (!referrer) return 'Direct Access';
            if (referrer.includes('linkedin.com')) return 'LinkedIn';
            if (referrer.includes('github.com')) return 'GitHub';
            if (referrer.includes('google.com')) return 'Google';
            if (referrer.includes('instagram.com')) return 'Instagram';

            try {
                const url = new URL(referrer);
                return url.hostname;
            } catch {
                return 'Unknown Referrer';
            }
        };

        return {
            location: getUserLocation(),
            browser: getBrowserName(),
            referrer: getReferrer()
        };
    }
}
