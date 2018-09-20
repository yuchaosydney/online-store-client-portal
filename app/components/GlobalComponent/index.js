import { Children } from 'react';
import { withTheme, injectGlobal } from 'styled-components';

const GlobalComponent = ({ theme, children }) => {
  injectGlobal`
    html,
    body {
      height: 100%;
      width: 100%;
    }

    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background: ${theme.bg};
    }

    body.fontLoaded {
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    #app {
      background-color: ${theme.bg};
      min-height: 100%;
      min-width: 100%;
    }

    p,
    label {
      font-family: Georgia, Times, 'Times New Roman', serif;
      line-height: 1.5em;
    }
  `;
  return Children.only(children);
};

export default withTheme(GlobalComponent);
