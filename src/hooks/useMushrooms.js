import { useEffect, useState, useRef } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useMushrooms = () => {
  const [mushrooms, setMushrooms] = useState([]);
  const counter = useRef(0); // returns current value

  const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

  useEffect(() => {
    const fetchMushrooms = async() => {
      setLoadingState(loadingStatus.isLoading);
      try {
        const response = await fetch("http://localhost:4000/houses");
        const mushrooms = await response.json();
        setMushrooms(mushrooms);
        setLoadingState(loadingStatus.loaded);
      } catch {
        setLoadingState(loadingStatus.hasError);
      }

    };

    fetchMushrooms();
    counter.current++; // does not cause re-render when value changes
  }, []);  // execute effect once when component is rendered by using []

  return {mushrooms, setMushrooms, loadingState};
};

export default useMushrooms;