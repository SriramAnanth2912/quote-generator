/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import useFetchImage from "../Hooks/useFetchImage";
const ImageGenerator = () => {
  const [imageData, setImageData] = useState({
    image: null,
    errorMessage: "",
  });
  const category = "nature";

  useEffect(() => {
    const FetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY_QUOTE;
      const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
      const options = {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          Accept: "image/jpeg",
        },
      };
      try {
        const response = await useFetchImage(url, options);
        // console.log("response-image: " + response);
        setImageData(response);
      } catch (error) {
        setImageData((prevData) => ({
          ...prevData,
          errorMessage: "Error fetching image: " + error.message,
        }));
      }
    };
    FetchData();
  }, []);

  return (
    <div className="image-container">
      {imageData.image && (
        <img alt="a nice nature view" title="nature" src={imageData.image} className="image" />
      )}
    </div>
  );
};

export default ImageGenerator;
