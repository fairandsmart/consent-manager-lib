import { RecordDto } from '../records';

export interface UserDto {
    username: string;
    admin: boolean;
    operator: boolean;
    roles: string[];
}

export interface SupportInfoDto {
    status: string;
    latestVersion: string;
    currentVersion: string;
}

export interface ClientConfigDto {
    userPageEnabled: boolean;
    userPageElements: string[];
    language: string;
    rolesMapping: RoleMappingMap;
}

export interface RoleMappingMap {
    [key: string]: string;
}

