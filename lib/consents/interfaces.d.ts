import { CollectionMethod } from "../common";
/**
 * The ConsentContext is used to generate a token. This token is used:
 * - To generate a form in a browser for the user to fill
 * - To collect the consent of a user through the API
 */
export interface ConsentContext {
  /** The identifier of the profile the processing will be linked to */
  subject: string;
  /** The visual orientation of the form: vertical or horizontal */
  orientation: ConsentFormOrientation;
  /** The reference to the 'basicinfo' model that will be used for this form. Linked to the generated receipt and record */
  info: string;
  /**
   * All the references to the models that will appear in the form. Can be processings, preferences or conditions.
   * Note that the forms are not meant to display conditions alongside processings or preferences.
   *
   * References should look like "element/processing/processing.001" for example
   */
  elements: string[];
  /** If the form is not in iframe mode, the user will be redirected to this callback once the process is over */
  callback?: string;
  /** The language of the form. All models must have a valid version of this language for the form to display properly */
  language: string;
  /** (optional) The ISO 8601 duration for the validity of the record.  */
  validity?: string;
  /** If the form should be displayed entirely of partially */
  formType?: ConsentFormType;
  /** (optional) The format the receipt will be displayed to the user: HTML, XML, PDF or TEXT. Default is HTML */
  receiptDisplayType?: ReceiptDisplayType;
  /** Any relevant informations about the user that will be persisted in the receipt */
  userinfos?: {
    [key: string]: string;
  };
  /** Any other relevant informations about the context that will be persisted in the record */
  attributes?: {
    [key: string]: string;
  };
  /** The reference to the Email model that will be sent to the user */
  notificationModel?: string;
  /** The recipient the confirmation email will be sent to */
  notificationRecipient?: string;
  /** Specifies how the consent was collected. Either:
   * WEBFORM (the user used a form)
   * or OPERATOR (a competent authority filled the form)
   */
  collectionMethod?: CollectionMethod;
  /** The identifier of the user who used the form */
  author?: string;
  /** If true, the form will be displayed as a preview and will be for display purposes only */
  preview?: boolean;
  /** If true, the form will contain the iFrameResizer library, and will not redirect the user to a callback */
  iframe?: boolean;
  /** (optional) The reference of a theme model to use to alter the visual of the form */
  theme?: string;
  /** (optional) Wether the "accept all" button should be displayed or not */
  acceptAllVisible?: boolean;
  /** (optional) Wether the "validity" field should be displayed or not to the user */
  validityVisible?: boolean;
  /** (options) The text to use for the "accept all" button */
  acceptAllText?: string;
  /** Wether the footer part of the form should be displayed on top instead of the bottom of the form */
  footerOnTop?: boolean;
}
/** Indicates the orientation the form will be displayed. Either VERTICAL or HORIZONTAL. */
export declare enum ConsentFormOrientation {
  HORIZONTAL = "HORIZONTAL",
  VERTICAL = "VERTICAL",
}
/** Indicates the orientation the form will be displayed. Either VERTICAL or HORIZONTAL. */
export declare const CONSENT_FORM_ORIENTATIONS: ConsentFormOrientation[];
/**
 * Indicates if the form should be displayed FULL or PARTIAL.
 * FULL: display all entries
 * PARTIAL : only display the entries that don't have any collected value for the user yet
 */
export declare enum ConsentFormType {
  PARTIAL = "PARTIAL",
  FULL = "FULL",
}
/** All the valid format the receipt can be displayed in */
export declare type ReceiptDisplayType = "HTML" | "XML" | "PDF" | "TEXT";
/** All the valid format the receipt can be displayed in */
export declare const RECEIPT_DISPLAY_TYPES: ReceiptDisplayType[];
/** Used to generate a Receipt from a transaction id */
export interface ConsentTransaction {
  subject: string;
  transaction: string;
  claims: {
    [key: string]: string;
  };
}
