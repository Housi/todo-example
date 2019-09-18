import styled, { keyframes } from "styled-components";

const emojiIn = keyframes`
  10% {
    content: "😆";
  }
  10% {
    content: "😆";
  }
  20% {
    content: "😄";
  }
  30% {
    content: "😁";
  }
  50% {
    content: "🙂";
  }
  60% {
    content: "🙂";
  }
  70% {
    content: "😉";
  }
  80% {
    content: "😉";
  }
  90% {
    content: "🙂";
  }
  100% {
    content: "🙂";
  }`;

const emojiOut = keyframes`
  from {
    content: "😕";
  }
  to {
    content: "☹️";
  }`;

const SmileyLabel = styled.label`
  display: flex;
  flex: 1;
  position: relative;
  padding: 0.2em 2em;
  transition: color 0.15s ease-out;
  cursor: pointer;

  &:active {
    transform: translateY(0.03125em);
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 1.5em;
    height: 1.5em;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 0.1875em;
  }
  &:after {
    content: "🙂";
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.25em;
    opacity: 0;
    transform: translateY(0.1875em);
    animation: ${emojiOut} 0.5s forwards;
    transition: opacity 0.15s 0.3s ease-out;
    transition: opacity 0.15s 0.3s ease-out, transform 0.2s 0.3s ease-out;
  }
`;

const SmileyCheckbox = styled.input`
  display: none;

  &:checked + label {
    color: lightslategray;
    text-decoration: line-through;
  }
  &:checked + label:before {
    border-color: darkkhaki;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0.1875em 0.375em -0.1875em;
  }
  &:checked + label:after {
    opacity: 1;
    transform: translateY(0);
    animation: ${emojiIn} 1s forwards;
    transition-delay: 0s;
  }
  &:checked + label:active:after {
    transform: translateY(0.03125em);
  }
`;

export { SmileyCheckbox, SmileyLabel };
