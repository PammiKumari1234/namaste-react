const parent = React.createElement("h1",{id:"parent",className:"xyz"},"Hello World from React",
React.createElement("h4",{id:"child1"},[
    React.createElement("div",null,"Child One"),
    React.createElement("div",null,"Child Two"),
]),
React.createElement("h4",{id:"child2",className:"xyz"},[
    React.createElement("div",null,"Child One"),
    React.createElement("div",null,"Child One")
]));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);