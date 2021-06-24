import {currentLanguage, translate} from "../../TranslatePipe";
import {Company} from "./ExperienceList";
import {Technology} from "../Technology";

export function Experience(props: { company: Company }) {
    const company = props.company;
    return <article key={company.id} id={company.id}>
        <div className={'experience'}>
            <h3>{translate('experience.' + company.id + '.title')}</h3>
            <div className={'dot'}/>

            <span className={'time'}>
                            {company.getDate()}
            </span>
        </div>
        <div className={'hide-on-print experience'}>
            {props.company.stack?.map(t => <Technology key={t} type={t}/>)}
        </div>
        <p>{translate('experience.' + company.id + '.content')}</p>
        {currentLanguage === 'pl' ? <ul className={'hide-on-print'}>
            {props.company.responsibilities?.map((responsibility: string, i: number) => <li
                key={i}>{responsibility}</li>)}
        </ul> : <></>}
    </article>
}
