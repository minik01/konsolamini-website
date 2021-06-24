import React from "react";
import {FaCogs} from "react-icons/all";
import {setCurrentLanguage} from "../../TranslatePipe";


export function LanguageChooser(props: { setLanguage: React.Dispatch<React.SetStateAction<string>> }) {
    return (
        <div className={'hide-on-print'} id="lang-selector">
            <select
                name="lang"
                defaultValue={"PL"}
                onChange={(event) => {
                    setCurrentLanguage(event.target.value);
                    props.setLanguage(event.target.value)
                }}>
                <option value="pl">PL</option>
                <option value="en">EN</option>
            </select>
            <span className={'select-arrow'}> <FaCogs/> </span>

        </div>
    )
}
