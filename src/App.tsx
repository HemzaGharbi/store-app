import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Greeting name="John" />
      <Greeting name="Bob" />
      <Greeting name="Med" age={23}/>
      <Hero />
    </>
  );
}

export default App;

// hero
