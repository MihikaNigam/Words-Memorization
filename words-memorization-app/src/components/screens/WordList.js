import React from "react";
import { connect } from "react-redux";
import { fetchWords } from "../../redux/actions";

class WordList extends React.Component {
  componentDidMount() {
    this.props.fetchWords();
  }
  renderList() {
    return <div></div>;
  }

  render() {
    console.log(this.props.words);
    return (
      <div>
        <h3>fetch Words</h3>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    words: Object.values(state.words),
  };
};

export default connect(mapStateToprops, { fetchWords })(WordList);
