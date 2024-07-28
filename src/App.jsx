import "./App.css";
import Layout from "./layout/Layout";
import Landing from "./components/Landing";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <Layout>
        <>
          <Landing />
          <About />
          <Experience />
          <Contact />
        </>
      </Layout>
    </>
  );
}

export default App;
