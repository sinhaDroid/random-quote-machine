import React from "react";
import "./QuoteForm.scss";

class QuoteForm extends React.Component {

    render() {
        return (
            /* jshint ignore:start */
            <form className="quote-form" onSubmit={this.props.onQuoteSubmit}>
                <input
                    className="quote-form-text"
                    placeholder="Enter quote here..."
                    type="text"
                    onChange={this.props.onChangeQuote}
                />
                <button className="quote-form-submit" type="submit" />
            </form>
            /* jshint ignore:end */
        );
    }
}

export default QuoteForm;