import { Box, Button, Circle, Flex, Image, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import pic from "../squidy.jpeg";

function Header() {

	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";
	const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

	return (
		<Stack>
			<Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />
			<Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
				<Box mt={isNotSmallerScreen ? "0" : "16"} align="flex-start">
					<Text fontSize="5x1" fontWeight="semibold">
						Hi, I am
						</Text>
					<Text fontSize="7x1" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">
						Ade Usman
						</Text>
					<Text color={isDark ? "gray.200" : "gray.500"}>
						Web Developer - Laravel, React JS, Firebase. @smndee, Technician and Programmer
					</Text>
					<Button mt={8} colorScheme="blue" onClick={ () => window.open }>
						Hire Me
					</Button>
				</Box>
				<Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src={pic} />
			</Flex>
		</Stack>
	);
}

export default Header;