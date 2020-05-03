import { all } from "redux-saga/effects";

import leagueInfoSaga from "./getLeagueInfoSaga";
import matchInfoSaga from "./getMatchInfoSaga";
import summonerInfoSaga from "./getSummonerByNickSaga";
import summonerLeagueInfoSaga from "./getSummonerLeagueInfoSaga";
import summonerMatchesSaga from "./getSummonerMatchesSaga";

export default function* rootSaga() {
  yield all([leagueInfoSaga(), matchInfoSaga(), summonerInfoSaga(),summonerLeagueInfoSaga(),summonerMatchesSaga()]);
}
