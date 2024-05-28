import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" mb={6}>
        Contact Us
      </Heading>
      <Text fontSize="lg" mb={4}>
        For inquiries, please reach out to us at contact@financialtimes.com.
      </Text>
      <Text fontSize="lg">
        You can also follow us on our social media channels for the latest updates.
      </Text>
    </Container>
  );
};

export default Contact;