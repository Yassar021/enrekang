import React, { Component } from 'react';
import Slider from 'react-slick';
import CardWisata from './cardWisata';
import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';
import { Box, Image } from '@chakra-ui/react';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

export default class SliderCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <>
        <Box px={{ base: '4px', md: '20px', xl: '120px' }}>
          <Slider {...settings}>
            <Box width={{ base: '90%', md: '100%' }} height="420px" p={{ base: '4px', md: '20px' }}>
              <CardWisata image={'/wisata1.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata2.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata3.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata3.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata2.png'} />
            </Box>
            <Box
              width={{ base: '100%', md: '100%' }}
              height="420px"
              p={{ base: '4px', md: '20px' }}
            >
              <CardWisata image={'/wisata1.png'} />
            </Box>
          </Slider>
        </Box>
      </>
    );
  }
}
