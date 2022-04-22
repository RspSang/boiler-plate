import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./views/Footer/Footer";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import NavBar from "./views/NavBar/NavBar";
import RegisterPage from "./views/RegisterPage/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
