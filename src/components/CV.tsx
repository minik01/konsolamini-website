import {Experience} from "./cv/Experience";
import {Skills} from "./cv/Skills";
import {translate} from "../TranslatePipe";


export function CV() {

    return (
        <>
            {/*<svg height="100%" width="100%">*/}
            {/*    <path d="M150 0 L75 200 L225 200 Z" />*/}
            {/*</svg>*/}


            <div className={'gold-box-le h100'}>

                <div className={'panel'}>
                    <picture className={'photo'} style={{display: "block"}}>
                        <img src="me.png" alt={'my photo'}/>
                    </picture>

                    <div className={'reversed-colors'}>Dane kontaktowe:</div>
                    E-mail: konsolamini@gmail.com
                    telefon: 736 77 22 65
                    Data urodzenia: 18.03.1993

                    <Skills/>
                </div>

                <div>
                    <div className={'header-panel reversed-colors'} id={'my-name'}>
                        <h1>Dominik Wojnar</h1>
                        <h5>{translate('academic.mgr')}</h5>
                        <h5>{translate('academic.engineer')}</h5>
                    </div>
                    <Experience/>
                </div>
            </div>
        </>
    )
}
