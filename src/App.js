import "./App.scss";
import Todos from "./components/Todos";
import { Provider } from "react-redux";
import store from "./components/redux/redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}
export default App;
