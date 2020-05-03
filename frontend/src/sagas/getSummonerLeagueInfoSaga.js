import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { getLeagueBySummonerId } from "../api";
import { types } from "../constants";

export function* getSummonerLeagueInfoSaga(action = '') {
  try {
    const summonerLeagueInfo = yield call(getLeagueBySummonerId, action.id);
    yield put(actions.setSummonerLeagueActionSuccess(summonerLeagueInfo));
console.log('summonerLeagueInfo', summonerLeagueInfo);
 
    if(summonerLeagueInfo.length > 0) {
      yield put(actions.getLeagueInfoAction(summonerLeagueInfo[0].leagueId));
    }

  } catch (error) {
    yield put(actions.setActionError(error));
  }
}

export default function* watchGetLeagueInfo() {
  yield takeEvery(types.GET_SUMMONER_LEAGUE, getSummonerLeagueInfoSaga);
}
