import { css } from "./../Theme";

const inputContainer = css({
  display: "flex",
  flexDirection: "column",
  fontSize: "$md",
  color: "$foreground",
});

const inputStyles = css({
  backgroundColor: "$background",
  color: "$foreground",
  fontWeight: "normal",
  padding: "$xl $md",
  borderWidth: "$md",
  borderColor: "$foreground",
  borderRadius: "$md",
  fontSize: "$md",
});

type InputProps = {
  Label: string;
};

export const Input = (props: InputProps) => {
  return (
    <label class={inputContainer()}>
      {props.Label}
      <input class={inputStyles()} />
    </label>
  );
};
