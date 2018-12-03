import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from './components/Data';


class Ishaani extends Component {
  state = { value: '' };

  render() {
    return (
      <div style = {{ marginTop: 40, marginLeft: 50 }}>
        <Autocomplete
          value={ this.state.value }
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          items={ getStocks() }
          getItemValue={ item => item.name }
          shouldItemRender={ matchStocks }
          onChange={(event, value) => this.setState({ value }) }
          onSelect={ value => this.setState({ value }) }
          renderMenu={ children => (
            <div className = "menu">
              { children }
            </div>
          )}
          renderItem={ (item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={ item.abbr } >
              { item.name }
            </div>
          )}
        />
      </div>
      );
    }
}

export default Ishaani;