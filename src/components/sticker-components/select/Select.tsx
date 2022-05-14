import React, { Component } from 'react'
import Select from "react-select"
import "./select.css"

const options = [
   { value: 'new products first', label: 'New products first' },
   { value: 'name, A to Z', label: 'Name, A to Z' },
   { value: 'name, Z to A', label: 'Name, Z to A' },
   { value: 'price, low to high', label: 'Price, low to high' },
   { value: 'price, high to low', label: 'Price, high to low' },
 ]

const SelectComponent = () => {
   return(
      <div className="select is-active">
	<div className="select__header">
		<span className="select__current">Sort By</span>
		<div className="select__icon"></div>
	</div>

	<div className="select__body">
		<div className="select__item">New products first</div>
		<div className="select__item">Name, A to Z</div>
		<div className="select__item">Name, Z to A</div>
		<div className="select__item">Price, low to high</div>
		<div className="select__item">Price, high to low</div>
	</div>
</div>
   )
};

export default SelectComponent;