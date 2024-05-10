export default function App() {
  if (process.env.NODE_ENV === 'development') {
    console.log('hello');
  }
  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
}
