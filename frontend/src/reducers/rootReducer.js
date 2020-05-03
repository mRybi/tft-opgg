import { types } from "../constants";

export const initialState = {
  summonerInfo: null,
  summonerMatches: null,
  matchInfo: null,
  summonerLeague: null,
  leagueInfo: null,
  isFetching: false,
  hasError: false,
  dataLoaded: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SUMMONER_INFO_SUCCESS:
      return {
        ...state,
        summonerInfo: action.summonerInfo,
        isFetching: false
      };
    case types.SET_SUMMONER_MATCHES_SUCCESS:
      return {
        ...state,
        summonerMatches: action.summonerMatches,
        isFetching: false
      };
    case types.SET_MATCH_INFO_SUCCESS:
      return {
        ...state,
        matchInfo: action.matchInfo,
        isFetching: false,
        dataLoaded: true
      };
    case types.SET_SUMMONER_LEAGUE_SUCCESS:
      return {
        ...state,
        summonerLeague: action.summonerLeagueInfo,
        isFetching: false
      };
    case types.SET_LEAGUE_INFO_SUCCESS:
      return {
        ...state,
        leagueInfo: action.leagueInfo,
        isFetching: false
      };
    case types.SET_ACTION_ERROR:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        dataLoaded: true
      };
    case types.CLEAR_ACTION:
      return initialState;

    case types.GET_SUMMONER_INFO:
    case types.GET_SUMMONER_MATCHES:
    case types.GET_MATCH_INFO:
    case types.GET_SUMMONER_LEAGUE:
    case types.GET_LEAGUE_INFO:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

export default rootReducer;
