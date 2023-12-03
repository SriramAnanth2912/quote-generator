import { useEffect, useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const url = "https://healthruwords.p.rapidapi.com/v1/topics/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0766a89068msh3ce083685bbc901p10f64fjsn5fc69ba0001a",
      "X-RapidAPI-Host": "healthruwords.p.rapidapi.com",
    },
  };
  const requestQuote = async () => {
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        setQuote(result);
      } else console.error("Error fetching the quote: " + response.status);
    } catch (error) {
      console.error("Error in the request: " + error.message);
    }
  };
  useEffect(() => {
    requestQuote();
  }, []);

  return (
    <div className="quote-container">
      <div className="greetings" style={{ display: "none" }}></div>
      <div className="quote">{quote}</div>
    </div>
  );
};

export default QuoteGenerator;
