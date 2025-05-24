// src/components/ProfileCard.jsx
import {
  Box,
  Image,
  Text,
  Heading,
  Tag,
  Button,
  Stack,
  HStack,
  VStack,
  Avatar,
  Badge,
} from '@chakra-ui/react';

const ProfileCard = () => {
  return (
    <Box
      maxW="sm"
      mx="auto"
      bg="white"
      borderRadius="xl"
      boxShadow="lg"
      p={6}
      textAlign="center"
    >
      <VStack spacing={4}>
        <Box position="relative">
          <Avatar
            size="xl"
            name="Lindsey James"
            src="https://randomuser.me/api/portraits/women/79.jpg"
          />
          <Badge
            boxSize={3}
            bg="green.400"
            borderRadius="full"
            border="2px solid white"
            position="absolute"
            bottom={1}
            right={1}
          />
        </Box>

        <Heading size="md">Lindsey James</Heading>
        <Text fontSize="sm" color="gray.500">
          @lindsey_jam3s
        </Text>

        <Text fontSize="sm" px={2}>
          Actress, musician, songwriter and artist. PM for work inquiries or <Text as="span" color="blue.500" fontWeight="semibold">#tag</Text> me in your posts
        </Text>

        <HStack spacing={2} wrap="wrap">
          <Tag>#ART</Tag>
          <Tag>#PHOTOGRAPHY</Tag>
          <Tag>#MUSIC</Tag>
        </HStack>

        <HStack pt={3}>
          <Button colorScheme="gray" variant="outline">
            Message
          </Button>
          <Button colorScheme="blue">Follow</Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProfileCard;
