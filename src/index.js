import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import QuoteMachine from './App';


ReactDOM.render(
    /* jshint ignore:start */
    <QuoteMachine />, document.getElementById('root')
    /* jshint ignore:end */
);
registerServiceWorker();