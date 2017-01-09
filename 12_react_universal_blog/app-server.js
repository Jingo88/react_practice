import React from 'react';
import { match, RoutingContext,Route, IndexRoute } from 'react-router';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import hogan from 'hogan-express';
import request from 'request';

import routes from './routes';

const app = express();

app.engine('html', hogan);
app.set('views', __dirname + '/views');
app.use('/', express.static(__dirname+'/public/')); 
app.set('port', (process.env.PORT || 3000));

app.get("/topgun", (req, res) => {
	console.log("aoisdjfoai;sdjf;ioasdjfoasidjfo;iasdjf;oiasjdf;oiasjdf;oiasdji;")

	request("http://www.omdbapi.com/?t=top+gun&y=&plot=short&r=json", function(error, response, body){
		console.log("====================================================")
		if (!error && response.statusCode === 200){
			res.send(body)
		}
	})
})

// match
// routingContext
// res.status.render chaining
// redirectLocation
// locals.reactMarkup
// renderProps

app.get("*", (req,res) => {
	match({routes, location: req.url}, (error, redirectLocation, renderProps)=>{
		const reactMarkup = ReactDOMServer.renderToStaticMarkup(<RoutingContext {...renderProps}/>)

		res.locals.reactMarkup = reactMarkup

		if (error){
			res.status(500).send(error.message)
		} else if (redirectLocation){
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps){
			res.status(200).render('index.html')
		} else {
			res.status(404).render('index.html')
		}
	})
})

app.listen(app.get('port'))

console.info('==> Server is listening on port ' + process.env.NODE_ENV + " mode" )
console.info('==> Go to http://localhost:%s', app.get('port'))
