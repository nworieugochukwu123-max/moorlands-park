import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Visit from "./pages/Visit.jsx";
import Hire from "./pages/Hire.jsx";
import Friends from "./pages/Friends.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="visit" element={<Visit />} />
        <Route path="hire" element={<Hire />} />
        <Route path="friends" element={<Friends />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
