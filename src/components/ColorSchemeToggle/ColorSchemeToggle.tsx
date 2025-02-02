import { Moon, Sun } from 'lucide-react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: colorScheme === 'dark' ? '#1A1B1E' : '#f0f0f0',
      }}
    >
      <ActionIcon
        onClick={toggleColorScheme}
        variant="transparent"
        size="xl"
        aria-label="Toggle color scheme"
        style={{
          backgroundColor: colorScheme === 'dark' ? '#1A1B1E' : '#f0f0f0',
          color: colorScheme === 'dark' ? 'white' : 'black',
        }}
      >
        {colorScheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </ActionIcon>
    </div>
  );
}
