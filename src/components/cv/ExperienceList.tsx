import {translate} from "../../TranslatePipe";
import {dateToString} from "../../model/DateUtils";
import {Experience} from "./Experience";


export class Company {
    constructor(public readonly id: string, public readonly startDate: Date, public readonly endDate: Date | null) {
    }

    public getDate(): string {
        const startDate = dateToString(this.startDate);
        const endDate = this.endDate ? dateToString(this.endDate) : translate('common.present');
        return `${startDate} – ${endDate}`;
    }
}

export function ExperienceList() {
    const exp = [
        new Company('unit4', new Date('March 31 2020'), null,),
        new Company('konsolamini', new Date('March 20 2019'), null,),
        new Company('bv', new Date('Jan 1 2018'), new Date('March 31 2020'),),
    ];
    return (
        <div id={'experience'}>
            {exp.map(company => <Experience company={company}/>)}

        </div>
    )
}
