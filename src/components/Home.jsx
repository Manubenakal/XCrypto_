import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../logo/logo.png';
import { motion } from 'framer-motion';
const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'85vh'}>
      <motion.div
        style={{
          height: '80vh',
        }}
        animate={{
          translateY: '20px',
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image w={'full'} h={'full'} objectFit={'contain'} src={logo}></Image>
      </motion.div>
      <Text>.</Text>
      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        mt={-20}
        color={'whiteAlpha.900'}
        fontWeight={'thin'}
      >
        ᙭ᑕᖇYᑭTO
      </Text>
    </Box>
  );
};

export default Home;
