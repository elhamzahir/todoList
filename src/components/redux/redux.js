import axios from "axios";
import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";

async function fetchData() {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    store.dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}

function rootReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      console.log(state);
      return [...state, action.payload];
    case TOGGLE_TODO:
      console.log(2);
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );
    case "FETCH_DATA_SUCCESS":
      return action.payload.slice(0, 10);
    default:
      return [];
  }
}

const store = createStore(rootReducer);
fetchData();

export default store;
