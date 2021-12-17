import { DecoratedSchema } from './interfaces';
import {
    getVersion,
    listEntries, ModelData,
    ModelEntryDto,
    ModelEntryHelper,
    ModelEntryStatus,
    ModelVersionDtoLight
} from '../models';
import { map, mergeMap } from 'rxjs/operators';
import { throwError } from 'rxjs';

export class ConsentFormWrapper {

    schema: DecoratedSchema | undefined;
    parentFormElement: HTMLFormElement | null = null;
    formId: string;

    constructor(private config: {
        elementId: string,
        layoutId: string,
        prefix: string,
        customCss?: string,
        onSubmit?: (result: any) => void,
        onAbort?: (reason: string) => void
    }) {
        this.formId = (Math.random() + 1).toString(36).substring(4);
        this.transformElement();
    }

    transformElement() {
        this.parentFormElement = document.getElementById(this.config.elementId) as HTMLFormElement;
        if (this.parentFormElement !== null) {
            this.parentFormElement.innerHTML = 'Loading...';
            this.loadLayout().then((layout) => {
                if (!layout) {
                    this.parentFormElement!.innerHTML = 'Error while loading consent layout...';
                }
                console.log('Layout version loaded', layout);
            });
        } else {
            throw new Error(`[F&S Consent Form Wrapper] Element with id ${this.config.elementId} not found`);
        }
    }

    loadLayout() {
        return listEntries({types: ['layout'], keys: [this.config.layoutId], statuses: [ModelEntryStatus.ACTIVE]})
            .pipe(
                map((response) => response.totalCount > 0 ? response.values[0] : null),
                mergeMap((layout) => {
                    if (!layout) { return throwError('No active layout with id ' + this.config.layoutId); }
                    const version = ModelEntryHelper.getActiveVersion(layout);
                    if (!version) { return throwError('No active version for this layout with id ' + this.config.layoutId); }
                    return getVersion(layout.id, version.id!);
                })
            )
            .toPromise();
    }

    submitForm() {
    }
}
