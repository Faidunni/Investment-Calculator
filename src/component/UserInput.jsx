function UserInput({ onChange, userInput }) {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Duration">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </form>
  );
}

export default UserInput;

// this is also the same as the above code
// import { useState } from "react";

// function UserInput() {
//   const [initialInvestment, setInitialInvestment] = useState(10000);
//   const [annualInvestment, setAnnualInvestment] = useState(1200);
//   const [expectedReturn, setExpectedReturn] = useState(6);
//   const [duration, setDuration] = useState(10);

//   return (
//     <form id="user-input">
//       <div className="input-group">
//         <p>
//           <label htmlFor="initial-investment">Initial Investment</label>
//           <input
//             type="number"
//             required
//             value={initialInvestment}
//             onChange={(e) => setInitialInvestment(Number(e.target.value))}
//           />
//         </p>
//         <p>
//           <label htmlFor="annual-investment">Annual Investment</label>
//           <input
//             type="number"
//             required
//             value={annualInvestment}
//             onChange={(e) => setAnnualInvestment(Number(e.target.value))}
//           />
//         </p>
//       </div>
//       <div className="input-group">
//         <p>
//           <label htmlFor="expected-return">Expected Return</label>
//           <input
//             type="number"
//             required
//             value={expectedReturn}
//             onChange={(e) => setExpectedReturn(Number(e.target.value))}
//           />
//         </p>
//         <p>
//           <label htmlFor="duration">Duration</label>
//           <input
//             type="number"
//             required
//             value={duration}
//             onChange={(e) => setDuration(Number(e.target.value))}
//           />
//         </p>
//       </div>
//     </form>
//   );
// }

// export default UserInput;
