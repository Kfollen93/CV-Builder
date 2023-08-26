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

    if (backgroundMode) {
      document.body.classList.add("darkMode");
      toggleDarkModeClass(document.querySelectorAll(".resume-content"), true);
      toggleDarkModeClass(document.querySelectorAll(".input-container"), true);
    } else {
      document.body.classList.remove("darkMode");
      toggleDarkModeClass(document.querySelectorAll(".resume-content"), false);
      toggleDarkModeClass(document.querySelectorAll(".input-container"), false);
    }
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
