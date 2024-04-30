import React from "react";
import EventList from "./EventList";

function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "50vw 50vw" }}>
      <EventList />
    </div>
  );
}

export default App;
