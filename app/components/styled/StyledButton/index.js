/**
 *
 * StyledButton
 *
 */
import styled from 'styled-components';
import { Button } from 'reactstrap';

const StyledButton = styled(Button)`
  color: ${props => props.theme.bg};
`;

export default StyledButton;
