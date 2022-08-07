import React from "react";
import { connect } from 'react-redux';
import { createWord } from '../../redux/actions';



class WordCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createWord(formValues);
    };
    //<WordForm onSubmit={this.onSubmit} />
    render() {
        return (
            <div>
                <h3>Create a Word</h3>
            </div>
        );
    }
}

export default connect(
    null,
    { createWord }
)(WordCreate);