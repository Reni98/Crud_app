import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import AddEdit from "./pages/AddEdit";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/addContact" Component={AddEdit} />
        <Route path="/update/:id" Component={AddEdit} />
        <Route path="/view/:id" Component={View} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
