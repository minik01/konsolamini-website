import {translate} from "../../TranslatePipe";
import React from "react";
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {A} from "../A";

export function BasicInfo() {
    const mail = 'konsolamini@gmail.com';
    const tel = '736 77 22 65';
    return <>
        <h2>{translate('common.contact')}</h2>
        <div>
            <div>
                E-mail:&nbsp;<A href={'mailTo:' + mail}>{mail}</A>
            </div>
            <div>
                telefon:&nbsp;<A href={'tel:' + tel}>{tel}</A>
            </div>
            <div>
                Data&nbsp;urodzenia:&nbsp;18.03.1993
            </div>
            <div className={'hide-on-print'}>
                Git:&nbsp;
                <A href={'https://github.com/minik01'}><AiFillGithub/></A>/
                <A href={'https://gitlab.com/dominik.wojnar'}><AiFillGitlab/></A>
            </div>
        </div>
    </>
}
