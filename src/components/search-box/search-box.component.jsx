import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { className, onChangeHandler, placeholder } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
