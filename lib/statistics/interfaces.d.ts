export declare enum TimeScale {
    DAYS = "DAYS",
    WEEKS = "WEEKS",
    MONTHS = "MONTHS"
}
export declare const TIME_SCALES: TimeScale[];
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
