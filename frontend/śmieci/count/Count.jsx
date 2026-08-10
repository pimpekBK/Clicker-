import { useState } from 'react'
import Score from "../test_folder/Score";

export default function Count() {
  const [count, setCount] = useState(1)
  

  return (
    <>
        <h4>test {typeof count}</h4>
        <Score count={count}></Score>
        <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
            >
            Count is {count}
            </button>
    </>
  );
}
