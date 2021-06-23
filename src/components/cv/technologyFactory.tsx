import {
    DiSass,
    FaAngular,
    FaJava,
    FaJs,
    FaLess,
    FaReact,
    GiJasmine,
    SiCss3, SiPostgresql,
    SiSpring,
    SiTypescript
} from "react-icons/all";
import React from "react";

export enum TechnologyType {
    TYPESCRIPT,
    JAVASCRIPT,
    ANGULAR,
    CSS,
    SCSS,
    LESS,
    REACT,
    REACT_NATIVE,
    KARMA,
    JAVA,
    SPRING,
    UML,
    BPMN,
    POSTGRESQL
}

export class SkillName {
    constructor(public name: string,
                public icon: JSX.Element,
    ) {
    }
}

export function technologyFactory(type: TechnologyType): Readonly<SkillName> {
    switch (type) {
        case TechnologyType.TYPESCRIPT:
            return new SkillName('TypeScript', <SiTypescript/>);
        case TechnologyType.JAVASCRIPT:
            return new SkillName('JavaScript', <FaJs/>);
        case TechnologyType.ANGULAR:
            return new SkillName('Angular', <FaAngular/>);
        case TechnologyType.CSS:
            return new SkillName('CSS', <SiCss3/>);
        case TechnologyType.SCSS:
            return new SkillName('SASS', <DiSass/>);
        case TechnologyType.LESS:
            return new SkillName('LESS', <FaLess/>);
        case TechnologyType.REACT:
            return new SkillName('React', <FaReact/>);
        case TechnologyType.REACT_NATIVE:
            return new SkillName('React native', <FaReact/>);
        case TechnologyType.KARMA:
            return new SkillName('Karma/Jsamine', <GiJasmine/>);
        case TechnologyType.JAVA:
            return new SkillName('Java', <FaJava/>);
        case TechnologyType.SPRING:
            return new SkillName('Spring', <SiSpring/>);
        case TechnologyType.UML:
            return new SkillName('UML', <> </>);
        case TechnologyType.BPMN:
            return new SkillName('BPMN', <> </>);
        case TechnologyType.POSTGRESQL:
            return new SkillName('postgresql', <SiPostgresql></SiPostgresql>)
    }
}
