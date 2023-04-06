import React from 'react';

import {
  extendTheme,
  CssVarsProvider,
  List,
  ListItem,
  ListItemButton,
  Switch,
  Typography
} from '@mui/joy';

const themeListItem = extendTheme({
  components: {
    JoyListItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.vars.palette.background.level1,
          margin: '2px 0'
        })
      }
    }
  }
});

const SettingsBlockList: React.FC = () => {
  return (
    <List sx={{ width: '100%', maxWidth: 360 }}>
      <CssVarsProvider theme={themeListItem}>
        <ListItem endAction={
          <Switch defaultChecked />
        }>
          <Typography>Активировать приложение</Typography>
        </ListItem>
        <ListItem>
          <ListItemButton><Typography>Настройки</Typography></ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton><Typography>Выйти</Typography></ListItemButton>
        </ListItem>
      </CssVarsProvider>
    </List>
  );
};

export default SettingsBlockList;