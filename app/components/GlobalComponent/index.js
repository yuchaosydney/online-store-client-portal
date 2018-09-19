import { Children } from 'react';
import { withTheme, injectGlobal } from 'styled-components';

const GlobalComponent = ({ theme, children }) => {
  injectGlobal`
      background: ${theme.bg};
      padding: 50px;
    }
  `;
  return Children.only(children);
};

export default withTheme(GlobalComponent);