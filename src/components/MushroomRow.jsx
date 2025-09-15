import React from "react";
import currencyFormatter from "../helpers/currencyFormatter";

// ({address, country, price})
const MushroomRow = ({mushroom}) => {
  return (
    <tr>
      <td>{mushroom.address}</td>
      <td>{mushroom.country}</td>
      <td>{currencyFormatter.format(mushroom.price)}</td>
    </tr>
  );
}

// caching data so it does not get re-rendered when the values remain the same
const MushroomRowMem = React.memo(MushroomRow);

export default MushroomRow;
export { MushroomRowMem };