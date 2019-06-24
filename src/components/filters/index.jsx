import React from 'react';
import PropTypes from 'prop-types'
import { Col, Button } from 'react-bootstrap'
import Dropdown from '../dropdown/index.jsx';
// eslint-disable-next-line
import styles from './index.styles.css';

const Filters = ({ colors, manufacturers, selectedColor, selectedManufacturer, handleFilterChange, handleFilterClick }) => {
    const mappedColors = colors.map(color => ({
        name: color
    }));
    const colorTitle = selectedColor ? selectedColor : "All the colors";
    const manufacturerTitle = selectedManufacturer ? selectedManufacturer : "All the Manufacturers";

    return <Col sm={4} className="border filter">
        <div>Colors</div>
        <Dropdown title={colorTitle} options={mappedColors} selected={selectedColor} handleClick={color => handleFilterChange({ type: "color", color})} />
        <div>Manufacturers</div>
        <Dropdown title={manufacturerTitle} options={manufacturers} selected={selectedManufacturer} handleClick={manufacturer => handleFilterChange({ type: "manufacturer", manufacturer})} />
        <Button className="filter-button pull-right" onClick={handleFilterClick}>Filter</Button>
    </Col>
};

Filters.propTypes = {
    colors: PropTypes.array,
    manufacturers: PropTypes.array,
    selectedColor: PropTypes.string,
    selectedManufacturer: PropTypes.string,
    handleFilterChange: PropTypes.func,
    handleFilterClick: PropTypes.func
};

export default Filters;
