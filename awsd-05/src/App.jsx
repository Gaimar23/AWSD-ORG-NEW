import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Projects from "./pages/projects/Projects";
import Recrutement from "./pages/recrutement/Recrutement";
import { StoreContext } from "./utilis/context/StoreContext";
import { useContext } from "react";
import LoginPopup from "./components/loginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import News from "./pages/news/News";

function App() {
  const { showLogin, setShowLogin, token, setToken, url } =
    useContext(StoreContext);

  return (
    <>
      <ToastContainer />
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="organigramme" element={<Team />} />
          <Route path="projects">
            <Route index element={<Projects />} />
          </Route>
          <Route path="recrutement" element={<Recrutement />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
