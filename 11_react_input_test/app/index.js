import React from 'react';
import ReactDOM from 'react-dom'
import Autosuggest from 'react-autosuggest';

const names = [
  'Brian',
  'Caley',
  'Casey',
  'Caroline',
  'Chris',
  'David',
  'Misha'
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return names.filter(name => regex.test(name));
}

const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => suggestion;

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
      placeholder: "Type 'c'",
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

ReactDOM.render(<App />, document.getElementById('app'));
