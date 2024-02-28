/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const category = "inspirational";
  const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "F4UznSTbkEj02WvVYlOEyTN8HeUlStiOkTroEgK8",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    const requestQuote = async (url, options) => {
      try {
        const response = await fetch(url, options);
        if (response.status === 200) {
          const result = await response.json();
          setQuote(result[0].quote);
          setAuthor(result[0].author);
        } else if (response.status === 429) {
          const delay = Math.pow(2, 4) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
          await requestQuote(url, options); // Retry with both url and options
        } else {
          console.error("Error fetching the quote: " + response.status);
        }
      } catch (error) {
        console.error("Error in the request: " + error.message);
      }
    };
    requestQuote(url, options);
  }, []);

  return (
    <div className="quote-container">
      <div className="quote">{quote}</div>
      <div className="author"> {author}</div>
    </div>
  );
};

export default QuoteGenerator;
