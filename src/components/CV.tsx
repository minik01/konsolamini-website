import {Experience} from "./cv/Experience";
import {Skills} from "./cv/Skills";
import {translate} from "../TranslatePipe";


export function CV() {

    return (
        <div>
            <div className={'gold-box-le'}>
                <picture className={'photo'} style={{display: "block"}}>
                    <img src="me.png" alt={'my photo'}/>
                </picture>
                <div id={'my-name'}>
                    <h1>Dominik Wojnar</h1>
                    <h5>{translate('academic.mgr')}</h5>
                    <h5>{translate('academic.engineer')}</h5>
                </div>
            </div>


            <div className={'gold-box-le'}>
                <div>
                    <Skills/>
                </div>
                <div>
                    <Experience/>
                </div>
            </div>
        </div>
    )
}
