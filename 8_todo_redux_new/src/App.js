import React from 'react';
import {render} from 'react-dom';
import routes from './config/router';

render(
	routes, 
	document.getElementById('app')
);