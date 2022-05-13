import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { monsterList } = this.props;
    return (
      <div className="card-list">
        {monsterList.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
