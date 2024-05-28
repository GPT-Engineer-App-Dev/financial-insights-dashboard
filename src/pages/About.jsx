import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>
        About Us
      </Heading>
      <Text fontSize="lg" mb={4}>
        The Financial Times is a globally recognized daily newspaper known for its in-depth coverage of financial news, analysis, and reports.
      </Text>
      <Text fontSize="lg">
        Our mission is to provide accurate and insightful information to help our readers make informed decisions in the world of finance.
      </Text>
    </Container>
  );
};

export default About;