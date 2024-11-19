import { useState } from "react";
import Header from "./component/Header";
import Result from "./component/Result";
import UserInput from "./component/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {/* Results go here */}
      {!inputIsValid && (
        <p className="center">Please enter a valid duration (1 year or more)</p>
      )}
      {inputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
