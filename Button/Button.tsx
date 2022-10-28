import { css } from "./../Theme";

const buttonStyles = css({
  backgroundColor: "$blue",
  color: "$background",
  fontWeight: "bold",
  border: "0px",
  borderRadius: "$xs",
  padding: "$xl $md",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$blue",
  },
  "&:active": {
    backgroundColor: "$red",
  },
});

export const Button = () => {
  return <button class={buttonStyles()}>Hello World</button>;
};
