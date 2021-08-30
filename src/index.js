import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Entire from './components/Entire';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* ReactRouterの設定 */}
      {/* exactはpathのurlと完全一致した時、という意味 */}
      <Route path="/top" component={Entire} />
      <Route exact path="/" component={App} />


    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


