import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import { Button } from 'semantic-ui-react'

const StyledButtonGroup = styled(Button.Group)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .ui.buttons,.button:last-child {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  .ui.buttons,.button:first-child {
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
  }
`;

export default StyledButtonGroup
