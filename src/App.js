import "./App.css";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { ImageGenerator } from "./components/imageGenerator";
import QuoteGenerator from "./components/quoteGenerator";
function App() {
  const image = ImageGenerator();
  return (
    <div className="body" style={{ backgroundImage: `url(${image})` }}>
      <Header />
      <QuoteGenerator />
      <Footer />
    </div>
  );
}

export default App;
