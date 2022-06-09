const Root= 'https://data.nba.net/10s/prod/v1';
const Today = Root + '/today.json';

/**
 * Constructs an endpoint for the scoreboard of a given date. If no date is provided then it will use the current date instead.
 * @param {*} date *Optional*. Date in the format of *YYYYMMDD*. This will not be validated.
 * @returns URL endpoint for the scoreboard
 */
function Scoreboard(date) {
    if (date) {
        return `${Root}/${date}/scoreboard.json`;
    }
    else {
        let date = TodaysDate();
        return `${Root}/${today}/scoreboard.json`;
    }

}
/**
 * Returns an endpoint for a game's play-by-play. Returns a blank string if `gameId` is not given.
 * @param {*} gameId ID of the desired game.
 * @param {*} date *Optional*. Date in the format of *YYYYMMDD*. This will not be validated.
 * @param {*} period *Optional*. Value from [1-4]. Defaults to 1.
 */
function PlayByPlay(gameId, date, period) {
    if (!gameId) return "";
    if (!date)  var date = TodaysDate();
    if (!period) var period = 1;  
    return `${Root}/${date}/${gameId}_pbp_${period}.json`
}

/**
 * Returns a string representation of today's date in *YYYYMMDD* format.
 */
function TodaysDate() {
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear() + "";
    today = today.getDate();
    if (month < 10)
        month = "0" + month;
    else month += ""
    if (today < 10)
        today = "0" + today;
    else today += "";
    return year + month + today;
}