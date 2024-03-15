import { useCount } from 'core/context/CountContext';

const Counter = () => {
  const { state, dispatch } = useCount();
  return (
    <div>
      <strong> Counter</strong>
      <span>{state.count}</span>
      <span>
        <button
          onClick={() => {
            dispatch({ type: 'increment' });
          }}
        >
          increment
        </button>
      </span>
      <span>
        <button
          onClick={() => {
            dispatch({ type: 'decrement' });
          }}
        >
          decrement
        </button>
      </span>
    </div>
  );
};

export default Counter;
