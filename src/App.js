import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ImageGenerator from "./components/imageGenerator";
import QuoteGenerator from "./components/quoteGenerator";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ImageGenerator />
        <QuoteGenerator />
      </div>
      <Footer />
    </>
  );
}

export default App;
