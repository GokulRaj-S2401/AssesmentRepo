import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
        <div className='card' >
            <div className='img' style={{backgroundImage:`url(${this.props.url})`}}  ></div>
            <p>{this.props.label}</p>
        </div>
    )
  }
}
