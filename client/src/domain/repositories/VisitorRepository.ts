import { VisitorData, VisitorStats } from '../entities/Visitor';

export interface VisitorRepository {
    saveVisitor(visitor: VisitorData): Promise<void>;
    getVisitorById(id: string): Promise<VisitorData | null>;
    getAllVisitors(): Promise<VisitorData[]>;
    getVisitorStats(): Promise<VisitorStats>;
    incrementPageView(pageName: string): Promise<void>;
    getCurrentPageVisitors(pageName: string): Promise<number>;
}
