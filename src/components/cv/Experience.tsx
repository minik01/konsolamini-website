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

export function Experience(props: any) {
    const exp = [
        new Company('bv', new Date('Jan 1 2018'), new Date('March 31 2020'),),
        new Company('konsolamini', new Date('March 20 2019'), null,),
        new Company('unit4', new Date('March 31 2020'), null,),
    ];
    return (
        <>
            {exp.map(company =>
                <article key={company.id} id={company.id}>
                    <span className={'time'}>
                        {company.getDate()}
                    </span>
                    <h2>{translate('experience.' + company.id + '.title')}</h2>

                    <p>{translate('experience.' + company.id + '.content')}</p>
                </article>
            )}

        </>
    )
}
