export interface SubjectContext {
    validity?: string;
    subject: string;
}

export interface ReceiptContext {
    transaction: string;
    scopes?: string[];
    validity?: string;
}
