import React, { useState, useCallback, useEffect } from "react";
import "./homeView.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions";
import { useHistory } from "react-router-dom";


function HomeViev() {
  const history = useHistory();

  const [query, setQuery] = useState("");

  const {
    isFetching,
    dataLoaded
  } = useSelector((state) => state);

  const dispatch = useDispatch();

//   useEffect(() => {
//       if(dataLoaded === true) {
//           history.push("/summoner")  
//       }
// }, [dataLoaded]);


  const handleSearch = useCallback(() => {
    dispatch(actions.getSumonerInfoForNickAction(query));
    history.push("/summoner")  
    
  }, [dispatch, query]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="field is-grouped">
          <input
            className="input"
            type="text"
            placeholder="Search for summoner"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                handleSearch();
              }
            }}
          />
          <button className={` ${isFetching ? 'is-loading' : ''} button is-info`} onClick={() => handleSearch()}>
            <span className="icon is-small">
              <i className="fas fa-search"></i>
            </span>
            <span>Search</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default HomeViev;
