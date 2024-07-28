import React from "react";

export default function TeamsResult(props) {
  let players = props.players;

  function randomizePlayers(players) {
    let currentIndex = players.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [players[currentIndex], players[randomIndex]] = [
        players[randomIndex],
        players[currentIndex],
      ];
    }

    return players;
  }

    players = randomizePlayers(players)
  return (
    <>
      <div className="w-full px-10 md:px-0">
        <h2 className="text-center text-4xl text-green-500 pb-5 font-bold">
          Equipos Resultantes
        </h2>
      </div>

      <div className="rounded-md border-green-500 border-2 w-full flex">
        <div className="w-full">
          <div className="py-10 border-green-500 border-2 text-center font-semibold text-green-500">{players[0]}</div>
          <div className="py-10 border-green-500 border-2 text-center font-semibold text-green-500">{players[1]}</div>
        </div>
        <div className="w-full">
          <div className="py-10 border-green-500 border-2 text-center font-semibold text-green-500">{players[2]}</div>
          <div className="py-10 border-green-500 border-2 text-center font-semibold text-green-500">{players[3]}</div>
        </div>
      </div>
    </>
  );
}
