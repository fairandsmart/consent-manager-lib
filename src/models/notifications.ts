
export enum NotificationReportStatus {
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  OPENED = 'OPENED',
  INVALID_RECIPIENT = 'INVALID_RECIPIENT',
  MAILBOX_FULL = 'MAILBOX_FULL',
  ERROR = 'ERROR',
  PENDING = 'PENDING',
  NONE = 'NONE'
}

export enum NotificationReportType {
  SMS = 'SMS',
  EMAIL = 'EMAIL',
  FCM = 'FCM',
  XMPP = 'XMPP',
  NONE = 'NONE'
}

export interface NotificationReport {
  transaction: string;
  creationTimestamp: number;
  status: NotificationReportStatus;
  type: NotificationReportType;
  explanation: string;
}
