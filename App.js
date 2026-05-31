

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "HEllo react , Im master in REACT",
);

const parent = React.createElement("div" , {id:"parent"} , [
    React.createElement("div" , {id:"child"} , [
        React.createElement("h1" , {id: "heading1"} , "this is from child 1 heading")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h2" , {id:"heading2"} , "this is chil  d 2 heading")
    ])
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([parent]);
