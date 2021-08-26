import { Flex, Heading, IconButton, Spacer, useColorMode, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaSun, FaMoon, FaGithub, FaFacebook, FaTelegram } from 'react-icons/fa';
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {

	const { colorMode, toggleColorMode } = useColorMode();
	const isDark = colorMode === "dark";	

	return (
		<VStack p={5}>
			<Flex w="100%" h="100%">
				<Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Simple Portofolio</Heading>
				<Spacer/>
				<IconButton ml={3} icon={<FaFacebook/>} isRound onClick={toggleColorMode} />			
				<IconButton ml={3} icon={<FaGithub/>} isRound onClick={toggleColorMode} />
				<IconButton ml={3} icon={<FaTelegram/>} isRound onClick={toggleColorMode} />
				<IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound onClick={toggleColorMode} />
			</Flex>
			<Header/>
			<Social/>
			<Profile/>
		</VStack>
	);
}

export default App;