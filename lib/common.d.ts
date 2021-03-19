export interface CollectionPage<T> {
    values: T[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
}
export declare type SortDirection = 'asc' | 'desc' | '';
