import React, { Fragment } from "react";
import { TodoList } from "./todo-list";
import { TodoInput } from "./todo-input";
import useTodoService from "./useTodoService";
import styled from "styled-components";

/* ####### styled ####### */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  min-height: 100vh;
  max-width: 640px;
  margin: 0 auto;
`;

const Main = styled.main`
  flex: 1;
`;

/* ------------------- */

const Todos = function() {
  const { items, add, toggleDone, remove } = useTodoService();
  return (
    <Wrapper>
      <Main>
        <TodoList items={items} toggleDone={toggleDone} remove={remove} />
      </Main>
      <footer>
        <TodoInput submitFn={add} />
      </footer>
    </Wrapper>
  );
};

export { Todos };
