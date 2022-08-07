import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted menu">
        <Link to="/" className="item">
          Home
        </Link>

        <div className="right menu">
          <Link to="/screens/allWords" className="item">
            All Words
          </Link>
        </div>
      </div>
    </div>

    // <div className="ui secondary pointing menu">
    //     <Link to="/" className="item">
    //         Home
    //     </Link>
    //     <div className="right menu">
    //         <Link to="/screens/allWords" className="item">
    //             All Words
    //         </Link>
    //     </div>
    // </div>
  );
};

export default Header;
