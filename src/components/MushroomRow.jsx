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

export default MushroomRow;