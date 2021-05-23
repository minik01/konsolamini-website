import {
    AiFillStar,
    AiOutlineStar,
    FaAngular,
    FaJava,
    FaJs,
    FaReact,
    GiJasmine, SiCss3,
    SiSpring,
    SiTypescript
} from "react-icons/all";
import React from "react";

function Stars(props: { value: number, description: string }) {
    const outletStarsStyle = {position: "absolute"} as React.CSSProperties;

    const filledStarsOuterStyle = {
        position: "relative",
        width: "max-content"
    } as React.CSSProperties;

    const filledStarsInnerStyle = {
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    } as React.CSSProperties;

    return (
        <>
            <div style={outletStarsStyle}>
                <AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
            </div>
            <div style={filledStarsOuterStyle} title={props.description}>
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
    constructor(public readonly name: string,
                public readonly icon: JSX.Element,
                public readonly stars: number,
                public readonly starsDescription: string,
                public readonly experience: string) {
    }
}

export function Skills() {
    const skills =

        {
            frontend: [
                new Skill('TypeScript',
                    (<SiTypescript/>),
                    0.8,
                    'umiem dużo pożytecznych rzeczy, z bardzo zaawansowanych konstrukcji nie korzystam',
                    '3+ lat'),
                new Skill('JavaScript',
                    (<FaJs/>),
                    0.5,
                    'jak korzystać z Symbol, generatory, kontekst funkcji (bind, apply, call)',
                    '1 rok'),
                new Skill('CSS',
                    (<SiCss3/>),
                    0.5,
                    'animacje, pseudoklasy',
                    '3+ lat'),
                new Skill('Angular',
                    (<FaAngular/>),
                    0.6,
                    '',
                    '3+ lat'),
                new Skill('React',
                    (<FaReact/>),
                    0.8,
                    'kurs na Udemy, biblioteki do zarządzania stanem aplikacji',
                    '3+ lat'),
                new Skill('Karma/Jsamine',
                    (<GiJasmine/>),
                    0.3,
                    'podstawowe testowanie, mockowanie serwisów i metod',
                    '1 rok'),
            ],
            backend: [
                new Skill('Java',
                    (<FaJava/>),
                    0.5,
                    'czym jest finalize, czy domyślnie nowe programy są dołączane do istniejącego JVM, czy jest tworzony osobny proces, słabo sobie radzę z wielowątkowością, średnio ze wzorcami projektowymi, czym jest Bean',
                    '3+ lat'),
                new Skill('Spring',
                    (<SiSpring/>),
                    0.1,
                    '',
                    '2 lata'),
            ]
        };
    return (
        <div id={'skills'}>
            {skills.frontend.map(skill =>
                <article className={'skill'} key={skill.name}>
                    <h3>{skill.icon}{skill.name}</h3>
                    <Stars value={skill.stars} description={skill.starsDescription}/>

                </article>
            )}
            <br/>
            {skills.backend.map(skill =>
                <article className={'skill'} key={skill.name}>
                    <h3>{skill.icon}{skill.name}</h3>
                    <Stars value={skill.stars} description={skill.starsDescription}/>

                </article>
            )}
            <br/>

            <h3>Język angielski B2</h3>


        </div>
    );
}
