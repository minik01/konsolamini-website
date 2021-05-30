import {translate} from "../../TranslatePipe";
import {Experience} from "./Experience";
import {Company} from "./ExperienceList";
import React from "react";

export function Education() {
    return <>
        <h2>{translate('education.title')}</h2>
        <Experience
            company={new Company('mgr', new Date('October 1 2016'), new Date('March 31 2019'))}/>
        <Experience
            company={new Company('engineer', new Date('October 1 2012'), new Date('March 31 2016'))}/>
    </>
}
