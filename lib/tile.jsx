import React, {propTypes} from 'react';

export default class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ccy: 'GBPUSD'
    }
  }

  updateTile() {
    this.setState({
    //todo
    });
  }

  updateCurrency(event) {
    //todo
  }

  render() {
    return (
      <div className="react-tile">
        <h4>Tile: {this.state.ccy}</h4>
      </div>
    );
  }
}
