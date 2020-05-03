import "./logoButton.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../actions";

import React from "react";

export const LogoButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      className="img"
      onClick={() => {
        dispatch(actions.clearDataAction());
        history.push("/");
      }}
    ></div>
  );
};
