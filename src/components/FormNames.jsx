import React, { useRef, useState } from "react";
import TeamsResult from "./TeamsResult";

export default function FormNames() {
  const player1 = useRef("");
  const player2 = useRef("");
  const player3 = useRef("");
  const player4 = useRef("");

  const [players, setPlayers] = useState([]);

  function handlePlayers() {
    if (
      player1.current.value != "" &&
      player2.current.value != "" &&
      player3.current.value != "" &&
      player4.current.value != ""
    ) {
      setPlayers([
        player1.current.value,
        player2.current.value,
        player3.current.value,
        player4.current.value,
      ]);
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-center">
      <div className="w-full  px-10 md:px-0">
        <form>
          <div className="w-full mb-10">
            <h1 className="text-center text-4xl font-bold text-green-500">
              Padel Team Randomizer
            </h1>
          </div>

          <div className="w-full flex justify-center items-center gap-4 mb-10">
            <input
              type="text"
              name="player1"
              id="player1"
              ref={player1}
              className="rounded-md border-2 border-green-500 h-10 text-center w-full md:w-1/4"
              placeholder="Jugador"
              required
            />
            <input
              type="text"
              name="player2"
              id="player2"
              ref={player2}
              className="rounded-md border-2 border-green-500 h-10 text-center w-full md:w-1/4"
              placeholder="Jugador"
              required
            />
            <input
              type="text"
              name="player3"
              id="player3"
              ref={player3}
              className="rounded-md border-2 border-green-500 h-10 text-center w-full md:w-1/4"
              placeholder="Jugador"
              required
            />
            <input
              type="text"
              name="player4"
              id="player4"
              ref={player4}
              className="rounded-md border-2 border-green-500 h-10 text-center w-full md:w-1/4"
              placeholder="Jugador"
              required
            />
          </div>

          <div className="w-full mb-10">
            <button
              type="button"
              className="w-full bg-green-500 rounded-md h-10 text-white px-4"
              onClick={handlePlayers}
            >
              {players.length > 0 ? "Genera otra vez" : "Genera equipos"}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full">
        {players.length > 0 ? <TeamsResult players={players} /> : ""}
      </div>
    </div>
  );
}
