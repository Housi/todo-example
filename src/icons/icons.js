import React from "react";
import styled from "styled-components";
import defs from "./defs";

const Icon = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

function IconSymbol({ name, def }) {
  return (
    <Icon
      viewBox={`0 0 46 46`}
      preserveAspectRatio="xMidYMid slice"
      height="64px"
      width="64px"
    >
      <title>{name}</title>
      <path d={def} />
    </Icon>
  );
}

export const IconTrash = () => <IconSymbol name="trash" def={defs["trash"]} />;
export const IconEdit = () => <IconSymbol name="edit" def={defs["edit"]} />;
export const IconPlus = IconSymbol("plus", defs["plus"]);
export const IconSearch = IconSymbol("search", defs["search"]);
