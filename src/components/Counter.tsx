import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div aria-label="count">{count}</div>
      <div>
        <button
          type="button"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment +
        </button>
      </div>
    </div>
  );
}
