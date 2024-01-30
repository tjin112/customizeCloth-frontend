import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import { getAllProducts } from "../api/product";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getAllProducts();
      // const res = await axios.get(
      //   "http://192.168.1.64:3000/api/product/65a61108949f325fbd059fe2"
      // );
      setData(res);
    } catch (error) {
      console.log("error==>", JSON.stringify(error));
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
