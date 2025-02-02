import { Anchor, Card, Center, Container, Grid, Group, Image, Paper, Text, Title, useMantineColorScheme } from '@mantine/core';
import picture from '../../assets/efire Background Removed.png';
import classes from './Welcome.module.css';


export function LandingPage() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div
      style={{
        backgroundColor: colorScheme === 'dark' ? '#1A1B1E' : '#f0f0f0',
        minHeight: '100vh',
        padding: '2rem 0',
      }}
    >
      <Container size="md">
        <Grid justify="center">
          <Grid.Col span={8}>
            <Paper className={classes.component}>
              <Card
                padding="xl"
                radius="md"
                mt="50%"
                withBorder
                style={{
                  backgroundColor: colorScheme === 'dark' ? '#25262B' : 'white',
                }}
              >
                <Grid gutter="md" align="center">
                  <Grid.Col span={6}>
                    <Center>
                      <Image
                        src={picture}
                        className="picture"
                        radius="90%"
                        height={110}
                        style={{
                          backgroundColor: colorScheme === 'dark' ? '#ccfcf4' : ' #f2f2f2',
                        }}
                      />
                    </Center>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Center>
                      <div style={{ width: '100%' }}>
                        <Title ta="left" size="xl" mb="xs">
                          Eitan Fire
                        </Title>
                        <Text>builder + teacher</Text>
                        <Group justify="left" gap="md">
                          <Anchor
                            href="https://github.com/eitanfire"
                            target="_blank"
                            underline="hover"
                          >
                            GitHub
                          </Anchor>
                          <Anchor
                            href="https://www.linkedin.com/in/eitanfire/"
                            target="_blank"
                            underline="hover"
                          >
                            LinkedIn
                          </Anchor>
                          <Anchor
                            href="https://portfolio.eitans.website/"
                            target="_blank"
                            underline="hover"
                          >
                            Portfolio
                          </Anchor>
                        </Group>
                      </div>
                    </Center>
                  </Grid.Col>
                </Grid>
              </Card>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}