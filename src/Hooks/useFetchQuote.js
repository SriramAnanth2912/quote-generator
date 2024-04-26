const useFetchQuote = async (url, options) => {
  const quoteData = {
    quote: "",
    author: "",
    errorMessage: "",
  };
  const response = await fetch(url, options);
  try {
    if (response.status === 200) {
      const responses = await response.json();
      console.log("response", responses);
      quoteData.quote = responses[0].quote;
      quoteData.author = responses[0].author;
    } else {
      quoteData.errorMessage = "Error fetching the quote: " + response.status;
    }
  } catch (error) {
    quoteData.errorMessage = "Error in the request: " + error.message;
  }
  console.log("result_inside", quoteData);
  return quoteData;
};

export default useFetchQuote;
