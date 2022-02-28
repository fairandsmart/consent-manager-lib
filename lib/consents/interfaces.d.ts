import { ConsentOrigin, FormLayout } from '../models';
export declare enum Confirmation {
    NONE = "NONE",
    FORM_CODE = "FORM_CODE",
    EMAIL_CODE = "EMAIL_CODE",
    SMS_CODE = "SMS_CODE",
    SIGNATURE = "SIGNATURE",
    AUDIO_RECORD = "AUDIO_RECORD",
    VIDEO_RECORD = "VIDEO_RECORD",
    DIGITAL_SIGNATURE = "DIGITAL_SIGNATURE"
}
export declare const CONFIRMATION_TYPES: Confirmation[];
export declare enum UserInfosKeys {
    EMAIL_KEY = "emailAddress",
    PHONE_KEY = "phoneNumber"
}
export declare enum ConfirmationConfigKeys {
    SENDER_EMAIL_KEY = "senderEmail",
    SENDER_PHONE_KEY = "senderPhone"
}
/**
 * The ConsentContext is used to generate a token. This token is used:
 * - To generate a form in a browser for the user to fill
 * - To collect the consent of a user through the API
 */
export interface ConsentContext {
    /** The identifier of the profile the processing will be linked to */
    subject: string;
    /** If the form is not in iframe mode, the user will be redirected to this callback once the process is over */
    callback?: string;
    /** If the IFrame mode is set, set the allowed origin for the parent window domain */
    iframeOrigin?: string;
    /** The language of the form. All models must have a valid version of this language for the form to display properly */
    language: string;
    /** Specifies the consent origin (what was the collecting support). Either:
     * webform (the user used a form)
     * or operator (a competent authority filled the form)
     */
    origin?: ConsentOrigin;
    /** (optional) The ISO 8601 duration for the validity of the record.  */
    validity?: string;
    /** Specifies whether the consent can be updated afterwards. */
    updatable?: boolean;
    /** Any relevant informations about the user that will be persisted in the receipt */
    userinfos?: {
        [key: string]: string;
    };
    /** Any other relevant informations about the context that will be persisted in the record */
    attributes?: {
        [key: string]: string;
    };
    /** (readonly) A transaction identifier for that consent.  */
    transaction?: string;
    /** The identifier of the user who used the form */
    author?: string;
    /** The FormLayout Data to use ; if layout key is provided, layoutData will be ignored.*/
    layoutData?: FormLayout;
    /** The reference to the 'formlayout' model that will be used.*/
    layout?: string;
    /** The type of user confirmation needed, default is NONE */
    confirmation?: Confirmation;
    /** Additional information needed for user confirmation */
    confirmationConfig?: {
        [key: string]: string;
    };
}
/** Used to generate a Receipt from a transaction id */
export interface ConsentTransaction {
    subject: string;
    transaction: string;
    claims: {
        [key: string]: string;
    };
}
