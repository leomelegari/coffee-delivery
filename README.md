# React + Tailwind + TypeScript - Coffee Delivery

```js
interface AppProps {
  status: string;
}

export function App ({status = 'Building... 🚧👷‍♂️'}: AppProps) {
  return (
    <div>
      <span>{status}</span>
    </div>
  )
}
```