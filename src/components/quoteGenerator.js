import React, { useEffect, useState } from "react";
import useFetchQuote from "../Hooks/useFetchQuote";

const QuoteGenerator = () => {
  const [quoteData, setQuoteData] = useState({
    quote: "",
    author: "",
    errorMessage: "",
  });

  useEffect(() => {
    const FetchData = async () => {
      const category = "inspirational";
      const apiKey = process.env.REACT_APP_API_KEY_QUOTE;
      const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
      const options = {
        method: "GET",
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      };

      try {
        const result = await useFetchQuote(url, options);
        console.log("result", result);
        setQuoteData(result);
      } catch (error) {
        setQuoteData((prevData) => ({
          ...prevData,
          errorMessage: "Error in fetching the quote: " + error.message,
        }));
      }
    };
    FetchData();
  }, []);

  return (
    <div className="quote-container">
      <div className="quote" title={`quote by ${quoteData.author}`}>
        {quoteData.quote}
      </div>
      <div className="author"> -{quoteData.author}</div>
      {quoteData.errorMessage && <div className="error">{quoteData.errorMessage}</div>}
    </div>
  );
};

export default QuoteGenerator;
