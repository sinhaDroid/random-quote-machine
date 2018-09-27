import React from 'react';
import './QuoteSayer.scss';

class QuoteSayer extends React.Component {

    render() {
        return (
            /* jshint ignore:start */
            <div className="quote-sayer"> <h2> {this.props.quote} </h2></div>
            /* jshint ignore:end */
        );
    }
}

export default QuoteSayer;