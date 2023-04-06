import React from 'react';
import { rewardsList } from './tempDataRewards';
import { Reward } from './types';

import { Grid } from '@mui/joy';
import RewardListItem from './RewardListItem/RewardListItem';

const RewardList: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ flexWrap: 'wrap' }}>
      {rewardsList.map((reward: Reward) => (
        // @ts-ignore
        <Grid item key={reward.id}>
          <RewardListItem reward={reward} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RewardList;