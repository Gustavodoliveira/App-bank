'use client';

import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import StyledComponentsRegistry from './lib/registry';

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
