/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const ImageGenerator = () => {
  const [image, setImage] = useState(null);
  const category = "nature";
  const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "F4UznSTbkEj02WvVYlOEyTN8HeUlStiOkTroEgK8",
      Accept: "image/jpeg",
    },
  };

  useEffect(() => {
    const requestImage = async (url, options) => {
      try {
        const response = await fetch(url, options);
        if (response.status === 200) {
          const responseBlob = await response.blob();
          const imageUrl = URL.createObjectURL(responseBlob);
          setImage(imageUrl);
        } else if (response.status === 429) {
          const delay = Math.pow(2, 4) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          await requestImage(url);
        } else {
          console.error("Failed to fetch image");
        }
      } catch (error) {
        console.error("Error fetching image: " + error.code);
      }
    };
    requestImage(url, options);
  }, []);

  return (
    <div className="image-container">
      {image && <img alt="a nice nature view" src={image} className="image" />}
    </div>
  );
};

export default ImageGenerator;
