import { useProxyState } from "hooks/useProxyState";

import { Child } from "./Child";

export const Couter = () => {
  const counter = useProxyState({ count: 0 });

  return (
    <div>
      <p>Count: {counter.count}</p>
      <Child counter={counter} />
    </div>
  );
}; 