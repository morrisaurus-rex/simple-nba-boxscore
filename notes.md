## Endpoints
_Note that all numbers are listed as strings unless otherwise stated._
`today.json`:`https://data.nba.net/10s/prod/v1/today.json`  
Under the `links` object in the returned JSON, we can get a number of relevant items:


#### scoreboard.json:`https://data.nba.net/10s/prod/v1/{{links.anchorDate}}/scoreboard.json`
Gives us a summary of the games that will take place on the given day. Match data for each game is stored within the `games` array with each element having the following interesting properties:  
- `seasonYear`(`string`): Year that the season starts  
- `gameId`(`string`): String used for other data endpoints on a specific game.  
- `arena`(`object`): Contains the location and name of the current arena  

#### boxscore.json:`https://data.nba.net/10s/prod/v1/{{links.anchorDate}}/{{gameId}}_boxscore.json`
Info incomplete. Note that the response time seems unusually long. Relevent properties:  
- `vTeam`(`object`): Holds information about the visiting team  
    - `teamId`(`string`): Used for other endpoints  
    - `triCode`(`string`): 3-letter abbreviation of the team used in broadcasts
    - `win`(`string`): Number of regular season wins
    `loss`(`string`): Number of regular season losses
    - `seriesWin`(`string`): Number of wins in current playoff series
    - `seriesLoss`(`string`): Number of losses in current playoff series
    - `score`(`string`): Points scored in the current game
    - `linescore`(`array`): Points scored by each team for each period
- `hTeam`(`object`): Holds information about the home team. Contains the same properties as `vTeam`.
- `previousMatchup`(`object`): Contains the `gameId` and `gameDate` of the previous game in the series.
- `stats`(`object`): Contains the boxscore stats, divided by `hTeam` (home team) and `vTeam` (visiting team).
    - `vTeam`/`hTeam`(`object`): Contains points and stat summaries for each team.
        - These are self-explanatory: `fastBreakPoints`, -`pointsInPaint`, `biggestLead`, `secondChancePoints`, `pointsOffTurnovers`, `longestRun`
        - `totals`(`object`): Contains statline totals for the whole team, names are self-explanatory.
            - `points`, `fgm`, `fga` , `fgp`, `ftm`, `fta`, `ftp`, `tpm`, `tpa`, `tpp`, `offReb`, `defReb`, `totReb`, `assists`, `pFouls`, `steals`, `turnovers`, `blocks`, `plusMinus`, `min`, `teamFouls`, `shortTimeoutRemaining`, `fullTieoutRemaining`
    - `activePlayers`(`array`): Each object contains statlines for each player.
        - `personId`, `firstName`, `lastName`: Self explanatory, `personId` is used for other API endpoints.
        - `isOnCourt`(`boolean`): True if the player is currently on court, false if the player is not.
        - `playerCode`(`string`): Seems to be a string in the format of `firstname_lastname`, all lowercase.
        - `jersey`: Player's jersey number
        - `sortKey`(`object`): Contains the sorted index for each stat item, starts at 1 and uses numbers unlike the rest of the JSON schema. Appears to be sorted by name.


#### pbp.json:`https://data.nba.net/10s/prod/v1/{{links.anchorDate}}/{{gameId}}_pbp_{{periodNum}}.json`
Contains the play-by-play under the `plays` array. First event is always the start of the clock. Values are strings unless otherwise specified.
- `clock`: Time left in the period  
- `eventMsgType`: Unknown what the values correspond to  
- `descriptions`: Short description of what happened  
- `personId`: ID of the person involved in the play  
- `teamId`: Team ID of the person involved  
- `vTeamScore`: Current score of the visiting team  
- `hTeamScore`: Current score of the home team  
- `isScoreChange`(`booelan`): True if the score changed on the play  
- `isVideoAvailable`(`boolean`): Undetermined  

