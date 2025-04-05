import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quizpage from "./pages/quizpages/Quizpage.jsx";
import SonucPage from "./pages/quizpages/SonucPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/quiz" element={<Quizpage />} />
      <Route path="/sonuc" element={<SonucPage />} />
    </Routes>
  </BrowserRouter>
);
