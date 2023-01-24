import { winnersCounter, currentWinnersTotal } from "../view/view";
import { base, basePath } from "../store/api-servise";
import { createQuery } from "../store/api-servise";
// !------------------------------------СOUNT-W-----------
let totalcountWinner = 0;
export const resultCountWinner = async function () {
  const response = await fetch(
    `${base}${basePath.winners}${createQuery([{ key: "_page", value: "0" }])}`
  );
  const countWinner = Number(response.headers.get("X-Total-Count"));
  return countWinner;
};

export const countWinner = async () => {
  totalcountWinner = await resultCountWinner();
  winnersCounter.innerHTML = `Winners (${totalcountWinner})`;
  currentWinnersTotal.innerHTML = Math.ceil(totalcountWinner / 10);
};
