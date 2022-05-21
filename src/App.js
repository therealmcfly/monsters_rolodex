import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
