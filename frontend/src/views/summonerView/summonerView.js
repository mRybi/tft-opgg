import './summonerView.css';

import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { actions } from "../../actions";
import { SummonerIcon } from '../../components/summonerIcon/summonerIcon';
import { SummonerNick } from '../../components/summonerNick/summonerNick';


function SummonerView() {

  const {
    summonerInfo
  } = useSelector((state) => state);



  return (
    <div className="App">
      <header className="App-header">
        {summonerInfo && <div className="wrapper">
            
            <SummonerIcon iconId={summonerInfo.profileIconId}/>
            <SummonerNick nick={summonerInfo.name}/>

            asd
        </div>}
      </header>
    </div>
  );
}

export default SummonerView;
