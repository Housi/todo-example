import React from "react";
import styled from "styled-components";

import { IconTrash } from "../icons/icons";
import { SmileyCheckbox, SmileyLabel } from "../icons/smiley";

/* ####### styled ####### */

const StyledLi = styled.li`
  margin: 0.5em;
  border-radius: 6px;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
  ${props =>
    props.isDone
      ? "background: rgba(5,117,108,0.4)"
      : "background: linear-gradient(90deg, #ffafbd 0%, #ffc3a0 100%); box-shadow: 3px 3px 8px 3px rgba(0,0,0,0.31);"}
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToolButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1em;
  margin-bottom: -4px; /*fix weird icon centering*/
`;

/* ------------------- */

export function TodoItem(props) {
  const { id, isDone, name, toggleDone, remove } = props;

  const onCheck = () => {
    toggleDone(id);
  };
  const onTrashClick = () => {
    remove(id);
  };
  const ToolBox = () => (
    <StyledDiv>
      <ToolButton onClick={onTrashClick}>
        <IconTrash />
      </ToolButton>
    </StyledDiv>
  );

  return (
    <StyledLi key={id} isDone={isDone}>
      <SmileyCheckbox
        id={`input-${id}`}
        type="checkbox"
        checked={isDone}
        onChange={onCheck}
      />
      <SmileyLabel for={`input-${id}`}> {name} </SmileyLabel>
      <ToolBox />
    </StyledLi>
  );
}
