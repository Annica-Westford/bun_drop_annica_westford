import { useEffect, useState } from "react";
import { apiHelper } from "../services/apiHelper";

export function useItems() {
  const [burgers, setBurgers] = useState([]);
  const [sides, setSides] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiHelper.getData("burgers");
        setBurgers(data);
      } catch (error) {
        console.log(error);
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
        console.log(error);
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
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return {
    burgers,
    sides,
    drinks,
  };
}
