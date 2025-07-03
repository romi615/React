import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Gallery from "./App";
// import TodoList from "./App";
// import Profile from "./App";
// import List from "./App";
import TeaSet from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Gallery /> */}
    {/* <TodoList /> */}
    {/* <Profile /> */}
    {/* <List /> */}
    <TeaSet/>
  </StrictMode>
);
