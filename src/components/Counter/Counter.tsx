import { useState } from "react";
import { Button } from "../ui/button/Button";

export const Counter = () => {
  const headingText = "Counter";
  const [count, setCount] = useState<number>(0);
  // принимает intitial state - начальное значение стейта
  // возврщает tuple (кортеж - массив) в котором на первой позиции
  // - переменная состояния (state)
  // на второй позиции - сеттер для этого стейта
  // для создания состояния внутри компонента - при изменении которого -
  // происходит rerender компонента

  function handlePlus() {
    setCount((count) => count + 1);
  }

  function handleMinus() {
    setCount((count) => count - 1);
  }

  function handleClear() {
    setCount(0);
  }

  return (
    <div>
      <h2>{headingText}</h2>

      <div>Count: {count}</div>
      {/* <button type="button" onClick={handleMinus}>
        -
      </button>
      <button type="button" onClick={handlePlus}>
        +
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button> */}
      <button type="button" onClick={handleMinus}>
        -
      </button>
      <Button onClick={handlePlus}>+</Button>
      <Button onClick={handleClear} variant="danger">
        Clear
      </Button>
    </div>
  );
};
