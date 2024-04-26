const useFetchImage = async (url, options) => {
  const imageData = {
    image: null,
    errorMessage: "",
  };
  const response = await fetch(url, options);
  try {
    if (response.status === 200) {
      const responseBlob = await response.blob();
      console.log("response", responseBlob);
      imageData.image = URL.createObjectURL(responseBlob);
    } else {
      imageData.errorMessage = "Error fetching the quote: " + response.status;
    }
  } catch (error) {
    imageData.errorMessage = "Error in the request: " + error.message;
  }
  console.log("result_inside", imageData);
  return imageData;
};

export default useFetchImage;
