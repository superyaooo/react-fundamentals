const MushroomRow = ({mushroom}) => {
  return (
    <tr>
      <td>{mushroom.address}</td>
      <td>{mushroom.country}</td>
      <td>{mushroom.price}</td>
    </tr>
  );
}

export default MushroomRow;