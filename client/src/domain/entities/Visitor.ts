export interface VisitorData {
    id: string;
    firstVisit: string;
    lastVisit: string;
    location: string;
    browser: string;
    referrer: string;
    displayName: string;
    currentPage: string;
    visitCount: number;
}

export interface PageStats {
    [pageName: string]: number;
}

export interface VisitorStats {
    uniqueVisitors: VisitorData[];
    pageViews: PageStats;
    totalVisitors: number;
    currentPageVisitors: number;
}

export class VisitorEntity {
    constructor(
        public readonly data: VisitorData
    ) { }

    static create(
        location: string,
        browser: string,
        referrer: string,
        currentPage: string
    ): VisitorEntity {
        const id = VisitorEntity.generateUniqueId();
        const displayName = VisitorEntity.generateDisplayName(location, id);
        const now = new Date().toISOString();

        const visitorData: VisitorData = {
            id,
            firstVisit: now,
            lastVisit: now,
            location,
            browser,
            referrer,
            displayName,
            currentPage,
            visitCount: 1
        };

        return new VisitorEntity(visitorData);
    }

    static generateUniqueId(): string {
        const screenData = typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : '1920x1080';
        return btoa(
            navigator.userAgent +
            navigator.language +
            screenData +
            new Date().getDate()
        ).replace(/[^a-zA-Z0-9]/g, '').substring(0, 12);
    }

    static generateDisplayName(location: string, id: string): string {
        const cityMatch = location.match(/^([^,]+)/);
        const city = cityMatch ? cityMatch[1].replace(/\s+/g, '') : 'Unknown';
        const prefix = ['Tech', 'Dev', 'Code', 'Web', 'Digital'][Math.floor(Math.random() * 5)];
        const number = id.substring(0, 3);

        return `${prefix}Visitor_${city}_${number}`;
    }

    updateVisit(currentPage: string): VisitorEntity {
        const updatedData: VisitorData = {
            ...this.data,
            lastVisit: new Date().toISOString(),
            currentPage,
            visitCount: this.data.visitCount + 1
        };

        return new VisitorEntity(updatedData);
    }

    getData(): VisitorData {
        return { ...this.data };
    }
}
