import "./App.scss";
import Tiptap from "./Components/Tiptap/Tiptap";
import Sidenav from "./Components/Sidenav/Sidenav";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <div style={{ width: "100%" }}>
        <Tiptap />
      </div>
    </div>
  );
}

export default App;
