import ReactDOM from "react-dom";
//import Image
import logo from "./images/logo.svg";
//Components
import Display from "./components/Display";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    console.log({ bill, people, tip });
    if (bill > 0 && people > 0 && tip > 0) {
      setCalculatedTip(bill * (tip / 100));
      setTotal(calculatedTip + bill);
    }
  }, [bill, people, tip, calculatedTip]);

  const handleResetBtn = (e) => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  };

  const handleRadioChange = (e) => {
    // Uncheck the radio button if it's already selected
    if (selectedValue === e.target.value) {
      setSelectedValue("");
    } else {
      setSelectedValue(e.target.value);
    }
  };

  return (
    <div className="wrapper">
      <img src={logo} alt="Splitter Logo" />
      <div className="container">
        <Form
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
        />
        <Display
          total={total}
          people={people}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
          handleRadioChange = {handleRadioChange}
        />
      </div>
    </div>
  );
}

export default App;
