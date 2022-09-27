import {translate} from "../../TranslatePipe";
import {dateToString} from "../../model/DateUtils";
import {Experience} from "./Experience";
import {TechnologyType} from "./technologyFactory";


export class Company {
    constructor(public readonly id: string, public readonly startDate: Date, public readonly endDate: Date | null, public readonly stack?: TechnologyType[], public readonly responsibilities?: string[]) {
    }

    public getDate(): string {
        const startDate = dateToString(this.startDate);
        const endDate = this.endDate ? dateToString(this.endDate) : translate('common.present');
        return `${startDate} – ${endDate}`;
    }
}

export function ExperienceList() {
    const exp = [
            new Company('teleste', new Date('September 15 2021'), null, [
                TechnologyType.ANGULAR,
                TechnologyType.TYPESCRIPT,
                TechnologyType.JAVASCRIPT,
                TechnologyType.SCSS,
                TechnologyType.SCRUM
            ], [
                'Tworzenie kodu wysokiej jakości',
                'Rozwijanie oprogramowania zgodnie z normami, narzędziami i praktykami branży IT',
                'Przeprowadzanie Code review',
                'Branie udziału w backlog refinement oraz szacowaniu',
                'Prezentowanie zmian na spotkaniach Demo',
                'Postępowanie zgodne ze standardami i najlepszymi praktykami',
            ]),
            new Company('unit4', new Date('May 1 2020'), new Date('September 1 2021'), [
                TechnologyType.ANGULAR,
                TechnologyType.TYPESCRIPT,
                TechnologyType.SCSS,
                TechnologyType.JAVA,
                TechnologyType.POSTGRESQL,
                TechnologyType.SCRUM
            ], [
                'Tworzenie kodu wysokiej jakości',
                'Wczesne ostrzeganie przed niemożnością zapewnienia kodu na czas/kodu o odpowiedniej jakości',
                'Natychmiastowe reagowanie jeśli kompilowany kod skutkuje nieprawidłowym buildem lub testem',
                'Postępowanie zgodne ze standardami i najlepszymi praktykami',
                'Postępowanie zgodne z najlepszymi praktykami Test Driven Development',
                'Branie aktywnego udziału w codziennych spotkaniach dotyczących postępu oraz planowania iteracji'
            ]),
            new Company('konsolamini', new Date('March 20 2019'), null,),
            new Company('bv', new Date('Jan 1 2018'), new Date('April 31 2020'), [
                TechnologyType.ANGULAR,
                TechnologyType.TYPESCRIPT,
                TechnologyType.REACT_NATIVE,
                TechnologyType.LESS,
                TechnologyType.SPRING,
                TechnologyType.JAVA,
                TechnologyType.POSTGRESQL
            ], [
                'Programowanie front-end oraz back-end',
                'Branie udziału w planowaniu sprintów i retrospektywach',
                'W razie konieczności nauka i wykonywanie projektów w językach PHP i Java',
            ]),
        ]
    ;
    return (
        <div id={'experience'}>
            {exp.map(company => <Experience key={company.id} company={company}/>)}

        </div>
    )
}
