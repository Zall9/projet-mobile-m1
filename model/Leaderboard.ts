export type ScoreLine = {
    username: string,
    score: number
}

export class Leaderboard {
    public static getLeaderboard(page: number): ScoreLine[] {
        return [{username: "Banana", score: 8}];
    };
}