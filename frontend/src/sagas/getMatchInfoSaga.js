import { put, call, takeEvery } from "redux-saga/effects";
import { actions } from "../actions";
import { getMatchInfo } from "../api";
import { types } from "../constants";

export function* getMatchInfoSaga(action = '') {
  try {
    const matchInfo = yield call(getMatchInfo, action.id);
    yield put(actions.setMatchInfoActionSuccess(matchInfo));
  } catch (error) {
    yield put(actions.setActionError(error));
  }
}

export default function* watchGetMatchInfo() {
  yield takeEvery(types.GET_MATCH_INFO, getMatchInfoSaga);
}
