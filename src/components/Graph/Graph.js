import React from "react";
import { dia, shapes } from "jointjs";

class Graph extends React.Component {
  componentDidMount() {
    const graph = new dia.Graph();

    const paper = new dia.Paper({
      el: document.getElementById("canvas"),
      model: graph,
      width: 1920,
      height: 400,
      gridSize: 1,
    });

    const rect = new shapes.standard.Rectangle();
    rect.position(600, 30);
    rect.resize(100, 40);
    rect.attr({
      body: {
        fill: "#ee6d2e",
      },
      label: {
        text: "Hello",
        fill: "white",
      },
    });
    rect.addTo(graph);

    const rect2 = rect.clone();
    rect2.translate(300, 0);
    rect2.attr("label/text", "World!");
    rect2.addTo(graph);

    const link = new shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);
  }
  render() {
    return <div id="canvas" />;
  }
}

export default Graph;
