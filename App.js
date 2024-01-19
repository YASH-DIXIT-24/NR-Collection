// const heading= React.createElement("h1",{},'hello world');
const root= ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);



const parent=React.createElement(
      "div",{id:'parent'},
      [React.createElement("div",{id:'child1'},React.createElement("h1",{id:'child1-child'},"yash")),React.createElement("div",{id:'child2'},)]
    );
root.render(parent);