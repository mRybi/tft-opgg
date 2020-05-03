import { types } from "../constants";

const getSumonerInfoForNickAction = (nickname) => ({
  type: types.GET_SUMMONER_INFO,
  nickname
});

const getSummonerMatchesAction = (id) => ({
  type: types.GET_SUMMONER_MATCHES,
  id
});

const getMatchInfoAction = (id) => ({
  type: types.GET_MATCH_INFO,
  id
});

const getSummonerLeagueAction = (id) => ({
  type: types.GET_SUMMONER_LEAGUE,
  id
});

const getLeagueInfoAction = (id) => ({
  type: types.GET_LEAGUE_INFO,
  id
});

const setSummonerInfoActionSuccess = (summonerInfo) => ({
  type: types.SET_SUMMONER_INFO_SUCCESS,
  summonerInfo,
});

const setSummonerMatchesActionSuccess = (summonerMatches) => ({
  type: types.SET_SUMMONER_MATCHES_SUCCESS,
  summonerMatches,
});

const setMatchInfoActionSuccess = (matchInfo) => ({
  type: types.SET_MATCH_INFO_SUCCESS,
  matchInfo,
});

const setSummonerLeagueActionSuccess = (summonerLeagueInfo) => ({
  type: types.SET_SUMMONER_LEAGUE_SUCCESS,
  summonerLeagueInfo,
});

const setLeagueInfoActionSuccess = (leagueInfo) => ({
  type: types.SET_LEAGUE_INFO_SUCCESS,
  leagueInfo,
});

const setActionError = (error) => ({
  type: types.SET_ACTION_ERROR,
  error,
});

const clearDataAction = () => ({
  type: types.CLEAR_ACTION
});




/////////////////////////
// const addToCartAction = (isbn) => ({
//   type: types.ADD_TO_CART,
//   payload: { isbn },
// });

// const removeFromCart = (isbn) => ({
//   type: types.REMOVE_FROM_CART,
//   payload: { isbn },
// });

export const actions = {
  getSumonerInfoForNickAction,
  getSummonerMatchesAction,
  getMatchInfoAction,
  getSummonerLeagueAction,
  getLeagueInfoAction,
  setSummonerInfoActionSuccess,
  setSummonerMatchesActionSuccess,
  setMatchInfoActionSuccess,
  setSummonerLeagueActionSuccess,
  setLeagueInfoActionSuccess,
  setActionError,
  clearDataAction
};
