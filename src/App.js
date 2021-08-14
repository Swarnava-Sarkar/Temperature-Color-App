import React, { useState } from "react";

const App = () => {
  const [value, setvalue] = useState(20);
  const [tempCol, settempCol] = useState(" ");

  const incTemp = () => {
    const newValue = value + 1;

    if (newValue === 20) {
      settempCol(" ");
    }

    if (newValue >= 21 && newValue <= 24) {
      settempCol("hot");
    }
    if (newValue >= 25 && newValue <= 29) {
      settempCol("hot0");
    }
    if (newValue >= 30 && newValue <= 34) {
      settempCol("hot1");
    }
    if (newValue >= 35 && newValue <= 39) {
      settempCol("hot2");
    }
    if (newValue >= 40 && newValue <= 44) {
      settempCol("hot3");
    }
    if (newValue >= 45) {
      settempCol("hot4");
    }
    if (newValue >= 19 && newValue <= 20) {
      settempCol("cool");
    }
    if (newValue >= 15 && newValue <= 18) {
      settempCol("cool0");
    }
    if (newValue >= 11 && newValue <= 14) {
      settempCol("cool1");
    }
    if (newValue >= 7 && newValue <= 10) {
      settempCol("cool2");
    }
    if (newValue >= 4 && newValue <= 7) {
      settempCol("cool3");
    }
    if (newValue < 4) {
      settempCol("cool4");
    }

    if (newValue < 50) {
      setvalue(newValue);
    } else {
      setvalue(50);
    }
  };

  const decTemp = () => {
    const newValue = value - 1;

    if (newValue === 20) {
      settempCol(" ");
    }
    if (newValue >= 21 && newValue <= 24) {
      settempCol("hot");
    }
    if (newValue >= 25 && newValue <= 29) {
      settempCol("hot0");
    }
    if (newValue >= 30 && newValue <= 34) {
      settempCol("hot1");
    }
    if (newValue >= 35 && newValue <= 39) {
      settempCol("hot2");
    }
    if (newValue >= 40 && newValue <= 44) {
      settempCol("hot3");
    }
    if (newValue >= 45) {
      settempCol("hot4");
    }
    if (newValue >= 19 && newValue <= 20) {
      settempCol("cool");
    }
    if (newValue >= 15 && newValue <= 18) {
      settempCol("cool0");
    }
    if (newValue >= 11 && newValue <= 14) {
      settempCol("cool1");
    }
    if (newValue >= 7 && newValue <= 10) {
      settempCol("cool2");
    }
    if (newValue >= 4 && newValue <= 7) {
      settempCol("cool3");
    }
    if (newValue < 4) {
      settempCol("cool4");
    }

    if (newValue > 0) {
      setvalue(newValue);
    } else {
      setvalue(0);
    }
  };

  return (
    <>
      <div className="cont">
        <div className={`color ${tempCol}`}>{value}&deg;C</div>
        <div className="btn-grp">
          <button className="btn" onClick={() => incTemp()}>
            <h2>+</h2>
          </button>
          <button className="btn" onClick={() => decTemp()}>
            <h2>-</h2>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
