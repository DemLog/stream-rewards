import React from 'react';
import { Avatar, Box, Button, Typography } from '@mui/joy';

import Icon from '@mdi/react';
import { mdiChevronDown, mdiPlus } from '@mdi/js';

const Header: React.FC = () => {
  return (
    <Box
    sx={{
      bgcolor: 'background.level1',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      p: '6px'
    }}
    >
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          startDecorator={<Icon path={mdiPlus} size={1} />}
          variant="outlined"
          color="info"
          sx={{ borderRadius: 0 }}
        >
          Добавить
        </Button>
      </Box>
      <Button
        color="neutral"
        variant="plain"
        sx={{ borderRadius: 0, p: '2px' }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 1.2,
          alignItems: 'center',
        }}>
          <Avatar
            variant="solid"
            color="neutral"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/3595ea0d-d10d-4791-9773-60a03b2ecf0f-profile_image-70x70.png"
            size="sm"
          >
            pol
          </Avatar>
          <Typography fontWeight="lg" level="body1">polsssha</Typography>
          <Icon path={mdiChevronDown} size={1} />
        </Box>
      </Button>
    </Box>
  );
};

export default Header;