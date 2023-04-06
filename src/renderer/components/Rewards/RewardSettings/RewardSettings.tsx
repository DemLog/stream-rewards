import React from 'react';
import { Box, Typography } from '@mui/joy';
import Icon from '@mdi/react';
import { mdiCrystalBall } from '@mdi/js';

const RewardSettings: React.FC = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' height='100%' sx={{
      px: 3
    }}>
      <Box display='flex' flexDirection='column' alignItems='center' textAlign="center">
        <Icon path={mdiCrystalBall} size={5} />
        <Typography level='h5'>
          Выберите награду для ее настройки...
        </Typography>
      </Box>
    </Box>
  );
};

export default RewardSettings;