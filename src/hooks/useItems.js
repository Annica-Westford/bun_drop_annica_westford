import { useEffect, useState } from "react";
import { apiHelper } from "../services/apiHelper";

export function useItems() {
  const [burgers, setBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiHelper.getData("burgers");
        setBurgers(data);
      } catch (error) {
        setErrorMessage("Failed to fetch the data...");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiHelper.getData("sides");
        setSides(data);
      } catch (error) {
        setErrorMessage("Failed to fetch the data...");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiHelper.getData("drinks");
        setDrinks(data);
      } catch (error) {
        setErrorMessage("Failed to fetch the data...");
      }
    };

    fetchData();
  }, []);

  return {
    burgers,
    sides,
    drinks,
    errorMessage,
  };
}
