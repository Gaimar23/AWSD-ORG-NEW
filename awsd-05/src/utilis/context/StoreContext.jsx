import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showTableProfil, setShowTableProfil] = useState(false);
  const [language, setLanguage] = useState("fr");
  const [currentUser, setCurrentUser] = useState([]);
  const url = "http://localhost:5000";

  // Getting the user name
  const loadUser = async (token) => {
    const response = await axios.post(
      `${url}/api/user/get`,
      {},
      { headers: { token } }
    );
    setCurrentUser(response.data.info);
  };

  // stay log in after reloading the page
  useEffect(() => {
    async function loadData() {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadUser(localStorage.getItem("token"));
      }
    }

    loadData();
  }, []);

  // useEffect(() => {
  //   console.log({ token: token, url: url });
  // }, []);

  const contextValue = {
    token,
    setToken,
    language,
    setLanguage,
    url,
    showLogin,
    setShowLogin,
    showTableProfil,
    setShowTableProfil,
    currentUser,
    setCurrentUser,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
