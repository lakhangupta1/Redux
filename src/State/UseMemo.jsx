import React, { useMemo } from 'react'

function UseMemo() {
    const memoizedValue = useMemo(() => computeValue(), [dependencies]);

  return (
    <div>UseMemo</div>
  )
}

export default UseMemo;


// useMemo is a React Hook used to memoize a value
// → It prevents expensive recalculations on every render.

// ######### 🔹 When to Use useMemo?  ###############
// ✔ Heavy calculations
// ✔ Filtering / sorting large arrays
// ✔ Derived state
// ✔ Performance optimization

/*
function App() {
  const [count, setCount] = React.useState(0);

  const expensiveCalculation = () => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
      total += i;
    }
    return total;
  };

  const result = expensiveCalculation(); // it will call on every render or every changes count.

  return (
    <>
      <h2>{result}</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
    </>
  );
}
*/


/* 
import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
      total += i;
    }
    return total;
  }, []); // runs only once

  return (
    <>
      <h2>{result}</h2>
      <button onClick={() => setCount(count + 1)}>
        Re-render ({count})
      </button>
    </>
  );
}
*/


/*
import { useMemo, useState } from "react";

function Users({ users }) {
  const [search, setSearch] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
*/