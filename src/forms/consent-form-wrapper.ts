import { ConsentCollector } from './consent-collector';
import { DataFormWrapper } from './data-form-wrapper';
import { map, mergeMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

export class ConsentFormWrapper {

    formId: string;

    constructor(private config: {
        consentCollector: ConsentCollector,
        dataFormWrapper: DataFormWrapper,
        subjectFieldId?: string,
        subjectFieldName?: string
    }) {
        this.formId = (Math.random() + 1).toString(36).substring(4);
    }

    collect(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.config.dataFormWrapper.render().onSend()
                .subscribe((dataStore) => {
                    if (dataStore) {
                        if (this.config.subjectFieldId) {
                            this.config.consentCollector.overrideSubject(this.config.dataFormWrapper.getSubject(this.config.subjectFieldId, this.config.subjectFieldName));
                        }
                        this.config.consentCollector.collect().then(() => this.config.dataFormWrapper.pushData()).then(resolve).catch(reject);
                    } else {
                        reject('No data provided in DataFormWrapper result');
                    }
                });
        });
    }
}
