import "./App.css";
import { DynamicData } from "./examples/dynamic-data";
import { DynamicDataError } from "./examples/dynamic-data-error";
import { DynamicDataInput } from "./examples/dynamic-data-input";
import { GlobalState } from "./examples/global-state";
import { ModulesExample } from "./examples/modules";
import { StaticData } from "./examples/static-data";
import { StyledComponent } from "./examples/styled-components";
import { TailwindExample } from "./examples/tailwind";
import { ReducerExample } from "./examples/use-reducer";

function App() {
  return (
    <>
      <TailwindExample />
      <StyledComponent color="pink" />
      <StaticData />
      {/* <DynamicDataError /> */}
      <DynamicDataInput />
      <ReducerExample />
      <GlobalState />
    </>
  );
}

export default App;
