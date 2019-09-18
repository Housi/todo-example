import React, { useState } from "react";
import styled from "styled-components";

/* ####### styled ####### */

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: transparent;
  border: none;
  border-radius: 3px;
  width: 100%;
  outline: none;
`;

const Form = styled.form`
  display: flex;
  margin: 1em;
  border-radius: 10px;
  background: linear-gradient(90deg, #b8def3 0%, #9fc2fa 100%);
`;

const Button = styled.button`
  padding: 0.5em;
  background-color: transparent;
  border: none;
`;

/* ------------------- */

function TodoInput(props) {
  const { submitFn } = props;
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    submitFn(value);
    setValue("");
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="add new task..."
        value={value}
        onChange={handleChange}
      />
      <Button type="submit">ADD+</Button>
    </Form>
  );
}

export { TodoInput };
