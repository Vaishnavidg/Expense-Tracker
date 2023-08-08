import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
      </div>
    </GlobalProvider>
  );
}

export default App;
