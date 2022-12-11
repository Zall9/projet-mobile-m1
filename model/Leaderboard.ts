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
  public static MAX_PRINTABLE_USERNAME: number = 11;
  db: Database;
  datas!: ScoreRow[];

  constructor() {
    this.db = getDatabase();
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

  async init() {
    const dbRef = ref(this.db);
    const snapshot = await get(child(dbRef, "/users/"));
    if (snapshot.exists()) {
      this.datas = [];
      Object.keys(snapshot.val()).forEach((key) =>
        this.datas.push({ ...snapshot.val()[key], username: key })
      );
      this.datas.sort((a, b) => b.score - a.score);
    }
  }

  /**
   * Get the leaderboard at the given page (if page is too high, gives the first one)
   * @param page
   */
  public getLeaderboard(page: number): ScoreRow[] {
    const lookedPage =
      this.getMaxPage() < page ? this.getMaxPage() : page < 1 ? 1 : page;
    return this.datas.slice(
      (lookedPage - 1) * Leaderboard.NB_PPL_PER_LINE,
      lookedPage * Leaderboard.NB_PPL_PER_LINE
    );
  }

  /**
   * Gives the current maximal page index
   */
  public getMaxPage() {
    return Math.floor(this.datas.length / Leaderboard.NB_PPL_PER_LINE - 1) + 2;
  }

  /**
   * Get a user data from its username, if the user doesn't exists, returns undefined
   * @param username
   */
  public getUser(username: string) {
    return this.datas.find((value) => value.username == username);
  }
}
