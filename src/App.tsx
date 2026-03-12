import "./App.css";
import Book from "./components/Book";
import { Counter } from "./components/Counter/Counter";
import GoldPriceCalculator from "./components/GoldPriceCalculator";
import Greeting from "./components/Greeting/Greeting";
import Hero from "./components/Hero/Hero";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Tool from "./components/Tool/Tool";

const bookProps = {
  avatar:
    "https://upload.wikimedia.org/wikipedia/commons/5/51/1984_first_edition_cover.jpg",
  author: "George Orwell",
  year: 1948,
  title: "1984",
};

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Tool />
      <Greeting name="John" />
      <Greeting name="Bob" />
      <Greeting name="Ioann" age={23} />
      <Hero />
      <Counter />
      <GoldPriceCalculator />
      <Book {...bookProps} />
      <ProfileCard
        name="Hisoka"
        description="Dangerous Person"
        avatar="https://static.wikia.nocookie.net/characterprofile/images/1/1c/Hisoka.png/revision/latest?cb=20220918185653"
      />
    </>
  );
}

export default App;

// Hero - внутри section
// Buy our unique product!

// SPA single page application
