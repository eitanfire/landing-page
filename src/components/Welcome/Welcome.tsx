import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Hello I'm{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'yellow', to: 'pink' }}>
          Eitan Fire
        </Text>
      </Title>
      <Text c="bright" ta="center" size="lg" maw={580} mx="auto" mt="xl">
i love you too     {/* <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file. */}
      </Text>
    </>
  );
}
