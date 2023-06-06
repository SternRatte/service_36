import React from "react";
import Header from "./components/Header";
import Stage1 from "./components/Stage1";
import Stage2 from "./components/Stage2";
import Stage3 from "./components/Stage3";
import Stage5 from "./components/Stage5";

function App() {

  return (
        <div>
          <Header/>
            <Stage1 />
            <Stage2/>
            <Stage3/>
            <Stage5/>
        </div>
  );
}

export default App;
