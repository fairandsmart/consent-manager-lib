import { ConsentCollectorCallback, ConsentCollectorConfig } from './interfaces';
import { RightConsents } from '../api';

export class ConsentCollector {
    constructor(private config: ConsentCollectorConfig) {}

    collect(callback?: ConsentCollectorCallback): Promise<void> | void {
        let resolve: () => void;
        let reject : () => void;
        const promise = new Promise<void>((a, b) => {
            resolve = a;
            reject = b;
        })

        this.getTokenFromBroker()
            .toPromise()
            .then((response) => {
                if (!response?.token) {
                    throw new Error('Could not retrieve token');
                }
                switch (this.config.mode) {
                    case 'embed':
                        return this.replaceElement(response.location);
                    case 'iframe':
                        return this.openInIframe(response.location);
                    case 'window':
                    default:
                        return this.openInNewWindow(response.location);
                }
            })
            .then((result) => {
                if (callback) {
                    callback();
                } else {
                    resolve();
                }
            });
        if (!callback) {
            return promise;
        }
    }

    private getTokenFromBroker() {
        return RightConsents.http<{ token: string, location: string }>({
            method: 'POST',
            url: this.config.tokenBrokerEndpoint,
            body: this.config.consentContext,
            options: {
                noAuth: true
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    private openInNewWindow(location: string): Promise<void> | void {
        return new Promise<void>((resolve) => {
            const newWindow = window.open(location, 'com_fs_window_consentCollect', 'menubar=no,location=no,resizable=yes,scrollbars=yes,status=no,width=900px,height=600px', true);
            if (!newWindow) {
                throw new Error('Could not open window');
            }
            const interval = setInterval(() => {
                if (newWindow.closed) {
                    resolve();
                    clearInterval(interval);
                }
            }, 1500);
        });
    }

    private openInIframe(token: string, callback?: ConsentCollectorCallback): Promise<void> | void {
        return new Promise((resolve) => resolve());
    }

    private replaceElement(token: string, callback?: ConsentCollectorCallback): Promise<void> | void {
        return new Promise((resolve) => resolve());
    }
}
