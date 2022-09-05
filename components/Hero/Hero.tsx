import React, { useEffect, useState } from 'react';
import Web3Buttons from './Web3Buttons';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  const currentTime = new Date().getTime();
  const mintStart = Date.parse('2022-09-08T12:00:00-0500');
  const mintEnd = Date.parse('2022-09-11T12:00:00-0500');

  const [isMintLive, setIsMintLive] = useState(false);
  const [countdownDate, setCountdownDate] = useState(mintStart);

  useEffect(() => {
    if (currentTime >= mintStart && currentTime <= mintEnd) {
      setIsMintLive(true);
      setCountdownDate(mintEnd);
    }
  }, [currentTime]);

  return (
    <St.HeroContainer>
      <St.Title>PRE-GENESIS COLLECTION</St.Title>
      <St.SubTitle>[ THE DEITY ]</St.SubTitle>

      <Web3Buttons />

      <St.SubtleDiv>
        <St.SubtleText>FREE MINT. LIMIT ONE PER WALLET.</St.SubtleText>

        <St.CountdownStyled date={mintStart} />

        <St.SubtleText>
          {isMintLive ? 'REMAINING' : 'UNTIL LAUNCH'}
        </St.SubtleText>
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default Hero;
