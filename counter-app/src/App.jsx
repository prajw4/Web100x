import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount} />
    </div>
  );
}

function CustomButton({ count, setCount }) {
  function onClickHandler() {
    setCount(count + 1);
  }

  return <button onClick={onClickHandler}>Counter {count}</button>;
}

export default App;
