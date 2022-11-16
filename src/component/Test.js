import React, { useEffect, useState } from "react";

const TestPage = () => {
  const valk = 1980;
  const [val, setVal] = useState(1980);

  useEffect(() => {
    console.log("didmount");
    return () => {
      console.log("will");
    };
  }, [val]);

  const useCounter = (values = 0, delta = 1) => {
    const [count, setCount] = useState(values);
    const increment = () => {
      setCount((prevState) => prevState + delta);
    };
    const decrement = () => {
      setCount((prevState) => prevState - delta);
    };
    return [count, increment, decrement];
  };
  const [count, increment, decrement] = useCounter(valk, 8000);
  return (
    <>
      <button onClick={increment}> +++</button>
      <div>{count}</div>
      <button onClick={decrement}> ---</button>

      <div onClick={() => setVal((prev) => prev + 1)}>{val}</div>
    </>
  );
};
export default TestPage;
