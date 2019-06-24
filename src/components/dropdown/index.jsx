import React from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, Dropdown } from 'react-bootstrap';
// eslint-disable-next-line
import styles from './index.styles.css';

const CustomDropdown = ({ title, options, selected, handleClick }) =>
  <DropdownButton
    title={title}
    variant="none"
    className="border"
    id={`dropdown-variants-${title}`}
    key={title}
  >
    {options.map(option =>
      <Dropdown.Item className="roboto-regular" key={option.name} onClick={() => handleClick(option.name)} active={option.name === selected}>{option.name}</Dropdown.Item>
    )}
  </DropdownButton>

CustomDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array,
  selected: PropTypes.string,
  handleClick: PropTypes.func
};

export default CustomDropdown;
