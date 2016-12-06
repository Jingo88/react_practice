// import React from 'react';
// import {render} from 'react-dom';
// import Autosuggest from 'react-autosuggest';

// const legislators = [
//   {
//   	first_name: "Elizabeth",
//   	last_name: "Warren"
//   },
//   {
//   	first_name: "Dean",
//   	last_name: "Heller"
//   },
//   {
//    	first_name: "John",
//   	last_name: "Carney"
//   },
// ];

// const getSuggestions = value => {
//   const inputValue = value.trim().toLowerCase();
//   const inputLength = inputValue.length;

//   return inputLength === 0 ? [] : languages.filter(lang =>
//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
//   );
// };

// function InputComponent(props){
// 	return(
// 		<section>
// 			<form>
// 				<input type='text' placeholder='Enter Some Shit'/>
// 			</form>
// 		</section>
// 	)
// }

// var InputContainer = React.createClass({
// 	render(){
// 		return (
// 			<InputComponent/>
// 		)
// 	}
// })

// render(
// 	<InputContainer/>,
// 	document.getElementById('app')
// )








import React from 'react';
import {render} from 'react-dom';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
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
  }

  onChange(event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested() => {
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

render(
	<App />, 
	document.getElementById('app')
);
