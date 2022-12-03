import {IMinigame} from "./IMinigame";

let minigameIdList: string[];

export async function getStaticPropsMinigame(): Promise<string[]> {
    const {readdirSync} = await import("fs");
    return readdirSync("./model/Minigames/MinigameList/").map((file: string) => {
        return file.slice(0, -4);
    });
}

export class MinigameController {
    static init(initializer: string[]) {
        minigameIdList = initializer.slice();
    }

    static getById(id: string): IMinigame {
        return (minigameIdList.includes(id)
            ? require(`./MinigameList/${id}.tsx`)
            : require(`./MinigameList/Unknown.tsx`)).minigameInfos;
    }

    static pickRandomMinigame(): IMinigame {
        const validMinigames = minigameIdList.filter((v) => v !== "Unknown");
        return this.getById(
            validMinigames[Math.floor(Math.random() * validMinigames.length)]
        );
    }
}
