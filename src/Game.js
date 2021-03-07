import React, { useEffect, useState } from "react";

import wingsLogo from "./img/wingsLogo.png";
import avsLogo from "./img/avsLogo.png";
import flyersLogo from "./img/flyersLogo.png";
import leafsLogo from "./img/leafsLogo.png";

import Teams from "./Teams";

const Game = () => {
  const [timer, setTimer] = useState(30);
  const [team1, setTeam1] = useState({});
  const [team2, setTeam2] = useState({});
  const NHLteams = [
    {
      city: "Detroit",
      teamName: "Red Wings",
      logoUrl: "./img/wingsLogo.png",
      abbre: "Det",
      arena: "Little Caesars Arena",
    },
    {
      city: "Colorado",
      teamName: "Avalanche",
      logoUrl: "./img/avsLogo.png",
      abbre: "Col",
      arena: "Ball Arena",
    },
    {
      city: "Philladelphia",
      teamName: "Flyers",
      logoUrl: "./img/flyersLogo.png",
      abbre: "Phi",
      arena: "Wells Fargo Center",
    },
    {
      city: "Toronto",
      teamName: "Maple Leafs",
      logoUrl: "./img/leafsLogo.png",
      abbre: "Tor",
      arena: "Scotiabank Arena",
    },
  ];

  const selectTeams = () => {
    setTeam1(NHLteams[Math.floor(Math.random() * NHLteams.length)]);
    setTeam2(NHLteams[Math.floor(Math.random() * NHLteams.length)]);
  };

  useEffect(() => {
    selectTeams();
  }, []);

  const newGame = () => window.location.reload();
  useEffect(() => {
    window.timer = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        return newGame();
      }
    }, 1000);
    return () => {
      clearInterval(window.timer);
    };
  }, [setTimer, newGame]);

  return (
    <>
      <div className="header">
        <h1>Welcome To: {team2.arena}</h1>
      </div>
      <div className="timer">
        <h1>Game time remaining: {timer}</h1>
      </div>

      <div className="display">
        <div className="team1">
          <Teams
            city={team1.city}
            teamName={team1.teamName}
            logoUrl={team1.logoUrl}
          />
        </div>
        <div className="team2">
          <Teams
            city={team2.city}
            teamName={team2.teamName}
            logoUrl={team2.logoUrl}
          />
        </div>

        <button onClick={newGame}>New Game</button>
      </div>
    </>
  );
};

export default Game;

// Game Functional component
