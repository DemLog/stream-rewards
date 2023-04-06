import React, { useEffect, useState } from 'react';
import Box from '@mui/joy/Box';
import { CssVarsProvider, extendTheme, IconButton, Typography } from '@mui/joy';

import Icon from '@mdi/react';
import { mdiWindowMinimize, mdiWindowClose, mdiWindowMaximize, mdiWindowRestore } from '@mdi/js';

import Layout from '../Layout';

import './css/index.css';
import logoHeader from '../../../../assets/img/twitch-logo.png';

type WindowHeaderProps = {
  titleWindow?: string;
};

const themeButton = extendTheme({
  components: {
    JoyIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '0px',
          backgroundColor: theme.vars.palette.background.surface,
          color: theme.vars.palette.text.primary,
          padding: '10px',
          ':hover': {
            backgroundColor: theme.vars.palette.background.level2
          },
          ':active': {
            backgroundColor: theme.vars.palette.background.level3
          }
        })
      }
    }
  }
});

const WindowHeader: React.FC<WindowHeaderProps> = ({ titleWindow = '' }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    const { electron } = window;

    electron.window.isMaximized().then((maximized: boolean) => {
      setIsMaximized(maximized);
    });

    electron.ipcRenderer.on('maximize', () => {
      setIsMaximized(true);
    });
    electron.ipcRenderer.on('unmaximize', () => {
      setIsMaximized(false);
    });

    return () => {
      electron.ipcRenderer.removeAllListener('maximize');
      electron.ipcRenderer.removeAllListener('unmaximize');
    }
  }, []);

  const handleCloseWindow = () => {
    window.electron.window.close();
  };

  const handleMinimizeWindow = () => {
    window.electron.window.minimize();
  };

  const handleMaximizeWindow = () => {
    isMaximized ? window.electron.window.unmaximize() : window.electron.window.maximize();
  };

  return (
    <Layout.Header>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 1.5
        }}
      >
        <img src={logoHeader} id="logo_header" />
      </Box>
      <Box
        className='dragWindowArea'
        sx={{
          flexGrow: 1,
          textAlign: 'center'
        }}
      >
        <Typography level='h5'>{titleWindow}</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CssVarsProvider theme={themeButton}>
          <IconButton
            size='sm'
            onClick={handleMinimizeWindow}
          >
            <Icon path={mdiWindowMinimize} size={0.8} />
          </IconButton>
          <IconButton
            size='sm'
            onClick={handleMaximizeWindow}
          >
            <Icon path={isMaximized ? mdiWindowRestore : mdiWindowMaximize} size={0.8} />
          </IconButton>
          <IconButton
            size='sm'
            className='closeButtonWindow'
            onClick={handleCloseWindow}
          >
            <Icon path={mdiWindowClose} size={0.8} />
          </IconButton>
        </CssVarsProvider>
      </Box>
    </Layout.Header>
  );
};

export default WindowHeader;
