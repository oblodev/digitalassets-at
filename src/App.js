import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stats from "./components/Stats/Stats";
import Navbar from "./components/Navbar/Navbar";
import CryptoCurrencies from "./components/CryptoCurrencies/CryptoCurrencies";
import News from "./components/News/News";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Cryptos from "./pages/Cryptos";
import CryptoDetails from "./components/CryptoDetails/CryptoDetails";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();
  return (
    <Router>
      <div className={`app ${mode}`}>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Stats />
                <CryptoCurrencies />
                <News />
              </>
            }
          ></Route>
          <Route path="/kryptowaehrungen" element={<Cryptos />}></Route>
          <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
