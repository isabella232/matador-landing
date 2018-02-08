import React from 'react';
import PropTypes from 'prop-types';
import './receiptQuadrant.css';
import RaisedButton from 'material-ui/RaisedButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const ReceiptQuadrant = props => (
  <div>
    <h1 className="d-flex justify-content-center">{props.title}</h1>
    <div className="row quadrant-container d-flex flex-column justify-content-around row z-depth-1">
      <div className=" column mt-2 mr-2 d-flex flex-column align-items-end">
        <Table>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>{Object.keys(props.row1)}:</TableRowColumn>
              <TableRowColumn>{Object.values(props.row1)}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{Object.keys(props.row2)}:</TableRowColumn>
              <TableRowColumn>{Object.values(props.row2)}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{Object.keys(props.row3)}:</TableRowColumn>
              <TableRowColumn>{Object.values(props.row3)}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>{Object.keys(props.row4)}:</TableRowColumn>
              <TableRowColumn>{Object.values(props.row4)}</TableRowColumn>
            </TableRow>
            <TableRow displayBorder={((Object.values(props.row5))[0] !== 'empty')}>
              <TableRowColumn>{((Object.keys(props.row5))[0] === 'empty') ? '' : `${Object.keys(props.row5)}:`}</TableRowColumn>
              <TableRowColumn>{((Object.values(props.row5))[0] === 'empty') ? '' : `${Object.values(props.row5)}`}</TableRowColumn>
            </TableRow>
            <TableRow displayBorder={((Object.values(props.row6))[0] !== 'empty')}>
              <TableRowColumn>{((Object.keys(props.row6))[0] === 'empty') ? '' : `${Object.keys(props.row6)}:`}</TableRowColumn>
              <TableRowColumn>{((Object.values(props.row6))[0] === 'empty') ? '' : `${Object.values(props.row6)}`}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
);

ReceiptQuadrant.propTypes = {
};

export default ReceiptQuadrant;
