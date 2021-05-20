import {translate} from "../../TranslatePipe";
import {dateToString} from "../../model/DateUtils";


export class Company {
    constructor(public readonly id: string, public readonly startDate: Date, public readonly endDate: Date | null) {
    }

    public getDate(): string {
        const startDate = dateToString(this.startDate);
        const endDate = this.endDate ? dateToString(this.endDate) : translate('common.present');
        return `${startDate} – ${endDate}`;
    }
}

export function Experience() {
    const exp = [
        new Company('unit4', new Date('March 31 2020'), null,),
        new Company('konsolamini', new Date('March 20 2019'), null,),
        new Company('bv', new Date('Jan 1 2018'), new Date('March 31 2020'),),
    ];
    return (
        <div id={'experience'}>
            {exp.map(company =>
                <article key={company.id} id={company.id}>

                    <h2>{translate('experience.' + company.id + '.title')}</h2>
                    <span className={'time'}>
                        {company.getDate()}
                    </span>
                    <p>{translate('experience.' + company.id + '.content')}</p>
                </article>
            )}

        </div>
    )
}
