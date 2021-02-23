/**
 * An API Key, used for identification. The content of the key is only visible right after generating it.
 */
export interface Key {
    /** The unique id of the key, set by the system */
    id?: string;
    /** The user-friendly name of the key, set by the user */
    name: string;
    /** The content of the key, to be used in the Authorization header as Basic HTTP authentication. Only displayed upon creation */
    key?: string;
    /** The date when the key was generated */
    creationDate?: number;
    /** The last time the key was used */
    lastAccessDate?: number;
}
