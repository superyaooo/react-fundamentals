import { useEffect, useState } from "react";
import { MushroomRowMem } from "./MushroomRow";

const MushroomList = () => {
  const [mushrooms, setMushrooms] = useState([]);

  useEffect(() => {
    const fetchMushrooms = async() => {
      const response = await fetch("https://localhost:4000/house");
      const mushrooms = await response.json();
      setMushrooms(mushrooms);
    };

    fetchMushrooms();
  }, []);  // execute effect once when component is rendered by using []

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
          {mushrooms.map(m => <MushroomRowMem key={m.id} mushroom={m}/>)}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addMushroom}>
        Add
      </button>
    </>
  );
};

export default MushroomList;