import Banner from "./components/Banner"
import './App.css'
import HouseList from "./components/MushroomList"
import { Suspense } from "react"

function App() {
  return (
    <>
      {/* <Banner headerText="looking for a mushroom to rent" /> */}
      <Banner>
        <div>ISO a mushroom rental.</div>
      </Banner>
      <Suspense fallback={<h3>Loading...</h3>}>
        <HouseList/>
      </Suspense>
    </>
  )
}

export default App
