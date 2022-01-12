import { Couter } from "components/Counter";
import { StrictMode } from "react";
import { render } from "react-dom";


render(
  <StrictMode>
    <Couter />
  </StrictMode>,
  document.getElementById('root')
);