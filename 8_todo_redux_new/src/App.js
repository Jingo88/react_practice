import React from 'react';
import {render} from 'react-dom';
import routes from './config/router';

const seedToDo = [
  { id: 0, isDone: true,  text: 'make components' },
  { id: 1, isDone: false, text: 'design actions' },
  { id: 2, isDone: false, text: 'implement reducer' },
  { id: 3, isDone: false, text: 'connect components' }
]

render(
	routes, 
	document.getElementById('app')
);