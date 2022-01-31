import Table from "./Table";
import logo from './logo.svg';
import './App.css';
import "./tailwind.output.css";
import { useSelector, useDispatch } from "react-redux";
import { getError } from "./store/selectors/error";
import { clearError } from "./store/actions";

function App() {
  const error = useSelector(getError);
  const dispatch = useDispatch();

  if (error) {
    alert(error);
    dispatch(clearError());
  }
  return (
    <div className="App bg-sky-500">
      <h1 className="text-3xl font-bold">
        Skip Project App (PoP)
      </h1>
      <br />
      <Table />
    </div>
  );
}

export default App;
