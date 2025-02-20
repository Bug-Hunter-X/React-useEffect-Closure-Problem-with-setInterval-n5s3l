```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count; // Update the ref with the latest count
    const intervalId = setInterval(() => {
      console.log(countRef.current); // Use the ref to access the latest value
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]); // Add count to the dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```