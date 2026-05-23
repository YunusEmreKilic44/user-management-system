import Header from "./components/Header";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Home />
      </div>
    </div>
  );
};

export default App;
