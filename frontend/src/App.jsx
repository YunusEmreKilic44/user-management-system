import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import AddEdit from "./pages/AddEdit/AddEdit";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
