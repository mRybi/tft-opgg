const got = require('got');
var express = require('express');

var router = express.Router();

const EUW_API_BASE_URL = 'https://euw1.api.riotgames.com/tft/';
const GET_SUMMONER_BY_NAME = 'summoner/v1/summoners/by-name/';
const GET_SUMMONER_LEAGUE = 'league/v1/entries/by-summoner/';
const GET_LEAGUE_INFO = 'league/v1/leagues/';

const EUW_API_BASE_MATCH_URL = 'https://europe.api.riotgames.com/tft/match/v1/matches/';
const GET_SUMMONER_MATCHES = 'by-puuid/';

const getPieczarson = `${EUW_API_BASE_URL}${GET_SUMMONER_BY_NAME}Fat%20Pie%20Char%20Son`;
const getPieczarsonLeague = `${EUW_API_BASE_URL}${GET_SUMMONER_LEAGUE}rZRWxIRzNqpec7h4tiJdeE64bN62dsns6M9BuUpjc56dyof9`;
const getPieczarsonLeagueInfo = `${EUW_API_BASE_URL}${GET_LEAGUE_INFO}84b5efae-a262-4706-9678-131b286cbee4`;
const getPieczarsonMatches = `${EUW_API_BASE_MATCH_URL}${GET_SUMMONER_MATCHES}GlKsb_V0ctTMi0sveOsqm_-E6H702K4SF_vtp0bg8s1TDZHUQayKKAdeueuNM2KHZw2ZFYRRvgyiYA/ids?count=${20}`;
const getPieczarsonMatchInfo = `${EUW_API_BASE_MATCH_URL}${GET_SUMMONER_MATCHES}EUW1_4558360996`;


/* GET users listing. */
router.get('/:nick', async function (req, res, next) {
  try {
    const query = req.params.nick;
    const response = await got(`${EUW_API_BASE_URL}${GET_SUMMONER_BY_NAME}${query}`, {
      headers: {
        'X-Riot-Token': 'RGAPI-07861a03-575a-4f9e-9c52-f7b4e48e88fe'
      }
    }).json();
    res.send(response);

  } catch (error) {
    throw new Error(error);
  }
});

module.exports = router;