import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { getLeagueInfoById } from "../api";
import { types } from "../constants";

export function* getLeagueInfoSaga(action = '') {
  try {
    const leagueInfo = yield call(getLeagueInfoById, action.id);
    yield put(actions.setLeagueInfoActionSuccess(leagueInfo));
  } catch (error) {
    yield put(actions.setActionError(error));
  }
}

export default function* watchGetLeagueInfo() {
  yield takeEvery(types.GET_LEAGUE_INFO, getLeagueInfoSaga);
}
