interface HintEntry {
    value: string;
    context: {
        [key: string]: string;
    };
    position: {
        [key: string]: string;
    };
    description?: {
        [key: string]: string;
    };
}
export declare const CSS_HINTS: HintEntry[];
export {};
