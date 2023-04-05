import React from 'react';
import ReactDOM from 'react-dom/client';

import { Box, MantineProvider } from '@mantine/core';

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        components: {
          Button: {
            styles: {
              root: {
                background: 'rgba( 255, 255, 255, 0.15 );',
                backdropFilter: 'blur( 4px );',
                borderRadius: '10px;',
                color: 'black',
                border: '1px solid rgba( 255, 255, 255, 0.18 );',
                wordBreak: 'break-word',
                height: '100%',
                minHeight: '2.625rem',
                padding: '.75rem 1.375rem'
              },
              label: {
                whiteSpace: 'normal'
              }
            }
          }
        }
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
