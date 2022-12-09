import {
  child,
  Database,
  get,
  getDatabase,
  ref,
  set,
} from "@firebase/database";

export type ScoreRow = {
  username: string;
  classId: string;
  score: number;
};

export class Leaderboard {
  public static NB_PPL_PER_LINE: number = 5;
  db: Database;
  datas!: ScoreRow[];

  constructor() {
    this.db = getDatabase();
    const dbRef = ref(this.db);
    get(child(dbRef, "/users/"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          Object.keys(snapshot.val()).forEach((key) =>
            this.datas.push(snapshot.val()[key])
          );
          this.datas.sort((a, b) => a.score - b.score);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /**
   * Update the given user in the db
   * @param user
   */
  public static updateUser(user: ScoreRow) {
    const db = getDatabase();
    set(ref(db, "users/" + user.username), {
      score: user.score,
      classId: user.classId,
    }).then(() => null);
  }

  /**
   * Get the leaderboard at the given page (if page is too high, gives the first one)
   * @param page
   */
  public getLeaderboard(page: number): ScoreRow[] {
    const lookedPage =
      Math.floor(this.datas.length / Leaderboard.NB_PPL_PER_LINE - 1) + 1 < page
        ? 1
        : page;
    return this.datas.slice(
      (lookedPage - 1) * Leaderboard.NB_PPL_PER_LINE,
      lookedPage * Leaderboard.NB_PPL_PER_LINE
    );
  }
}
