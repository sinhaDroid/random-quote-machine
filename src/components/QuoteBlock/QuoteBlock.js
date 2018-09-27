import React from 'react';
import './QuoteBlock.scss';


class QuoteBlock extends React.Component {

    render() {
        return (
            /* jshint ignore:start */
            <div className="quote-block">
                <button type="button" className="quote-btn btn btn-lg btn-primary" onClick={this.props.showQuote}>New Quote</button>
                <button type="button" className="quote-btn btn btn-lg btn-default" onClick={this.props.addQuote}>Add Quote</button>
            </div>
            /* jshint ignore:end */
        );
    }
}

export default QuoteBlock;