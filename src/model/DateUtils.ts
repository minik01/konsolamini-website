import {translate} from "../TranslatePipe";

export function dateToString(date: Date) {
    const startMonth = translate('month.' + (1 + date.getMonth()));
    return `${date.getFullYear()} ${startMonth} `;
}
