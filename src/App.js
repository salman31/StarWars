import React, { Component } from 'react';
import axios from 'axios'; 
import './App.css';

import FormContainer from './component/FormContainer';
import ListOfCharacter from './component/ListOfCharacter';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      loadMore: 'show',
      loadMoreGif: 'hide',
      characters: '',      
      sorting: '',
      next: 2     
    };     
  }

  updateSearch(text){      
    this.setState({loading: true, loadMore: 'hide', next: 2});  
    if (text === '') {
      this.setState({loadMore: 'show'});   
    }  
    return axios.get("https://swapi.co/api/people/", {
      params: {
        search: text
      }
    }).then((response) => {      
      this.setState({loading:false, characters: response.data.results})
    });
  }

  updateSorting(val){
    this.setState({
      sorting: val
    })
  }
  
  getNextPeople(){        
    this.setState({loadMore: 'hide', loadMoreGif: 'show', next: this.state.next + 1});    
    return axios.get("https://swapi.co/api/people/", {    
      params: {
        page: this.state.next
      }
    }).then((response) => {                  
        Array.prototype.push.apply(this.state.characters, response.data.results);
        this.setState({loadMore: 'show', loadMoreGif:'hide', characters: this.state.characters});          
    });
  }

  getPeople(){    
    return axios.get("https://swapi.co/api/people/").then((response) => {      
      this.setState({loading:false, characters: response.data.results})
    });
  }

  componentDidMount(){
    this.getPeople();
  }

  render() {               
    return (
      <div className="container">
        <div className="container-left">        
          <FormContainer             
            onUpdateSearch={this.updateSearch.bind(this)}
            sorting={this.state.sorting} onSorting={this.updateSorting.bind(this)}/> 
          <small>SALMAN © 2018</small>         
        </div>
        <div className="container-right">        
          <ListOfCharacter
            sorting={this.state.sorting} loading={this.state.loading} loadMore={this.state.loadMore} loadMoreGif={this.state.loadMoreGif}
            characters={this.state.characters} next={this.state.next} onGetNextPeople={this.getNextPeople.bind(this)}/>
        </div>        
      </div>
    );
  }
}