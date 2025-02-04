import { useMantineColorScheme } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { LandingPage } from '../components/Welcome/LandingPage';

export function HomePage() {
  const { colorScheme } = useMantineColorScheme();

  return (
    <div
      style={{
        backgroundColor: colorScheme === 'dark' ? '#1A1B1E' : '#f0f0f0',
      }}
    >
      <ColorSchemeToggle />
      <LandingPage />
    </div>
  );
}
