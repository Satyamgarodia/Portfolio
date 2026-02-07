import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GoogleGeminiEffectDemo } from "./Home";
import Portfolio from "./Portfolio1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <GoogleGeminiEffectDemo /> */}
      <Portfolio />
    </>
  );
}

export default App;
