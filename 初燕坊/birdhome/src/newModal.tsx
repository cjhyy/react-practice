import { useState, useEffect } from 'react'

const NewModal = () =>  {
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  // 类似于 componentDidMount 和 ComponentDidUpdate
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default NewModal