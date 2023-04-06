import React from 'react';
import { Box, ListItem, ListItemContent, Typography } from '@mui/joy';
import { format } from 'date-fns';
import { TransactionListItemProps } from './types';
import {
  ChannelPointsIcon,
  LayoutPointsIcon,
  WrapperPointsIcon
} from '../../../Rewards/RewardList/RewardListItem/RewardListItem';
import styled from '@emotion/styled';

const TransactionListItem: React.FC<TransactionListItemProps> = (props) => {
  return (
    <ListItem sx={{
      alignItems: 'flex-start'
    }}>
      <LayoutImage style={{ background: props.transaction.reward.background_color }}>
        <Image src={props.transaction.reward.image.url_2x} />
      </LayoutImage>
      <ListItemContent sx={{ ml: 1 }}>
        <Box sx={{ display: 'flex' }}>
          <Typography>{props.transaction.reward.title}</Typography>
          <Cost>
            <LayoutPointsIcon>
              <WrapperPointsIcon>
                <ChannelPointsIcon
                  srcSet='https://static-cdn.jtvnw.net/channel-points-icons/99899949/ec59b511-de1e-4288-9c4b-5a301aa03158/icon-1.png 1x,https://static-cdn.jtvnw.net/channel-points-icons/99899949/ec59b511-de1e-4288-9c4b-5a301aa03158/icon-2.png 2x,https://static-cdn.jtvnw.net/channel-points-icons/99899949/ec59b511-de1e-4288-9c4b-5a301aa03158/icon-4.png 4x'
                  alt='Баллы' />
              </WrapperPointsIcon>
            </LayoutPointsIcon>
            <Typography level='body2' textColor='common.white' sx={{
              overflow: 'hidden !important',
              textOverflow: 'ellipsis !important',
              whiteSpace: 'normal !important',
              wordBreak: 'break-word !important'
            }}>{props.transaction.reward.cost}</Typography>
          </Cost>
        </Box>
        <Typography
          level='body2'>Куплена пользователем <Typography level="body1">{props.transaction.user_name}</Typography> • {format(new Date(props.transaction.redeemed_at), 'MM/dd/yyyy hh:mm a')}</Typography>
      </ListItemContent>
    </ListItem>
  );
};

const LayoutImage = styled.div`
  width: 40px;
  height: 40px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20%;
`;

const Image = styled.img`
  border: none;
  max-width: 80%;
`;

const Cost = styled.div`
  background: rgba(0, 0, 0, .35);
  height: 1.5rem;
  bottom: 0px !important;
  -webkit-box-align: center !important;
  align-items: center !important;
  border-radius: 0.2rem !important;
  padding-left: 0.3rem !important;
  padding-right: 0.3rem !important;
  -webkit-box-pack: center !important;
  justify-content: center !important;
  display: flex !important;
  color: white !important;
  margin: 0 8px;
`;

export default TransactionListItem;