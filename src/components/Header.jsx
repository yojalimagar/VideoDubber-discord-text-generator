import { Title, Text } from '@mantine/core';

function Header() {
  return (
    <Title order={1} align="center" mb="lg">
      Rebane's Discord <Text component="span" color="blue" inherit>Colored</Text> Text Generator
    </Title>
  );
}

export default Header;