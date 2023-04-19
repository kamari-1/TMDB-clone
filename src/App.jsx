// import Switch from "./baseUI/Switch";
import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header/index";
import MovieList from "./components/Movies/MovieList";
import Container from "./layouts/Container";
import Section from "./layouts/Section";

function App() {
  const [sectionState, setSectionState] = useState({
    first: "Today",
    second: "On TV",
    third: "On TV",
  });

  const setToggledValue = (section, selectedValue) => {
    setSectionState((prev) => ({
      ...prev,
      [section]: selectedValue,
    }));
  };
  // console.log(sectionState);

  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Section
          title={"Trending"}
          items={["Today", "This Week"]}
          onToggle={setToggledValue.bind(null, "first")}
          isToggled={sectionState.first === "Today" ? false : true}
        >
          <MovieList fetch={sectionState.first} />
        </Section>
        <Section
          title={"What's Popular"}
          items={["On TV", "In Theartres"]}
          onToggle={setToggledValue.bind(null, "third")}
          isToggled={sectionState.third === "On TV" ? false : true}
        >
          <MovieList fetch={sectionState.third} />
        </Section>
      </Container>
    </>
  );
}

export default App;
