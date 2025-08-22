import Banner from "./components/Banner"
import './App.css'
import HouseList from "./components/MushroomList"

function App() {
  return (
    <>
      {/* <Banner headerText="looking for a mushroom to rent" /> */}
      <Banner>
        <div>ISO a mushroom rental.</div>
      </Banner>
      <HouseList/>
    </>
  )
}

export default App
