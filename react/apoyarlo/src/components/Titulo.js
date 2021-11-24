import React, { Component } from "react";

class Titulo extends Component {
  render() {
    const color = this.props.color || "blue";
    const subtitulo = this.props.subtitulo ? (
      <h2>{this.props.subtitulo}</h2>
    ) : null;
    return (
      <>
        <h1 style={{ color }}>{this.props.children}</h1>
        {subtitulo}
      </>
    );
  }
}

export default Titulo;
