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
                    <div className={'photo'}>
                        <picture >
                            <img src="me.png" alt={'my photo'}/>
                        </picture>
                    </div>

                    <h2 className={'reversed-colors'}>Dane kontaktowe:</h2>

                    <p>

                        E-mail:&nbsp;konsolamini@gmail.com
                        telefon:&nbsp;736 77 22 65
                        Data&nbsp;urodzenia:&nbsp;18.03.1993
                    </p>


                    <Skills/>
                </div>

                <div>
                    <div className={'header-panel reversed-colors'} id={'my-name'}>
                        <h1>Dominik Wojnar</h1>
                        {/*<h5>{translate('academic.mgr')}</h5>*/}
                        {/*<h5>{translate('academic.engineer')}</h5>*/}
                    </div>
                    <Experience/>
                </div>
            </div>
        </>
    )
}
