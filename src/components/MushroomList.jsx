import { useState } from "react";
import MushroomRow from "./MushroomRow";

const mushroomsArray = [
  {
    id:1,
    address: "124 street",
    country: "usa",
    price: 900
  },
  {
    id:2,
    address: "2449 ln",
    country: "usa",
    price: 800
  }
];

const HouseList = () => {
  const [mushrooms, setMushrooms] = useState(mushroomsArray);

  const addMushroom = () => {
    setMushrooms([
      ...mushrooms, 
      {
        id: 6,
        address: "4086 boohoo ln",
        country: "usa",
        price: 601
      },
    ]);
  };

  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Mushrooms currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking Price</th>
          </tr>
        </thead>
        <tbody>
          {/* spread {...m} to pass in all properties of m */}
          {/* {mushrooms.map(m => <MushroomRow key={m.id} {...m} />)} */}
          {mushrooms.map(m => <MushroomRow key={m.id} mushroom={m}/>)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addMushroom}>
        Add
      </button>
    </>
  );
};

export default HouseList;