import { IMinigame } from "./IMinigame";

let minigameIdList: string[];

export class MinigameController {
  static init() {
    minigameIdList = ["Memory", "Panier", "RPS", "Unknown"];
  }

  static getById(id: string): IMinigame {
    return (
      minigameIdList.includes(id)
        ? require(`./MinigameList/${id}.tsx`)
        : require(`./MinigameList/Unknown.tsx`)
    ).minigameInfos;
  }

  static pickRandomMinigame(): IMinigame {
    const validMinigames = minigameIdList.filter((v) => v !== "Unknown");
    return this.getById(
      validMinigames[Math.floor(Math.random() * validMinigames.length)]
    );
  }
}
