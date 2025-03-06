import { useCounter } from "./hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <>
      <p className="text-lg font-semibold mb-4">contador {count}</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        onClick={increment}
      >
        incrementar
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
        onClick={decrement}
      >
        decrementar
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded-md"
        onClick={reset}
      >
        reset
      </button>
    </>
  );
};
