import { Anchor, Card, Center, Container, Grid, Group, Image, Paper, Text, Title, useMantineColorScheme } from '@mantine/core';
import picture from '../../assets/efire Background Removed.png';
import EmailContact from '../EmailContact';
import classes from './Welcome.module.css';


export function LandingPage() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div
      style={{
        backgroundColor: colorScheme === 'dark' ? '#1A1B1E' : '#f0f0f0',
        minHeight: '90vh',
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
                pl="0"
                mt="40%"
                withBorder
                style={{
                  backgroundColor: colorScheme === 'dark' ? '#25262B' : 'white',
                }}
              >
                <Grid gutter="sm" align="center">
                  <Grid.Col span={6}>
                    <Center>
                      <Image
                        src={picture}
                        className="picture"
                        radius="90%"
                        fit="contain"
                        w="70%"
                        styles={{
                          root: {
                            backgroundColor: colorScheme === 'dark' ? '#ccfcf4' : '#f2f2f2',
                          },
                        }}
                      />
                    </Center>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Center>
                      <div style={{ width: '100%' }}>
                        <Title
                          ta="left"
                          size="3dvw"
                          mb="xs"
                          style={{
                            color: colorScheme === 'dark' ? 'pink' : 'black',
                          }}
                        >
                          Eitan Fire
                        </Title>
                        <Text>builder + teacher</Text>
                        <EmailContact />
                        <Group
                          justify="left"
                          gap="md"
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            '@media (max-width: 48em)': {
                              flexDirection: 'column',
                              alignItems: 'flex-start',
                            },
                          }}
                        >
                          {[
                            { href: 'https://github.com/eitanfire', label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/eitanfire/', label: 'LinkedIn' },
                            { href: 'https://projects.eitans.website/', label: 'Projects' },
                          ].map((link) => (
                            <Anchor
                              key={link.href}
                              href={link.href}
                              target="_blank"
                              underline="hover"
                              style={{
                                '@media (max-width: 48em)': {
                                  width: '100%',
                                  marginBottom: '0.5rem',
                                },
                              }}
                            >
                              {link.label}
                            </Anchor>
                          ))}
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