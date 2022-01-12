export const Child = ({ counter = { count: 0 } }) => {
  return (
    <p>
      <button onClick={() => counter.count--}>-</button>
      <button onClick={() => counter.count = 0}>C</button>
      <button onClick={() => counter.count++}>+</button>
    </p>
  );
}