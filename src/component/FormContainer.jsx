import React, { Component } from 'react';

export default class FormContainer extends Component {  
    updateSearch(e){
      let key = e.keyCode || e.charCode;    
      if(key === 8 || key === 46) {
        document.getElementById("js-form-search").value = "";            
      }
  
      this.props.onUpdateSearch(e.target.value);
    }
  
    updateSorting(e){    
      this.props.onSorting(e.target.value);
    }
  
    render() {    
      return (      
        <div className="form">
          <form>          
            <input type="text" placeholder="Search character name" className="form-search" id="js-form-search"
              value={this.props.search} onKeyUp={this.updateSearch.bind(this)}/>          
            
            <label htmlFor="form-select">Sort Name by</label>
            <select className="form-select" onChange={this.updateSorting.bind(this)}>
              <option value="">please select</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </form>
        </div>
      );
    }
  }