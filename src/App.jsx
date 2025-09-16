import Banner from "./components/Banner"
import './App.css'
import MushroomList from "./components/MushroomList"
import { Suspense, useState } from "react"
import Mushroom from "./components/Mushroom";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [selectedMushroom, setSelectedMushroom] = useState();

  const setSelectedMushroomWrapper = (mushroom) => {
    setSelectedMushroom(mushroom);
  };

  return (
    <ErrorBoundary fallback="Somethign went wrong...">
      {/* <Banner headerText="looking for a mushroom to rent" /> */}
      <Banner>
        <div>ISO a mushroom rental.</div>
      </Banner>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <HouseList/>
      </Suspense> */}
      {selectedMushroom ? <Mushroom mushroom={selectedMushroom}/> 
        : <MushroomList selectMushroom={setSelectedMushroomWrapper}/>}
    </ErrorBoundary>
  )
}

export default App;
