import { IMinigame } from "./IMinigame";

let minigameIdList: string[];

export class MinigameController {
  static init() {
    minigameIdList = ["Memory", "Panier", "RPS"];
  }

  static getById(id: string): IMinigame {
    return (
      minigameIdList.includes(id)
        ? require(`./MinigameList/${id}.tsx`)
        : require(`./MinigameList/Unknown.tsx`)
    ).minigameInfos;
  }

  static pickRandomMinigame(): IMinigame {
    return this.getById(
      minigameIdList[Math.floor(Math.random() * minigameIdList.length)]
    );
  }
}
