import "./App.css";
import FormInput from "./components/FormInput";
import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  console.log(username);
  return (
    <div className="App">
      <form action="">
        <FormInput placeholder="Username" setUsername={setUsername} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Password" />
      </form>
    </div>
  );
}

export default App;
