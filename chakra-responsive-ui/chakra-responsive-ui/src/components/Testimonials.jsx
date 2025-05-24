// src/components/Testimonials.jsx
import {
  Box,
  Flex,
  Text,
  Avatar,
  Heading,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

const TestimonialCard = ({ title, content, name, position, img }) => {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow="md"
      borderRadius="md"
      p={6}
      maxW="sm"
      textAlign="center"
    >
      <Heading fontSize="lg" mb={2}>{title}</Heading>
      <Text fontSize="sm" color="gray.600" mb={4}>{content}</Text>
      <Avatar name={name} src={img} mx="auto" mb={2} />
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.500">{position}</Text>
    </Box>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      title: "Efficient Collaborating",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Jane Cooper",
      position: "CEO at Example",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      title: "Intuitive Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "John Doe",
      position: "CTO at Example",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      title: "Mindblowing Service",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      name: "Mary Jane",
      position: "COO at Example",
      img: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  return (
    <Box py={10} px={4} bg="gray.50">
      <Heading textAlign="center" mb={10}>
        Our Clients Speak
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={6}
        align="center"
        justify="center"
        flexWrap="wrap"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </Flex>
    </Box>
  );
};

export default Testimonials;
