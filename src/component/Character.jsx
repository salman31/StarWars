import React, { Component } from 'react';

export default class Character extends Component {
    render() {
      return (
        <div className="character-info">
          <strong>{this.props.name}</strong>
          
          <hr/>
          <table className="character-info-table">
            <tbody>
              <tr>
                <td>Gender</td>            
                <td>{this.props.gender}</td>
              </tr>
              <tr>
                <td>Birth Year</td>            
                <td>{this.props.birth_year}</td>
              </tr>
              <tr>
                <td>Eye Color</td>            
                <td>{this.props.eye_color}</td>
              </tr>
              <tr>
                <td>Hair Color</td>            
                <td>{this.props.hair_color}</td>
              </tr>
              <tr>
                <td>Skin Color</td>            
                <td>{this.props.skin_color}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }