import React from "react";
import { Message } from "./Message";
import { Summary } from "./Summary";

let names = ["Bob", "Alice", "Dora"]


export default function App() {
  return (
    // <div>
    //   <h1 className="bg-primary text-white text-center p-2">
    //     Hello Adam
    //   </h1>
    //   <Message greeting="Hello" name="Bob" />
    //   <Message greeting="Hola" name={"Alice" + "Smith"} />
    //   <Message greeting="Hi there" name="Dora" />
    //   {/* <Summary names={["Bob", "Alice", "Dora"]} /> */}

    // </div>
    <table className="table table-sm table-striped">
      <thead>
        <tr><th>#</th><th>Name</th><th>Letters</th></tr>
      </thead>
      <tbody>
        {names.map((name, index) =>
          <tr key={name}>
            <Summary index={index} name={name} />
          </tr>
        )}
      </tbody>
    </table>
  )
}
