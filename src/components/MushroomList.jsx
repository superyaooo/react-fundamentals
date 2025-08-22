import MushroomRow from "./MushroomRow";

const mushrooms = [
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
          {mushrooms.map(m => <MushroomRow key={m.id} mushroom={m}/>)}
        </tbody>
      </table>
    </>
  );
};

export default HouseList;