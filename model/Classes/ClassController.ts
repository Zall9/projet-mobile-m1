import {IClass} from "./IClass";
import Constants from "../Constants";

export class ClassController {

    /**
     * Il prend une chaîne comme argument et renvoie un objet qui a le même nom que la chaîne, mais avec la première lettre
     * en majuscule
     * @param {string} id - L'identifiant de la classe.
     * @returns L'objet classInfos du fichier.
     */
    static getById(id: string): IClass {
        return require((`./ClassList/${id}.ts`)).classInfos as IClass;
    }

    /**
     * Obtenez les classes par leurs identifiants.
     * @param {string[]} ids - string[] - un tableau d'identifiants de classe
     * @returns Un tableau d'objets IClass.
     */
    static getClassesByIds(ids: string[]): IClass[] {
        return ids.map((id) => this.getById(id));
    }

    /**
     * Si la propriété classInfo.image est "unknown", retournez le chemin vers l'image inconnue, sinon retournez le chemin
     * vers l'image de la classe
     * @param {IClass} classInfo - IClass - Il s'agit de l'objet de classe transmis à partir du composant parent.
     * @returns Le chemin de l'image pour la classe.
     */
    static getImage(classInfo: IClass): string {
        return classInfo.image === "unknown" ? Constants.UNKNOWN_PATH : `${Constants.IMAGE_PATH}class/${classInfo.image}${Constants.IMAGE_EXT}`;
    }
}