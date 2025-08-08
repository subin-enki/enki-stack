import { Button } from '@/components/ui/button';
import { Badge, Container, Flex } from '@mantine/core';

export default function Home() {
  return (
    <Container size="md" style={{ paddingTop: '2rem' }}>
      <Flex direction="column" align="center" justify="center" gap="md">
        <Button>ShadCn Button</Button>
        <Badge color="cyan" variant="gradient">
          Mantine Badge
        </Badge>
      </Flex>
    </Container>
  );
}
