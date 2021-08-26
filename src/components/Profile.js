import { Box, Flex, Heading, Icon, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { DiLaravel, DiReact, DiFirebase } from 'react-icons/di';

function Profile() {
	
	const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

	return (
		<Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" maxWidth={{ 		base: "100vh", md: "200vh", lg: "200vh", xl: "200vh" }} >

			<Box alignSelf="center" px="32" py="16">
				<Heading fontWeight="extrabold" color="cyan.500" size="4x1" >
					3+
				</Heading>
				<Text fontSize="2x1" color="gray.400">Years of Experience</Text>
			</Box>
			<Box alignSelf="center" px="32" py="16">
				<Text fontWeight="bold" fontSize="2xl">Web Developer, specialised in Backend development.</Text>
				<Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
					<Flex rounded="x1" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
						<Icon color="white" p="4" as={DiLaravel} w="24" h="24" />
						<Text color="black" p="4" fontSize="x1" fontWeight="semibold">
							Laravel Apps
						</Text>
					</Flex>
					<Flex rounded="x1" direction="column" mt={4} ml={isNotSmallerScreen ? "4" : "0"} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "teal.400",}} >
						<Icon color="black" p="4" as={DiReact} w="24" h="24" />
						<Text color="black" p="4" fontSize="x1" fontWeight="semibold">
							React Apps
						</Text>
					</Flex>
					<Flex rounded="x1" direction="column" mt={4} ml={isNotSmallerScreen ? "4" : "0"} bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "green.400",}} >
						<Icon color="black" p="4" as={DiFirebase} w="24" h="24" />
						<Text color="black" p="4" fontSize="x1" fontWeight="semibold">
							Firebase
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Flex>
	);

}

export default Profile;