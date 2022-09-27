import {
    AiFillStar,
    AiOutlineStar,
} from "react-icons/all";
import React from "react";
import {translate} from "../../TranslatePipe";
import {A} from "../A";
import {Technology} from "../Technology";
import {TechnologyType} from "./technologyFactory";

function Stars(props: { value: number, description: string }) {
    const outletStarsStyle = {position: "absolute"} as React.CSSProperties;

    const filledStarsOuterStyle = {
        position: "relative",
        width: "max-content"
    } as React.CSSProperties;

    const filledStarsInnerStyle = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        padding: 0
    } as React.CSSProperties;

    return (
        <>
            <div className={'outline-star'} style={outletStarsStyle}>
                <AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
            </div>
            <div className={'filled-star'} style={filledStarsOuterStyle} title={props.description}>
                <div style={{
                    width: (props.value * 100) + '%',
                    ...filledStarsInnerStyle
                }}>
                    <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                </div>
            </div>
        </>
    );
}

class Skill {
    public name = '';

    constructor(public readonly type: TechnologyType,
                public readonly stars: number,
                public readonly exampleLink: string,
                public readonly experience: string) {
        this.name = TechnologyType[type];
    }
}

function renderSkill(skill: Skill) {
    return <div className={'skill'} key={skill.name}>
        <A href={skill.exampleLink}>
            <Technology type={skill.type}/>
            <Stars value={skill.stars} description={''}/>
        </A>
    </div>;
}

export function Skills() {
    const skills =
        {
            frontend: [
                new Skill(TechnologyType.TYPESCRIPT,
                    0.8,
                    '',
                    '3+ lat'),
                new Skill(TechnologyType.ANGULAR,
                    0.8,
                    '',
                    '3+ lat'),
                new Skill(TechnologyType.CSS,
                    0.6,
                    'https://github.com/minik01/konsolamini-website/tree/master/src/styles',
                    '3+ lat'),
                new Skill(TechnologyType.JAVASCRIPT,
                    0.5,
                    '',
                    '1 rok'),
                new Skill(TechnologyType.REACT,
                    0.4,
                    'https://github.com/minik01/typed-modeler/blob/master/src/components/ModelManager.tsx',
                    '3+ lat'),
                new Skill(TechnologyType.KARMA,
                    0.3,
                    // 'https://gitlab.com/dominik.wojnar/colorful-matrix-code/-/blob/cmc-003-compresion/src/Compression/Compressor.test.ts',
                    '',
                    '1 rok'),
            ],
            backend: [
                new Skill(TechnologyType.JAVA,
                    0.2,
                    '',
                    '3+ lat'),
                new Skill(TechnologyType.SPRING,
                    0.1,
                    '',
                    '2 lata'),
            ],
            other: [
                new Skill(TechnologyType.UML,
                    0.3,
                    '',
                    '2+ lata'),
                new Skill(TechnologyType.BPMN,
                    0.5,
                    '',
                    '3+ lat'),
            ]
        };
    return (
        <>
            <h2>
                {translate('common.skills')}
                {/*<BsInfoSquare className={'hide-on-print'} title={translate('common.click-on-element')}/>*/}
            </h2>
            <div id={'skills-list'}>
                {skills.frontend.map(skill =>
                    renderSkill(skill)
                )}
                {skills.backend.map(skill =>
                    renderSkill(skill)
                )}
                {skills.other.map(skill =>
                    renderSkill(skill)
                )}
            </div>
        </>
    );
}
