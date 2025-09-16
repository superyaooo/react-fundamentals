import Banner from "./components/Banner"
import './App.css'
import MushroomList from "./components/MushroomList"
import { Suspense, useState } from "react"
import Mushroom from "./components/Mushroom";

function App() {
  const [selectedMushroom, setSelectedMushroom] = useState();

  const setSelectedMushroomWrapper = (mushroom) => {
    setSelectedMushroom(mushroom);
  };

  return (
    <>
      {/* <Banner headerText="looking for a mushroom to rent" /> */}
      <Banner>
        <div>ISO a mushroom rental.</div>
      </Banner>
      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <HouseList/>
      </Suspense> */}
      {selectedMushroom ? <Mushroom mushroom={selectedMushroom}/> 
        : <MushroomList selectMushroom={setSelectedMushroomWrapper}/>}
    </>
  )
}

export default App
