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
          backgroundColor: 'black',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <Col md={4} style={{marginLeft: '50px'}}>
          <Text size={25} color="white">
            Explorez l'essence de la créativité musicale ! Samples et
            échantillons d'exception pour sublimer votre musique.
          </Text>
          <br />
          <Text size={10} color="gray">
            Explorez l'essence de la créativité musicale. <br />
            Samples et échantillons d'exception pour sublimer votre musique.
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
