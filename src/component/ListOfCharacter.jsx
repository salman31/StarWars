import React, { Component } from 'react';

import loading from '../img/loading.gif';
import splash from '../img/splash.gif';
import Character from './Character';

export default class ListOfCharacter extends Component {
    loadMore(){
      this.props.onGetNextPeople();
    }
  
    compareAlphabetByAscending(a, b){
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      return (x < y) ? -1 : (x > y) ? 1 : 0;
    }
  
    render() {  
      let listOfCharacters = [];    
      let characters = this.props.characters; 
      if (characters !== '') {           
        //sorting
        if (this.props.sorting === "asc") {
          characters.sort(this.compareAlphabetByAscending);
        } else if (this.props.sorting === "desc"){
          characters.sort(this.compareAlphabetByAscending);
          characters.reverse();
        }
      
        // show data
        let keyCounter = 0;
        characters.map((character) => {      
          return listOfCharacters.push(
            <Character key={keyCounter++} 
              name={character.name} gender={character.gender} birth_year={character.birth_year} url={character.url}
              eye_color={character.eye_color} hair_color={character.hair_color} skin_color={character.skin_color}/>
          )
        });     
        
        // load more button
        var btnLoadMore = null;
        if (!this.props.loading && this.props.loadMore === 'show' && this.props.next < 10) {
          btnLoadMore = <input type="button" value="Load More" className="character-load-more" onClick={this.loadMore.bind(this)}/>;
        } else if (this.props.loadMoreGif === 'show') {
          btnLoadMore = <img alt="Load More" src={splash} className="character-load-more-gif"/>;
        }
      }    
      
      return (
        <div className="character">
          {(!this.props.loading) ? listOfCharacters : <img alt="loading" src={loading} className="character-info-loading"/>}
          {btnLoadMore}
        </div>
      );
    }
  }