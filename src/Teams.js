// Team functional component

import React, { useState } from "react";
import UIFx from "uifx";
import shotAudio from "./sounds/hockeystick.wav";
import goalAudio from "./sounds/Vanc2.wav";

const Teams = (props) => {
  const [shots, setShots] = useState(0);
  const [points, setPoints] = useState(0);
  const [shotChance, setShotChance] = useState(0);

  const shoot = () => {
    const shotSound = new UIFx(shotAudio, { volume: 0.25 });
    const goalSound = new UIFx(goalAudio, { volume: 0.25 });
    setShots(shots + 1);
    setShotChance(Math.floor(Math.random() * 100));
    setPoints(shotChance >= 85 ? points + 1 : points);
    shotChance >= 85 ? goalSound.play() : shotSound.play();
  };

  const { city, teamName, logoUrl } = props;
  return (
    <>
      <div className="team-info">
        <h2>
          {city} {teamName}
        </h2>
      </div>
      <div className="shotButton">
        {shots < 20 ? (
          <button onClick={shoot}>Take Shot</button>
        ) : (
          "No more shot"
        )}
      </div>
      <p>Shots: {shots}</p>
      <p>
        Opponent Save Percentage:{" "}
        {shots === 0 ? "" : `${Math.round(((shots - points) / shots) * 100)}%`}
      </p>
      <div className="broadcastBar">
        <img src={logoUrl} alt={logoUrl} />
        <h2>{points}</h2>
      </div>
    </>
  );
};

export default Teams;
