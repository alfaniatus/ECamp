import { Routes, Route} from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <NavbarComponent/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/" Component={EventPage}/>
        <Route path="/login" Component={LoginPage}/>
      </Routes>
      <FooterComponent/>
    </>
  )
}

export default App
