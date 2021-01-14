import React, { Component } from 'react';

class Pokemon extends Component {
  render() {
    return (
      <div className="card">
        <div className="info">
          <h3>Nome: {this.props.name}</h3>
          <h4>Tipo: {this.props.type}</h4>
          <h4>
            Peso: {this.props.value} {this.props.unit}
          </h4>
        </div>
        <div className="circle">
          <img
            className="avatar"
            src={this.props.image}
            alt={this.props.name}
          />
        </div>
      </div>
    );
  }
}
export default Pokemon;
