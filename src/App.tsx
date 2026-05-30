import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Strategies from "./pages/Strategies";
import Home from "./pages/Home";
import StrategyDetails from "./pages/StrategyDetails";
import LearnOptions from "./pages/LearnOptions";
import LessonDetails from "./pages/LessonDetails";
import CompareStrategies from "./pages/CompareStrategies";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white bg-grid">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/strategies"
            element={<Strategies />}
          />

          <Route
            path="/strategy/:id"
            element={<StrategyDetails />}
          />

          <Route
            path="/learn-options"
            element={<LearnOptions />}
          />

          <Route
            path="/learn-options/:lessonId"
            element={<LessonDetails />}
          />

          <Route
            path="/compare"
            element={<CompareStrategies />}
          />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;