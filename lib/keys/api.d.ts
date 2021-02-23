import { Observable } from "rxjs";
import { Key } from "./interfaces";
export declare function listKeys(): Observable<Key[]>;
export declare function createKey(name: string): Observable<Key>;
export declare function deleteKey(id: string): Observable<void>;
