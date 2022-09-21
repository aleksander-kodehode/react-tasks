import { useContext } from "react";
import { CounterContext } from "../../components/CounterContext";
import { ContextButton } from "../../styledComponents/Buttons";

const CounterPage = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h1>
        Counter:<span>{counter}</span>
      </h1>
      <ContextButton onClick={() => setCounter((counter) => counter + 10)}>
        +
      </ContextButton>
      <ContextButton
        decrease
        onClick={() => setCounter((counter) => counter - 5)}
      >
        -
      </ContextButton>
    </div>
  );
};

export default CounterPage;
