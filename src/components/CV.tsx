import {Experience} from "./cv/Experience";
import {Skills} from "./cv/Skills";


export function CV() {
    return (
        <div>
            <picture style={{display: "block"}}>
                <img src="me.png" alt={'my photo'}/>
            </picture>
            <Skills/>
            <Experience/>
        </div>
    )
}
