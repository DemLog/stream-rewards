import { Box, Typography } from '@mui/joy';
import React from 'react';

import Icon from '@mdi/react';
import { mdiTimerPauseOutline } from '@mdi/js';

const TransactionsActivity: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', height: '100%' }}>
      <Icon path={mdiTimerPauseOutline} size={2} />
      <Typography level="h5">Нет активных наград</Typography>
    </Box>
  );
};

export default TransactionsActivity;