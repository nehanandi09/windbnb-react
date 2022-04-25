import "./App.css";
import Navbar from "./components/Navbar";
import CardLayoutHeading from "./components/CardLayoutHeading";
import CardLayout from "./components/CardLayout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardLayoutHeading />
      <CardLayout />
    </div>
  );
}

export default App;

// Components
// 1. Navbar
// 2. Main layout
// 3. Heading
// 4. Card
// 4.1. Card image
// 4.2. Card content
