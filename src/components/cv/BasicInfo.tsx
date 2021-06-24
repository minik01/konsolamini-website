import {translate} from "../../TranslatePipe";
import React from "react";
import {AiFillGithub, AiFillGitlab} from "react-icons/ai";
import {A} from "../A";
import {FaPhoneAlt, MdEmail} from "react-icons/all";

export function BasicInfo() {
    const mail = 'konsolamini@gmail.com';
    const tel = '+48 736 77 22 65';
    return <>
        <h2>{translate('common.contact')}</h2>
        <div>
            <div>
                <A href={'mailTo:' + mail}> <MdEmail/>&nbsp;{mail}</A>
            </div>
            <div>
                <A href={'tel:' + tel}><FaPhoneAlt/>&nbsp;{tel}</A>
            </div>
            <div>
                {translate('common.birth')}:&nbsp;18.03.1993
            </div>
            <div className={'hide-on-print'}>
                Git:&nbsp;
                <A href={'https://github.com/minik01'}><AiFillGithub/></A>/
                <A href={'https://gitlab.com/dominik.wojnar'}><AiFillGitlab/></A>
            </div>
        </div>
    </>
}
