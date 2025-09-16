import React from "react";
import currencyFormatter from "../helpers/currencyFormatter";

// ({address, country, price})
const MushroomRow = ({mushroom, selectMushroom}) => {
  return (
    <tr onClick={() => selectMushroom(mushroom)}>
      <td>{mushroom.address}</td>
      <td>{mushroom.country}</td>
      { mushroom.price &&
        <td className={`${mushroom.price >= 500000 ? "text-primary" : ""}`}>
          {currencyFormatter.format(mushroom.price)}
        </td>
      }
    </tr>
  );
}

// caching data so it does not get re-rendered when the values remain the same
// const MushroomRowMem = React.memo(MushroomRow);

export default MushroomRow;
// export { MushroomRowMem };