import { IconHeart, IconQuote, IconStar } from '@tabler/icons-react';
import { Avatar, Box, Card, Container, Divider, Grid, Group, Stack, Text } from '@mantine/core';

const YearbookPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container size="lg" py="xl">
      <Card shadow="xl" p="xl" radius="md" withBorder>
        <Box mb="lg">
          <Text ta="center" size="xl" fw={700} tt="uppercase">
            Eitan Fire
          </Text>
          <Text ta="center" size="lg" c="dimmed">
            Class of {currentYear}
          </Text>
        </Box>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Group justify="center">
                <Avatar size={120} radius="50%" bg="gray.2">
                  📸
                </Avatar>
              </Group>
              <Text ta="center" size="lg" fw={500}>
                Most Likely To
              </Text>
              <Text ta="center" size="xl" c="dark">
                Write Beautiful Code
              </Text>

              <Card shadow="sm" radius="md" p="lg" withBorder>
                <Group gap="xs" align="center">
                  <IconQuote size={20} color="gray" />
                  <Text fw={500} size="lg">
                    Favorite Quote
                  </Text>
                </Group>
                <Text ta="center" size="lg" fs="italic" c="dimmed">
                  "The only way to do great work is to love what you do."
                </Text>
              </Card>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Card shadow="sm" radius="md" p="lg" withBorder>
                <Group gap="xs" align="center">
                  <IconStar size={20} style={{ color: 'gold' }} />
                  <Text fw={500} size="lg">
                    Superlatives
                  </Text>
                </Group>
                <Stack mt="md" gap="xs">
                  <Group gap="xs">
                    <IconHeart size={16} style={{ color: 'red' }} />
                    <Text>Most Enthusiastic Developer</Text>
                  </Group>
                  <Group gap="xs">
                    <IconHeart size={16} style={{ color: 'red' }} />
                    <Text>Best Problem Solver</Text>
                  </Group>
                  <Group gap="xs">
                    <IconHeart size={16} style={{ color: 'red' }} />
                    <Text>Most Creative Coder</Text>
                  </Group>
                </Stack>
              </Card>

              <Card shadow="sm" radius="md" p="lg" withBorder>
                <Group gap="xs" align="center">
                  {/* <IconGraduationCap size={20} style={{ color: '#228be6' }} /> */}
                  <Text fw={500} size="lg">
                    Activities
                  </Text>
                </Group>
                <Stack mt="md" gap="xs">
                  <Text>🖥️ Full Stack Development</Text>
                  <Text>🎨 UI/UX Design</Text>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" />
        <Text ta="center" size="md" c="dimmed" fs="italic">
          "May your code be clean and your bugs be few"
        </Text>
      </Card>
    </Container>
  );
};

export default YearbookPage;
