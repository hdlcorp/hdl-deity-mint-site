import React, { useEffect, useState } from 'react';
import { useMintDate } from 'hooks/useIsMintLive';
import Web3Buttons from '../Web3/Web3Buttons';
import * as St from './Hero.styled';

const Hero: React.FC = () => {
  const { isMintLive, mintStart, mintEnd } = useMintDate();
  const nftsRemaining = 1000;

  return (
    <St.HeroContainer>
      <St.Title>PRE-GENESIS COLLECTION</St.Title>
      <St.SubTitle>[ THE DEITY ]</St.SubTitle>

      <Web3Buttons />

      <St.SubtleDiv>
        <St.SubtleText>0.11588164 (ETH).</St.SubtleText>
        <St.SubtleText>1000 TOTAL.</St.SubtleText>
        <St.YellowText>
          {nftsRemaining} <St.SubtleText>REMAINING.</St.SubtleText>
        </St.YellowText>
        {/*
        <St.CountdownDiv>
          {isMintLive ? (
            <>
              <St.CountdownStyled date={mintEnd} />
              <St.SubtleText>REMAINING</St.SubtleText>
            </>
          ) : (
            <>
              <St.CountdownStyled date={mintStart} />
              <St.SubtleText>UNTIL LAUNCH</St.SubtleText>
            </>
          )}
        </St.CountdownDiv>
        */}
      </St.SubtleDiv>
    </St.HeroContainer>
  );
};

export default Hero;
