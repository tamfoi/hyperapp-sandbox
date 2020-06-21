import { h, app } from "hyperapp";

app({
  init: 0,
  view: (state) => {
    const h1Style = {
      color: "gray",
      borderWidth: "1px",
      borderColor: "gray",
      borderStyle: "solid",
    };

    return (
      <main>
        <h1 style={h1Style}>{state}</h1>
        <button onClick={(state) => state - 1}>-</button>
        <button onClick={(state) => state + 1}>+</button>
      </main>
    );
  },
  node: document.getElementById("app"),
});
