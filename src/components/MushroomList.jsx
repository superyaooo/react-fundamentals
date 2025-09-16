import loadingStatus from "../helpers/loadingStatus";
import useMushrooms from "../hooks/useMushrooms";
import MushroomRow from "./MushroomRow";
import LoadingIndicator from "./LoadingIndicator";
import ErrorBoundary from "./ErrorBoundary";

const MushroomList = ({selectMushroom}) => {
  const {mushrooms, setMushrooms, loadingState} = useMushrooms();
  
  if(loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState}/>
  }
  
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
          <ErrorBoundary fallback="error loading mushroom rows!">
            {mushrooms.map(m => <MushroomRow key={m.id} 
              selectMushroom={selectMushroom} mushroom={m}/>)}
          </ErrorBoundary>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addMushroom}>
        Add
      </button>
    </>
  );
};

export default MushroomList;