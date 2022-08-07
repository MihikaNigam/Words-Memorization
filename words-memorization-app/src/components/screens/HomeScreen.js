import React from "react";
import { Link } from "react-router-dom";

class HomeScreen extends React.Component {
  render() {
    return (
      <div className="ui three column center aligned vertically divided grid container">
        <div className="doubling three column row">
          <button className="massive ui floated black button">
            <Link to="/screens/new" className="item">
              Add Words
            </Link>
          </button>
          <button className="massive ui floated black button">
            <Link to="/screens/allWords" className="item">
              Word's List
            </Link>
          </button>
          <button className="massive ui floated black button">
            <Link to="/screens/test" className="item">
              Take a Test
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
