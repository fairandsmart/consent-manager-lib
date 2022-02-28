import { RegistryPropertyType, Schema, SchemaEntry } from '@fairandsmart/types';
import { ConsentContext } from '../consents';

export interface DecoratedSchema extends Schema {
    entries: DecoratedSchemaEntry[];
}

export interface DecoratedSchemaEntry extends SchemaEntry {
    decoration: {
        formMask: FormlyDecoration[];
    }
}

export interface FormlyDecoration {
    defaultValue: string;
    hide: boolean;
    id: string;
    key: string;
    templateOptions: {
        disabled: boolean;
        hidden: boolean;
        label: string;
        name: string;
        options: string[];
        pattern: string;
        placeholder: string;
        required: boolean;
    };
    type: RegistryPropertyType;
}

export interface ConsentCollectorConfig {
    /** The full URL endpoint where to find the service that will grant the consent token */
    tokenBrokerEndpoint: string;

    /** The context of the consent to collect */
    consentContext: ConsentContext;
    lang: string;

    mode: 'iframe' | 'embed' | 'window';
    embedElementId?: string;
    iframeParentElementId?: string;
}

export type ConsentCollectorCallback = () => void;
