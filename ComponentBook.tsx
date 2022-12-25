import { Button, Input } from "./index";
import { render } from "solid-js/web";
import "./Theme/theme.css";

const ComponentBook = () => {
  return (
    <main class=".book_page" aria-label="component book container">
      <div aria-label="light theme container" class="theme_container">
        <Button Type="button">I'm a button</Button>
        <Input Label="Text Input" Name="test" Type="text" />
      </div>
      <div aria-label="dark theme container" class="theme_container">
        <Button Type="button">I'm a button</Button>
        <Input Label="Text Input" Name="test" Type="text" />
      </div>
    </main>
  );
};

render(ComponentBook, document.getElementById("root") as HTMLElement);
