import {translate} from "../../TranslatePipe";
import {Company} from "./ExperienceList";

export function Experience(props: { company: Company }) {
    const company = props.company;
    return <article key={company.id} id={company.id}>
        <div>
            <h3>{translate('experience.' + company.id + '.title')}</h3>
            <div className={'dot'}/>

            <span className={'time'}>
                            {company.getDate()}
                        </span>
        </div>
        <p>{translate('experience.' + company.id + '.content')}</p>
    </article>
}
