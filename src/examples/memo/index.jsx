import { useCallback, useState, memo, useMemo } from "react";

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    return num * 2;
  }, [num]);
  return result;
}
export const CounterWithMemo = () => {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const increment = useCallback(() => setCounter((prev) => prev + 1), []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      hola
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Aumentar
      </button>
      <button
        onClick={() => setShow(!show)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Apagar
      </button>
      <ChildCounter counter={counter} />
      <p>
        <ExpensiveCalculation num={50} />
      </p>
    </div>
  );
};

const ChildCounter = memo(({ counter }) => {
  console.log("me renderizo papa lindo");
  return <p className="text-xl font-semibold">Contador: {counter}</p>;
});
