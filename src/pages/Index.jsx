import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Welcome to the Financial Times
        </Heading>
        <Text fontSize="xl">
          Stay updated with the latest financial news, analysis, and reports from around the world.
        </Text>
        <Box bg="gray.100" p={6} borderRadius="md" w="full">
          <Heading as="h2" size="lg" mb={4}>
            Featured Article
          </Heading>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;