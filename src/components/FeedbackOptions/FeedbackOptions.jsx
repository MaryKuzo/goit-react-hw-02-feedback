import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      {options.map((option) => (
        <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </ButtonWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
