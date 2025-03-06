import { useReducer } from "react";

type stateType = {
  count: number;
};

type actionType = {
  type: "increment" | "decrement";
};

type reducerType = (state: stateType, action: actionType) => stateType;

const reducer: reducerType = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Contador va en {state.count}</p>

      <button onClick={() => dispatch({ type: "increment" })}>Agregar</button>
      <button onClick={() => dispatch({ type: "decrement" })}>reducir</button>
    </>
  );
};
