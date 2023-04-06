import React from 'react';
import styled from '@emotion/styled';
import { RewardListItemProps } from './types';
import { Typography } from '@mui/joy';

const RewardListItem: React.FC<RewardListItemProps> = ({ reward }) => {
  return (
    <Wrapper>
      <Button>
        <RewardIcon style={{ background: reward.background_color }}>
          <LayoutImage>
            <Image srcSet={`${reward.image.url_1x} 1x, ${reward.image.url_2x} 2x, ${reward.image.url_4x} 4x`}
                   alt={reward.title} />
          </LayoutImage>
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
              wordBreak: 'break-word !important',
            }}>{reward.cost}</Typography>
          </Cost>
        </RewardIcon>
      </Button>
      <LayoutRewardTitle>
        <Typography>{reward.title}</Typography>
      </LayoutRewardTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  width: 6.3rem;
`;

const Button = styled.button`
  border-radius: 0.4rem;
  display: block;
  width: 100%;
  color: inherit;
  background: none;
  border: none;
  text-align: inherit;
  padding: 0;
`;

const RewardIcon = styled.div`
  height: 6.3rem;
  width: 6.3rem;
  background: #451093;
  -webkit-box-align: center !important;
  align-items: center !important;
  border-radius: 0.4rem !important;
  display: flex !important;
  flex-direction: column !important;
  -webkit-box-pack: center !important;
  justify-content: center !important;
  position: relative !important;
  transition: transform .1s ease-in-out;

  :hover {
    transform: scale(1.05);
    transition: transform .15s ease-in-out;
  }
`;

const LayoutImage = styled.div`
  margin-top: 1.5rem;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  width: 100%;
  display: flex !important;
  -webkit-box-pack: center !important;
  justify-content: center !important;
`;

const Image = styled.img`
  position: relative !important;
  border: none;
  max-width: 40%;
  vertical-align: top;
`;

export const Cost = styled.div`
  background: rgba(0, 0, 0, .35);
  height: 1.5rem;
  bottom: 0px !important;
  -webkit-box-align: center !important;
  align-items: center !important;
  border-radius: 0.2rem !important;
  margin-top: 1rem !important;
  margin-bottom: 0.4rem !important;
  padding-left: 0.3rem !important;
  padding-right: 0.3rem !important;
  position: absolute !important;
  -webkit-box-pack: center !important;
  justify-content: center !important;
  display: flex !important;
  color: white !important;
`;

export const LayoutPointsIcon = styled.div`
  margin-right: 0.2rem !important;
  display: flex !important;
`;

export const WrapperPointsIcon = styled.div`
  height: 1.2rem;
  width: 1.2rem;
  text-align: center; /* центрирование по горизонтали */
  display: flex;
  align-items: center; /* центрирование по вертикали */
`;

export const ChannelPointsIcon = styled.img`
  height: 90%;
  border: none;
  max-width: 100%;
`;

const LayoutRewardTitle = styled.div`
  padding-top: 0.2rem !important;
`;

export default RewardListItem;
