import "./App.css";
import { ModulesExample } from "./examples/modules";
import { StyledComponent } from "./examples/styled-components";
import { TailwindExample } from "./examples/tailwind";

function App() {
  return (
    <>
      <TailwindExample />
      <StyledComponent color="pink" />
    </>
  );
}

export default App;
