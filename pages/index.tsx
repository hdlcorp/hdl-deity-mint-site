import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import NavBar from 'components/NavBar/NavBar';
// import Hero from 'components/Hero/Hero';
import DynamicHero from 'components/Hero/DynamicHero';
import Slider from 'components/Slider/Slider';
import { sliderMedia } from 'components/Slider/sliderMedia';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.bgMain};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  color: ${(props) => props.theme.colors.textMain};
`;

const Home: NextPage = () => {
  return (
    <AppContainer>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <NavBar />
      <DynamicHero />

      <Slider>
        {sliderMedia.map((nft) => (
          <div key={nft.id}>
            <video loop autoPlay muted>
              <source src={nft.video_url} type="video/mp4" />
            </video>
          </div>
        ))}
      </Slider>
    </AppContainer>
  );
};

export default Home;
