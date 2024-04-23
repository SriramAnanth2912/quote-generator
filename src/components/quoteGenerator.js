/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// modify the styles and make sure they render only one time; try to use the custom hook created
const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const category = "inspirational";

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY_QUOTE;
    const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    };

    console.log("API Key: " + process.env.REACT_APP_API_KEY_QUOTE);

    const requestQuote = async (url, options) => {
      try {
        const response = await fetch(url, options);
        if (response.status === 200) {
          const result = await response.json();
          console.log(result);
          let Quote = result[0].quote;
          setAuthor(result[0].author);
          let slicedQuote = Quote.length > 90 ? Quote.slice(0, Quote.indexOf(".") + 1) : Quote;
          setQuote(slicedQuote);
        } else {
          console.error("Error fetching the quote: " + response.status);
        }
      } catch (error) {
        console.error("Error in the request: " + error.message);
      }
    };

    requestQuote(url, options);
  }, [category]);

  return (
    <div className="quote-container">
      <div className="quote" title={`quote by ${author}`}>
        {quote}
      </div>
      <div className="author"> -{author}</div>
    </div>
  );
};

export default QuoteGenerator;
