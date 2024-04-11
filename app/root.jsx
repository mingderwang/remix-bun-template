import * as React from 'react'

export async function loader() {
  console.log(process.env.SESSION_SECRET);
  return {}
}

export default function App() {
  const [count, setCount] = React.useState(0)
  return (
    <html>
      <head>
        <title>My First Remix App</title>
      </head>
      <body>
        <p>This is a remix app. Hooray!</p>
        <button onClick={() => setCount(c => c + 1)}>{count}</button>
      </body>
    </html>
  )
}
