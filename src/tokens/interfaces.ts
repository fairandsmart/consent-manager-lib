export interface AccessToken {
    subject: string;
    scopes?: string[];
    validity?: string;
}
