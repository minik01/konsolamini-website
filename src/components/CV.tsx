import {Skills} from "./cv/Skills";
import {translate} from "../TranslatePipe";
import React from "react";
import {ExperienceList} from "./cv/ExperienceList";
import {MyPhoto} from "./cv/MyPhoto";
import {BasicInfo} from "./cv/BasicInfo";
import { Education } from "./cv/Education";


export function CV() {
    return (
        <>
            <div className={'header-panel reversed-colors'} id={'my-name'}>
                <div/>
                <h1>Dominik Wojnar</h1>
                <div/>
            </div>
            <div className={'header-panel header-panel-placeholder'}>
                <h1>&nbsp;</h1>
            </div>

            <div id={'main'}>
                <div className={'panel-1'}>

                    <div className={'photo'}>
                        <picture>
                            <img src="me.png" alt={'my photo'}/>
                        </picture>
                    </div>
                    <article id={"basic-info"}>
                        <BasicInfo/>
                    </article>
                    <article id={"skills"}>
                        <Skills/>
                    </article>
                    <article id={"languages"}>
                        <h2>{translate('common.languages')}</h2>
                        <div className={'language'}>Polski native</div>
                        <div className={'language'}>Angielski B2</div>
                    </article>
                </div>
                <div className={"panel-2"}>
                    <article>
                        <h2>{translate('experience.title')}</h2>
                        <ExperienceList/>
                    </article>
                    <article id={'education'}>
                       <Education/>
                    </article>
                </div>
            </div>
            <br/>
        </>
    )
}
