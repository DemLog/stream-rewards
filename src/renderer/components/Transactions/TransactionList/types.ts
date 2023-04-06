import { Reward } from '../../Rewards/RewardList/types';

export type TransactionReward = {
  id: number;
  user_id: number;
  user_name: string;
  user_input: string;
  status: string;
  redeemed_at: string;
  reward: Reward;
};