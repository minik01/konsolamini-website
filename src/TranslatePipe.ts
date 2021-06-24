import translationBundle from "./model/translator.bundle";

export let currentLanguage = 'pl';

export function setCurrentLanguage(lang: string) {
    currentLanguage = lang;
}

export function translate(path: string) {
    return translationBundle.get(currentLanguage)?.get(path) || "{" + path + "}";
}
