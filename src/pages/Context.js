import {Grid, Col, Text, Flex} from '@mantine/core';
import React from 'react';
import video from '../images/video.mp4';
import Navbar from '../components/Navbar';

const Context = () => {
  return (
    <Flex
      direction={'column'}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Navbar />
      <Grid
        gutter="lg"
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          backgroundColor: '#284B63',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Col span={12} md={3}>
          <Text size={25} color="white">
            Explorez l'essence de la créativité musicale. <br />
            Samples et échantillons d'exception pour sublimer votre musique.
          </Text>
        </Col>
        <Col
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            display: 'flex',
          }}
          span={12}
          md={5}
        >
          <video
            style={{
              borderRadius: 25,
              width: '550px',
              height: '650px',
            }}
            autoPlay
          >
            <source src={video} />
          </video>
        </Col>
      </Grid>
    </Flex>
  );
};

export default Context;
