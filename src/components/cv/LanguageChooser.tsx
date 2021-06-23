import React from "react";
import {FaCogs} from "react-icons/all";

declare var currentLanguage: string;

export function LanguageChooser() {
    return (
        <div className={'hide-on-print'} id="lang-selector">
            <select
                name="cars"
                defaultValue={"PL"}
                onChange={(event) => {
                    console.log(event.target.value);
                    currentLanguage = event.target.value;
                }}>
                <option value="pl">PL</option>
                <option value="en">EN</option>
            </select>
            <span className={'select-arrow'}> <FaCogs/> </span>

        </div>
    )
}
