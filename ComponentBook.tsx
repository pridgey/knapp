import { Button } from "./index";
import { render } from "solid-js/web";
import { css, darkTheme, lightTheme } from "./Theme";
import { globalCss } from "@stitches/core";

const globalStyles = globalCss({
  html: {
    margin: 0,
    padding: 0,
    width: "100vw",
    height: "100vh",
  },
  body: {
    margin: 0,
    padding: 0,
    width: "100%",
    height: "100%",
  },
  "*": {
    boxSizing: "border-box",
  },
});

const pageStyles = css({
  height: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  boxSizing: "border-box",
});

const themeContainerStyles = css({
  width: "100%",
  height: "100%",
  padding: "15px",
  backgroundColor: "$background",
});

globalStyles();
const ComponentBook = () => {
  return (
    <main class={pageStyles()} aria-label="component book container">
      <div
        aria-label="light theme container"
        classList={{
          [lightTheme]: true,
          [themeContainerStyles()]: true,
        }}
      >
        <Button aria-label="hello" />
      </div>
      <div
        aria-label="dark theme container"
        classList={{
          [darkTheme]: true,
          [themeContainerStyles()]: true,
        }}
      >
        <Button />
      </div>
    </main>
  );
};

render(ComponentBook, document.getElementById("root") as HTMLElement);
