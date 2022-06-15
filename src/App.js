import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import CryptoCurrencies from "./components/CryptoCurrencies/CryptoCurrencies";
import News from "./components/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Cryptos from "./pages/Cryptos";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Home />
                <CryptoCurrencies />
                <News />
              </>
            }
          ></Route>
          <Route path="/kryptowaehrungen" element={<Cryptos />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
