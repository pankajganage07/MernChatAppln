import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ChatProvider from "./context/ChatProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Router>
      <ChatProvider>
        <App />
      </ChatProvider>
    </Router>
  </ChakraProvider>
);

// console.log("Index.js: Render complete.");

// <Router>
//   <ChatProvider>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </ChatProvider>
// </Router>;
