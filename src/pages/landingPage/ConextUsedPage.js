import { useContext } from "react";
import { CounterContext } from "../../components/CounterContext";

const ContextUsedPage = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
    </div>
  );
};

export default ContextUsedPage;
