import "./App.css";
import Card from "./components/Card";

function App() {
  // console.log(import.meta.env.VITE_CAT_API_KEY);
  return (
    <>
      <div className="container mx-auto px-4">
        <Card />
      </div>
    </>
  );
}

export default App;
