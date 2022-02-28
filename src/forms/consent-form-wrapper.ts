import { ConsentCollector } from './consent-collector';
import { DataCollector } from './data-collector';
import { FsData } from '@fairandsmart/types';
import { mergeMap } from 'rxjs/operators';
import { from, throwError } from 'rxjs';

export class ConsentFormWrapper {

    formId: string;

    constructor(private config: {
        consentCollector: ConsentCollector,
        dataCollector: DataCollector
    }) {
        this.formId = (Math.random() + 1).toString(36).substring(4);
        if (!this.config.dataCollector) {
            throw new Error('No DataCollector provided for this ConsentFormWrapper');
        }
        if (!this.config.consentCollector) {
            throw new Error('No ConsentCollector provided for this ConsentFormWrapper');
        }
    }

    collect(): Promise<FsData> {
        return new Promise((resolve, reject) => {
            this.config.dataCollector.render().onSend()
                .pipe(
                    mergeMap((dataStore) => {
                        if (dataStore) {
                            if (this.config.dataCollector.getSubject() !== undefined) {
                                this.config.consentCollector.overrideSubject(this.config.dataCollector.getSubject()!);
                            }
                            return this.config.consentCollector.collect();
                        } else {
                            return throwError('No data provided in DataFormWrapper result');
                        }
                    }),
                    mergeMap(() => this.config.dataCollector.pushData())
                )
                .subscribe({
                    next: (data) => resolve(data),
                    error: (err) => reject(err)
                });
        });
    }
}
