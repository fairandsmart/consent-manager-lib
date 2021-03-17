import { FormLayout } from '../models';

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

    /** The language of the form. All models must have a valid version of this language for the form to display properly */
    language: string;

    /** Specifies the consent origin (what was the collecting support). Either:
     * webform (the user used a form)
     * or operator (a competent authority filled the form)
     */
    origin?: string;

    /** The recipient the confirmation email will be sent to */
    notificationRecipient?: string;

    /** (optional) The ISO 8601 duration for the validity of the record.  */
    validity?: string;

    /** Any relevant informations about the user that will be persisted in the receipt */
    userinfos?: { [key: string]: string };

    /** Any other relevant informations about the context that will be persisted in the record */
    attributes?: { [key: string]: string };

    /** (readonly) A transaction identifier for that consent.  */
    transaction?: string;

    /** The reference to the 'formlayout' model that will be used.*/
    layout?: string;

    /** The FormaLayout Data to use ; if layout key is provided, layoutData will be ignored.*/
    layoutData?: FormLayout;

    /** The identifier of the user who used the form */
    author?: string;

    /** If true, the form will be displayed as a preview and will be for display purposes only */
    preview?: boolean;
}

/** Used to generate a Receipt from a transaction id */
export interface ConsentTransaction {
    subject: string;
    transaction: string;
    claims: {[key: string]: string};
}
