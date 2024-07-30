import { useState } from "react";

export default function TeamsResult({ players }) {
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

  const [ordenedPlayers] = useState(randomizePlayers(players));

  return (
    <>
      <div className="w-[300px] flex items-center justify-center bg-[#2763f7]">
        <div className="w-full">
          <div className="border-4  border-White w-full h-96">
            <div className="h-48 border-b-4 border-white">
              <div className="h-16 border-b-4 border-white text-white font-semibold uppercase text-2xl flex items-center justify-center">
                Equipo 1
              </div>
              <div className="h-32 flex">
                <div className="h-full w-1/2 flex flex-col items-center justify-center">
                  <p className="w-full text-center text-white uppercase font-semibold">
                    Derecha
                  </p>
                  <p className="w-full text-center text-white">
                    {ordenedPlayers[0]}
                  </p>
                </div>
                <div className="h-full w-1/2 flex flex-col items-center justify-center border-l-4 border-white">
                  <p className="w-full text-center text-white uppercase font-semibold">
                    Revés
                  </p>
                  <p className="w-full text-center text-white">
                    {ordenedPlayers[1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="h-48">
              <div className="h-32 flex">
                <div className="h-full w-1/2 flex flex-col items-center justify-center">
                  <p className="w-full text-center text-white uppercase font-semibold">
                    Revés
                  </p>
                  <p className="w-full text-center text-white">
                    {ordenedPlayers[2]}
                  </p>
                </div>
                <div className="h-full w-1/2 flex flex-col items-center justify-center border-l-4 border-white">
                  <p className="w-full text-center text-white uppercase font-semibold">
                    Derecha
                  </p>
                  <p className="w-full text-center text-white">
                    {ordenedPlayers[3]}
                  </p>
                </div>
              </div>
              <div className="h-16 border-t-4 border-white text-white font-semibold uppercase text-2xl flex items-center justify-center">
                Equipo 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
