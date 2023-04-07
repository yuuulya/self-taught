import React, { useState } from "react";

type Props = {};

const App2 = (props: Props) => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: number = parseInt(e.target.value);
    if (isNaN(newValue)) newValue = 0;
    if (e.target.id === "x") setX(newValue);
    else setY(newValue);
  };

  return (
    <div>
      <h3>제어 컴포넌트 </h3>
      x : <input type="text" id="x" value={x} onChange={changeHandler} />
      <br />
      y : <input type="text" id="y" value={y} onChange={changeHandler} />
      <br />
      결과 : <span>{x + y}</span>
    </div>
  );
};

export default App2;
