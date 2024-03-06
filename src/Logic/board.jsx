import { WINNER_COMBOS } from "../Constants/constants.jsx";

export const checkWninner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        //Ganador
        return boardToCheck[a]
      }
    }
    //No hubo ganador
    return null
  }