import { useState } from "react";
import { Button } from "./Button/Button";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div aria-label="count">{count}</div>
      <div>
        <Button onPress={() => setCount(count + 1)}>Increment +</Button>
      </div>
    </div>
  );
}
