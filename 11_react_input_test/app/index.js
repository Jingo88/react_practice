import React from 'react';
import {render} from 'react-dom'
import Autosuggest from 'react-autosuggest';

const legislators = [
  {
    bioguideID: "A000374",
    first_name: "Ralph",
    last_name: "Abraham",
    state: "LA"
  },
  {
    bioguideID: "A000370",
    first_name: "Alma",
    last_name: "Bradly",
    state: "NY"
  },
  {
    bioguideID: "A000370",
    first_name: "Allison",
    last_name: "Boinkin",
    state: "NY"
  },
  {
    bioguideID: "A000370",
    first_name: "Chris",
    last_name: "Brading",
    state: "NY"
  },
  {
    bioguideID: "A000370",
    first_name: "Flora",
    last_name: "Brooms",
    state: "NY"
  },
  {
    bioguideID: "B000355",
    first_name: "Robert",
    last_name: "Charming",
    state: "FL"
  },
  {
    bioguideID: "A006271",
    first_name: "Walter",
    last_name: "White",
    state: "NC"
  },
  {
    bioguideID: "C062811",
    first_name: "Jesse",
    last_name: "Pinkman",
    state: "NM"
  },
  {
    bioguideID: "F426271",
    first_name: "Skylar",
    last_name: "Grey",
    state: "NM"
  },
]

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value =>{
  const inputValue = escapeRegexCharacters(value.trim().toLowerCase());
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : legislators.filter(legislatorName => legislatorName.last_name.toLowerCase().slice(0,inputLength) === inputValue
  )
}


// const names = [
//   'Brian',
//   'Caley',
//   'Casey',
//   'Caroline',
//   'Chris',
//   'David',
//   'Misha'
// ];

// const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// const getSuggestions = value => {
//   const escapedValue = escapeRegexCharacters(value.trim());

//   if (escapedValue === '') {
//     return [];
//   }

//   const regex = new RegExp('^' + escapedValue, 'i');

//   return names.filter(name => regex.test(name));
// }

const getSuggestionValue = suggestion => (
  suggestion.last_name + ", " + suggestion.first_name + ", " + suggestion.state 
)

const renderSuggestion = suggestion => (
  <div id={suggestion.bioguideID}>
    {suggestion.last_name}, {suggestion.first_name}, {suggestion.state}
  </div>
)

const renderInputComponent = inputProps => (
  <div className="inputContainer">
    <img className="icon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png" />
    <input {...inputProps} />
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
    this.onChange                    = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  onChange(event, { newValue, method }){
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested({ value }){
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Enter Legislator Last Name",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        renderInputComponent={renderInputComponent}
      />
    );
  }
}

render(<App />, document.getElementById('app'));