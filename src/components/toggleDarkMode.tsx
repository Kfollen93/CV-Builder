import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

function ToggleDarkMode() {
  const [backgroundMode, setBackgroundMode] = useState<boolean>(false);

  useEffect(() => {
    const toggleDarkModeClass = (
      elements: NodeListOf<HTMLElement>,
      add: boolean
    ) => {
      elements.forEach((element) => {
        element.classList.toggle("darkMode", add);
      });
    };

    const applyDarkMode = (add: boolean) => {
      document.body.classList.toggle("darkMode", add);
      toggleDarkModeClass(document.querySelectorAll(".resume-content"), add);
      toggleDarkModeClass(document.querySelectorAll(".input-container"), add);
    };

    applyDarkMode(backgroundMode);
  }, [backgroundMode]);

  const handleClick = () => {
    setBackgroundMode(!backgroundMode);
  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label={<b>Toggle Theme</b>}
        onChange={handleClick}
        checked={backgroundMode}
      />
    </Form>
  );
}

export default ToggleDarkMode;
