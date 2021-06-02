class TranslationClass {
    constructor(protected parent: TranslationClass | null, protected objectName: string) {
    }

    key(): string {
        return this.parent!.key() + translator.separator + this.objectName;
    }

    translate(key: string): string {
        return translator.translate(this.key() + translator.separator + key);
    }
}

export class Translator extends TranslationClass {
    constructor(public currentLanguage: string, public separator: string = '.') {
        super(null, '');
    }

    key(): string {
        return '';
    }

    translate(key: string): string {
        // TODO
        return '{' + key + '}';
    }

    public readonly lang = new langClass(this, 'lang');

}

class langClass extends TranslationClass {

    public EN() {
        return this.translate('EN');
    }

    public DE() {
        return this.translate('DE');
    }

    public PL() {
        return this.translate('PL');
    }
}

export const translator = new Translator('EN');
