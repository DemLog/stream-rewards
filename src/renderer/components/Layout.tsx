import * as React from 'react';
import Box, { BoxProps } from '@mui/joy/Box';
import { Typography } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

type BlockProps = {
  title: string;
  children: React.ReactNode;
  sx?: SxProps;
};

const Header: React.FC<BoxProps> = (props) => {
  return (
    <Box
      component="header"
      className="Header"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      sx={[
        {
          bgcolor: 'background.surface',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gridColumn: '1 / -1',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'sticky',
          top: 0,
          zIndex: 1100,
        },
        // eslint-disable-next-line react/destructuring-assignment
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
};

const Block: React.FC<BlockProps> = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        mx: '4px',
        bgcolor: 'background.level2',
        borderRadius: '5px',
        ...props.sx
      }}
    >
      <Box
        sx={{
          display: 'flex',
          bgcolor: 'background.level1',
          alignItems: 'center',
          py: '4px',
          pl: '16px',
          borderBottom: '1px solid rgba(0,0,0,0.12)',
        }}
      >
        <Typography level="h6">{props.title}</Typography>
      </Box>
      <Box sx={{
        flexGrow: 1,
        // py: '10px',
        px: '6px',
        overflow: 'scroll',
      }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default {
  Header,
  Block
};
