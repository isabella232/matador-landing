import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Indicator from '../components/indicator/indicator';

const classString = 'checklistItem z-depth-2 d-flex align-items-center ';

const ChecklistItem = props => (
  <div
    className={props.reference ? `checkedOff ${classString}` : classString}
    onClick={() => {
        props.referenceBack ? props.toggleChecklist({
            ...props.EducationReducer,
            [props.checklistKey]: true,
        })
            : null;
    }}
  >
    <div className="ml-2 mr-2">
      <Indicator active={props.reference} />
    </div>
    <div className="">
      {props.text}
    </div>
  </div>
);

export default ChecklistItem;

