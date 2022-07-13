import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedBack.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <Button
        type="button"
        data-feedback={option}
        onClick={onLeaveFeedback}
        key={option}
      >
        {option}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;