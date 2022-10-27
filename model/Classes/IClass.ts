import Constants from "../Constants";

export abstract class IClass {
    abstract nom: string;
    abstract description: string;
    abstract image: string;

    getImage(): string {
        return `${Constants.IMAGE_PATH}class/${this.image}${Constants.IMAGE_EXT}`;
    }
}