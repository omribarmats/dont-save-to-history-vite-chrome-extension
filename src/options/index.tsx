import { createRoot } from "react-dom/client";
import "./options.css";
import Options from "./options";

function init() {
  const appContainer = document.createElement("div");
  document.body.appendChild(appContainer);
  document.body.classList.add("gradient-bg");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(<Options />);
}

init();
