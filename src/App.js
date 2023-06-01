import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ClientView from "./components/ClientView";
import AdminView from "./components/AdminView";
import ButtonAppBar from "./components/AppBar";
import Home from "./components/Home";

import contractContext from "./context/contractContext";
import { useContext, useState, useEffect } from "react";
const App = () => {
  const { Contract, Account, tokenContract } = useContext(contractContext);
  const [adminAddress, setAdminAddress] = useState();
  var admin;
  const [isLoading, setIsLoading] = useState(false);

  const GetINC = async () => {
    setIsLoading(true);
    const arr023 = await Contract.getAdmin();
    admin = arr023;
    setAdminAddress(admin.toLowerCase());

    console.log("Admin of website is", admin);
    setIsLoading(false);
  };

  useEffect(() => {
    if (typeof Account != "undefined" && typeof Contract != "undefined") {
      console.log("current admin", Account);
      GetINC();
      console.log(admin);
    } else {
    }
  }, [Account, Contract]);

  return (
    <>
      {isLoading ||
      typeof Contract === "undefined" ||
      typeof Account === "undefined" ||
      typeof adminAddress === "undefined" ? (
        <></>
      ) : (
        <>
          <Router>
            <Routes>
              {/* <Route element={<ButtonAppBar />} /> */}
              <Route
                exact
                path="/"
                element={
                  <>
                    <ButtonAppBar
                      AdminAddress={adminAddress}
                      currentAccount={Account}
                    />
                    <Home />
                  </>
                }
              />
              <Route
                path="/admin"
                element={
                  <>
                    <ButtonAppBar
                      AdminAddress={adminAddress}
                      currentAccount={Account}
                    />
                    <AdminView />
                  </>
                }
              />
              <Route
                path="/client"
                element={
                  <>
                    <ButtonAppBar
                      AdminAddress={adminAddress}
                      currentAccount={Account}
                    />
                    <ClientView />
                  </>
                }
              />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
};
export default App;
