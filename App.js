const heading = React.createElement(
  "div",
  { id: "parent", className: "heading" },
  [
    React.createElement("div", { id: "child1", className: "subheading" }, [
      React.createElement(
        "h1",
        { id: "headingchild", className: "mainheading" },
        "Heading 1"
      ),
      React.createElement(
        "h2",
        { id: "headingchild", className: "subheading" },
        "Heading 2"
      ),
    ]),
    React.createElement("div", { id: "child2", className: "subheading" }, [
      React.createElement(
        "h1",
        { id: "headingchild", className: "mainheading" },
        "Heading 1"
      ),
      React.createElement(
        "h2",
        { id: "headingchild", className: "subheading" },
        "Heading 2"
      ),
    ]),
  ]
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
