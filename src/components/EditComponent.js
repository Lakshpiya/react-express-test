// EditComponent.js

import React, { Component } from 'react';
import '../App.css';

import Autocomplete from  'react-autocomplete';
import { getStocks, matchStocks } from './Data'
import DatePicker from 'react-datepicker';
//import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class EditComponent extends Component {
    state = { value: '' };
    constructor(props) {
        super(props)
        //this.state = {
          //  startDate: moment()
        //};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
  render() {
    return (
      <div style = {{ marginTop: 40, marginLeft: 50 }}>
      <p><strong>Auto Complete Select Example</strong></p>
        <Autocomplete
          value={ this.state.value }
          inputProps={{ id: 'states-autocomplete',placeholder:'Type Any Char',autoComplete:false }}
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
        <div style = {{ marginTop: 40, marginLeft: 50 }}>
<p><strong>DatePicker Example</strong></p>
<DatePicker
            inputProps={{ id: 'states-datepicker',placeholder:'Select Date',autoComplete:false }}
            selected={this.state.startDate}
            onChange={this.handleChange}
        />
</div>

      </div>
      );
    }
}