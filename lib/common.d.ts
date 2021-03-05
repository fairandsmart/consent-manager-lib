export declare enum CollectionMethod {
    WEBFORM = "WEBFORM",
    OPERATOR = "OPERATOR",
    EMAIL = "EMAIL",
    RECEIPT = "RECEIPT",
    USER_PAGE = "USER_PAGE"
}
export interface CollectionPage<T> {
    values: T[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalCount: number;
}
export declare type SortDirection = 'asc' | 'desc' | '';
