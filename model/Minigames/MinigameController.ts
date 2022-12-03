import { IMinigame } from "./IMinigame";

let minigameIdList: string[];

export async function getStaticPropsMinigame(): Promise<string[]> {
  const { readdirSync } = await import("fs");
  return readdirSync("./model/Minigames/MinigameList/").map((file: string) => {
    return file.slice(0, -3);
  });
}

export class MinigameController {
  static init(initializer: string[]) {
    minigameIdList = initializer.slice();
  }

  static getById(id: string): IMinigame {
    console.log("ID FROM GETID", id);
    console.log("REQUIRED", require(`./MinigameList/${id}.tsx`));
    console.log("minigameIdList.includes(id)", minigameIdList.includes(id));
    console.log("minigameIdList", minigameIdList);
    const minigame: IMinigame = minigameIdList.includes(id)
      ? require(`./MinigameList/${id}.tsx`)
      : require(`./MinigameList/Unknown.tsx`);
    console.log("MINIGAME APRES IMPORT", Object.keys(minigame));
    return minigame;
  }

  static pickRandomMinigame(): IMinigame {
    const validMinigames = minigameIdList.filter((v) => v !== "Unknown");
    return this.getById(
      validMinigames[Math.floor(Math.random() * validMinigames.length)]
    );
  }
}
