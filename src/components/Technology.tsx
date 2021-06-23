import React from "react";
import { technologyFactory, TechnologyType} from "./cv/technologyFactory";

export function Technology(props: { type: TechnologyType }) {
    const skill = technologyFactory(props.type);
    return <div className={'skill-name'}>
        {skill.icon}
        <span>{skill.name} </span>
    </div>
}
