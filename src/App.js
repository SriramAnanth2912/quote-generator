import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ImageGenerator from "./components/imageGenerator";
import QuoteGenerator from "./components/quoteGenerator";
function App() {
  return (
    <div className="body">
      <Header />
      <QuoteGenerator />
      <ImageGenerator />
      <Footer />
    </div>
  );
}

export default App;
