import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" component={Home} exact /> */}
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
