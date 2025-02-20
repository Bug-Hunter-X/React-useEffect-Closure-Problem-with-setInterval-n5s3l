# React useEffect Closure Problem with setInterval

This repository demonstrates a common error in React's `useEffect` hook when using `setInterval`. The problem arises from the closure over the `count` variable within the `setInterval` callback.  This results in the callback always using the initial value of `count`, regardless of updates.

## The Bug
The `bug.js` file contains code that attempts to log the current value of `count` every second.  However, due to the closure, it always logs the initial value (0).

## The Solution
The `bugSolution.js` file demonstrates the correct way to solve this problem using a `useRef` hook. The ref provides a mutable object that's not re-rendered on every state update. Therefore, it always holds the latest value of count.

## How to run
Clone the repository and run `npm install` to install the necessary dependencies.  Then run `npm start`.