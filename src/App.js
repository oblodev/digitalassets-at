import "./App.scss";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CryptoCurrencies from "./components/CryptoCurrencies/CryptoCurrencies";
import News from "./components/News/News";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <CryptoCurrencies />
      <News />
    </div>
  );
}

export default App;
