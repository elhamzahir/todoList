import React, { useEffect, useState } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import store from "./redux/redux";
import { useSelector } from "react-redux";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const add_todo = (todoTitle) => ({
  type: ADD_TODO,
  payload: {
    id: Math.random(),
    title: todoTitle,
    userId: "1",
    completed: false,
  },
});

const toggle_todo = (todoID) => ({
  type: TOGGLE_TODO,
  payload: {
    id: todoID,
  },
});

function Todos() {
  const [data, setData] = useState([]);
  const datas = useSelector((state) => state);
  const myRef = React.createRef();

  useEffect(() => {
    setData(datas);
  }, [datas]);

  return (
    <div>
      <Form
        ref={myRef}
        className="m-4 d-flex align-items-center justify-content-between"
      >
        <Form.Control placeholder="add a todo" className="w-25" />
        <Button
          onClick={() => {
            store.dispatch(add_todo(myRef.current[0].value));
          }}
          variant="secondary"
        >
          Add
        </Button>
      </Form>

      {data?.map((item, index) => (
        <Stack className="p-2 border m-4" gap={3} key={index + ""}>
          <div>{item?.title}</div>
          <Form.Check
            onChange={(e) => {
              store.dispatch(toggle_todo(item.id));
            }}
            checked={item?.completed}
          ></Form.Check>
        </Stack>
      ))}
    </div>
  );
}

export default Todos;
