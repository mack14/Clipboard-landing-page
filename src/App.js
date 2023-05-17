import Header from "./components/Header";
import Track from "./components/Track";
import Search from "./components/Search";
import Clipboard from "./components/Clipboard";
import Workflow from "./components/Workflow";
import Icons from "./components/Icons";
import IosMac from "./components/IosMac";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Track />
      <Search />
      <Clipboard />
      <Workflow />
      <Icons />
      <IosMac />
      <Footer />
    </div>
  );
}

export default App;
