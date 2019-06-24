import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap'
// eslint-disable-next-line
import styles from './index.styles.css'

const CustomDropdown = ({ title, variant, items, selected, handleClick }) =>
  <DropdownButton
    title={title}
    variant="none"
    className="border"
    id={`dropdown-variants-${variant}`}
    key={variant}
  >
    {items.map(item =>
      <Dropdown.Item key={item.name} onClick={() => handleClick(item.name)} active={item.name === selected}>{item.name}</Dropdown.Item>
    )}
  </DropdownButton>

CustomDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  selected: PropTypes.string,
  handleClick: PropTypes.func
};

export default CustomDropdown;
