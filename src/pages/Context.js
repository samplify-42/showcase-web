import {Grid, Col, Text, Flex} from '@mantine/core';
import React from 'react';
import video from '../images/video.mp4';

const Context = () => {
  return (
    <Flex
      direction={'column'}
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <video
        style={{
          width: '100%',
          height: '100%',
        }}
        data-keepplaying
        autoPlay
        loop
        playsInline
        muted
      >
        <source src={video} />
      </video>
      <Flex
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'black',
          opacity: '40%',
        }}
      ></Flex>
      <Flex
        style={{
          width: '50%',
          height: '100%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex direction={'column'}>
          <Text weight={'bold'} align="center" size={35} color="white">
            Explorez l'essence de la créativité musicale <br />
            Samples et échantillons d'exception pour sublimer votre musique
          </Text>
          <Text align="center" size={20} color="white">
            Plongez dans une collection unique de samples NFT et laissez votre
            créativité s'envoler.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Context;
