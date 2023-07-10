import {Grid, Col, Text, Flex} from '@mantine/core';
import React from 'react';
import video from '../images/video.mp4';

const Context = () => {
  return (
    <Flex
      direction={'column'}
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Grid
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
          <div
            style={{
              display: 'flex',
            }}
          >
            <video
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '25px',
              }}
              autoPlay
              loop
              playsInline
              muted
            >
              <source src={video} />
            </video>
          </div>
        </Col>
      </Grid>
    </Flex>
  );
};

export default Context;
