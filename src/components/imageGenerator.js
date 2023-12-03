import { useState, useEffect } from "react";

const ImageGenerator = () => {
  const [image, setImage] = useState("");
  const data = "https://api-ninjas.com";
  const category = "nature";
  const url = `${data}/v1/randomimage?category=${category}`;
  const options = {
    method: "GET",
    headers: {
      "X-Api-key": "pDLaXJyuV2IjCaQx0TdZnQ==UVbe8LqR7nyg6JbE",
      Accept: "image/jpeg",
    },
  };
  //   const requestImage = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       if (response.status === 200) {
  //         const imagejson = await response.json();
  //         const imageUrl = imagejson[0]?.url;
  //         setImage(imageUrl);
  //         console.log(imagejson);
  //       } else {
  //         console.error("failed to fetch image");
  //       }
  //     } catch (e) {
  //       console.error("Error fetching image: " + e.message);
  //     }
  //   };
  useEffect(() => {
    // requestImage();
    setImage(``);
  }, []);

  return image;
  //   return (
  //     <div className="bg-image-container">
  //       {image && (
  //         <>
  //           <img alt="a nice nature view" src={image} className="image"></img>
  //           <div className="image-caption">A nice image</div>
  //         </>
  //       )}
  //     </div>
  //   );
};

export { ImageGenerator };
