import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <>
      <Routes>
        <Route path="/:theme?" element={<Home />} />
      </Routes>
      <SpeedInsights />
    </>
  );
}

export default App;
