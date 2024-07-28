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

  players = randomizePlayers(players);
  return (
    <>
      <div className="w-full">
        <h2 className="text-center text-4xl text-green-500 pb-5 font-bold">
          Equipos Resultantes
        </h2>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="rounded-md w-96 flex flex-wrap">
          <div className="w-full md:w-1/2">
            <p className="text-center text-2xl text-green-500 mb-6 font-bold border-b-2 border-green-500">
              Equipo 1
            </p>
            <p className="text-center text-white pb-2">
              <span className="font-bold">Derecha:</span> {players[0]}
            </p>
            <p className="text-center text-white pb-2">
              <span className="font-bold">Revés:</span> {players[1]}
            </p>
          </div>
          <div className="w-full md:w-1/2 border-l-0 md:border-l-2 border-green-500">
            <p className="text-center text-2xl text-green-500 mb-5 font-bold border-b-2 border-green-500">
              Equipo 2
            </p>
            <p className="text-center text-white pb-2">
              <span className="font-bold">Derecha:</span> {players[2]}
            </p>
            <p className="text-center text-white pb-2">
              <span className="font-bold">Revés:</span> {players[3]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
