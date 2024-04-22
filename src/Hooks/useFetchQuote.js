// import React from "react";

const useFetchQuote = async (url, options) => {
  const result = {
    quote: "",
    author: "",
  };
  let errorMessage = "";
  const error = new Error(errorMessage);
  const response = await fetch(url, options);
  try {
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);
      result.quote = result[0].quote;
      result.author = result[0].author;
      // } else if (response.status === 429) {
      //   const delay = Math.pow(2, 4) * 1000;
      //   await new Promise((resolve) => setTimeout(resolve, delay));
      //   await requestQuote(url, options); // Retry with both url and options
      //
    } else {
      errorMessage = "Error fetching the quote: " + response.status;
    }
  } catch (error) {
    errorMessage = "Error in the request: " + error.message;
  }
  return { result, error };
};

export default useFetchQuote;
