export enum TimeScale {
    DAYS = 'DAYS',
    WEEKS = 'WEEKS',
    MONTHS = 'MONTHS'
}

export const TIME_SCALES: TimeScale[] = Object.keys(TimeScale) as TimeScale[];

export interface StatsDataSet {
    label: string;
    data: number[];
}

export interface StatsData {
    datasets: StatsDataSet[];
    labels: string[];
}

export interface StatsChart {
    [key: string]: StatsData;
}

export interface StatsBag {
    [key: string]: StatsChart;
}
