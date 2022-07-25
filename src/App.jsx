import Counter from "./components/Counter";

function App() {
  return (
    <div className="contenedor">
      <h1>Counter</h1>
      <div className="contadores">
        <Counter maxValue={10} minValue={2} />
        <Counter />
      </div>
    </div>
  );
}

export default App;
