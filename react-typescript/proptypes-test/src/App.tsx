import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Calc from "./Calc";

function App() {
  const [x, setX] = useState<number>(100);
  const [y, setY] = useState<number>(0);
  const [oper, setOper] = useState<string>("&");

  return (
    <div>
      <Calc x={x} y={y} oper={oper} />
    </div>
  );
}

export default App;
