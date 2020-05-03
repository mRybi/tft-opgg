import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { getSummonerMatches } from "../api";
import { types } from "../constants";

export function* getSummonerMatchesSaga(action = '') {
  try {
    const summonerMatches = yield call(getSummonerMatches, action.id);
    yield put(actions.setSummonerMatchesActionSuccess(summonerMatches));
    yield put(actions.getMatchInfoAction('EUW1_4558360996'));

  } catch (error) {
    yield put(actions.setActionError(error));
  }
}

export default function* watchGetSummonerMatches() {
  yield takeEvery(types.GET_SUMMONER_MATCHES, getSummonerMatchesSaga);
}
