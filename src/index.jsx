import ReactDOM from "react-dom/client";
import { App } from "./App";

// Target the root div
const rootDiv = document.getElementById("root");
// Transform the root div into a react node
const reactRoot = ReactDOM.createRoot(rootDiv);

// Inject our App component into the react node
reactRoot.render(<App />);
