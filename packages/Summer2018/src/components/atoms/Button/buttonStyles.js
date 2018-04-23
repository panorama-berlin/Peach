import { css } from "styled-components";

const buttonStyles = css`
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border-width: inherit;
  background-color: ${props => props.theme.palette.primary[0]};
  color: white;
  font-size: 1em;

  &:focus {
    outline: inherit;
  }
`;

export default buttonStyles;
