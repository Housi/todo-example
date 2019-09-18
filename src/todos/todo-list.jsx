import React from "react";
// import styled from "styled-components";
import { TodoItem } from "./todo-item";

export function TodoList(props) {
  const { items, toggleDone, remove } = props;
  return (
    <ul>
      {items.map(todo => (
        <TodoItem
          key={todo.id}
          toggleDone={toggleDone}
          remove={remove}
          {...todo}
        />
      ))}
    </ul>
  );
}
