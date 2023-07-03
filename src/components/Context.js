import {Grid, Col, Text} from '@mantine/core';
import React from 'react';
import video from '../images/video.mp4';

const Context = () => {
  return (
    <Grid
      gutter="lg"
      style={{
        width: '100vw',
        height: '95vh',
        margin: 0,
        backgroundColor: '#284B63',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <Col span={12} md={3}>
        <Text
          size={25}
          color="white"
          styles={{
            '@media (max-width: 1000px)': {
              textAlign: 'center',
              backgroundColor: 'blue',
            },
            '@media (max-width: 400px)': {
              textAlign: 'left',
              backgroundColor: 'red',
            },
          }}
        >
          Explorez l'essence de la créativité musicale. <br />
          Samples et échantillons d'exception pour sublimer votre musique.
        </Text>
      </Col>
      <Col
        style={{
          justifyContent: 'center',
        }}
        span={12}
        md={5}
      >
        <video
          style={{
            borderRadius: 25,
            width: '100%',
            height: '100%',
          }}
          autoPlay
        >
          <source src={video} />
        </video>
      </Col>
    </Grid>
  );
};

export default Context;
