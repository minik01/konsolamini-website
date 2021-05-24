import {Experience} from "./cv/Experience";
import {Skills} from "./cv/Skills";
import {translate} from "../TranslatePipe";
import React from "react";


export function CV() {

    return (
        <>
            <div className={'gold-box-le h100'}>

                <div className={'panel'}>
                    <div className={'photo'}>
                        <picture>
                            <img src="me.png" alt={'my photo'}/>
                        </picture>
                    </div>

                    <h2 className={'reversed-colors'}>{translate('common.contact')}</h2>
                    <p>
                        E-mail:&nbsp;konsolamini@gmail.com
                        telefon:&nbsp;736 77 22 65
                        Data&nbsp;urodzenia:&nbsp;18.03.1993
                    </p>

                    <h2 className={'reversed-colors'}>{translate('common.skills')}</h2>
                    <Skills/>

                    <h2 className={'reversed-colors'}>{translate('common.languages')}</h2>

                    <div className={'language'}>Polski C2</div>
                    <div className={'language'}>Angielski B2</div>
                </div>

                <div>
                    <div className={'header-panel header-panel-placeholder'}>
                        <h1>&nbsp;</h1>
                    </div>

                    <div className={'header-panel reversed-colors'} id={'my-name'}>
                        <div/>
                        <h1>Dominik Wojnar</h1>
                        <div/>
                    </div>


                    <h2>{translate('experience.title')}</h2>
                    <Experience/>

                    <h2>{translate('education.title')}</h2>
                    <h5>{translate('education.mgr')}</h5>
                    <h5>{translate('education.engineer')}</h5>
                </div>
            </div>
        </>
    )
}
