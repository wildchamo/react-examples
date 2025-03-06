import { useState } from "react";

export function StatesNFunctions() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  return <button onClick={increment}>Increment {count}</button>;
}
function greet(name: string): string {
  return `Hello ${name}`;
}
