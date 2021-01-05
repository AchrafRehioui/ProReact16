import React from "react";
import { Message } from "./Message";
import { Summary } from "./Summary";

export default function App() {
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">
        Hello Adam
      </h1>
      <Message />
      <Message />
      <Message />
      <Summary />
    </div>

  )
}
