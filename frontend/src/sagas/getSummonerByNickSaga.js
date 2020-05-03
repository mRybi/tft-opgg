import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { getSummonerByNick } from "../api";
import { types } from "../constants";

export function* getSummonerByNickSaga(action = '') {
  try {
    const summonerInfo = yield call(getSummonerByNick, action.nickname);
    yield put(actions.setSummonerInfoActionSuccess(summonerInfo));
    yield put(actions.getSummonerLeagueAction(summonerInfo.id));
    yield put(actions.getSummonerMatchesAction(summonerInfo.puuid));

  } catch (error) {
    yield put(actions.setActionError(error));
  }
}

export default function* watchGetSummonerByNick() {
  yield takeEvery(types.GET_SUMMONER_INFO, getSummonerByNickSaga);
}