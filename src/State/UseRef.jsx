import React, { useRef } from 'react'

function UseRef() {
  const ref = useRef(initialValue);

  return (
    <div>UseRef</div>
  )
}

export default UseRef;

// "useRef stores mutable values or DOM references without triggering re-renders."

// I use useRef for focusing inputs, storing timers,
// tracking previous values, and improving performance by avoiding unnecessary re-renders.

// useRef is a React Hook that lets you:
// Store a mutable value
// Access DOM elements directly
// Keep values between renders
// Update values without causing re-render