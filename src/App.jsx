import {
  Routes,
  Route
} from "react-router-dom";
import "./scss/index.css";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Countrie } from "./pages/Countrie";
import { NotFound } from "./components/NotFound";


const App = ()=> {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="countrie/:id" element={<Countrie/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
