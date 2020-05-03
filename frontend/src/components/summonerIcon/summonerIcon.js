import './summonerIcon.css';
import React from "react";

export const SummonerIcon = ({ iconId }) => (
  <img
    className="profile-icon"
    src={`http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${iconId}.jpg`}
  />
);
