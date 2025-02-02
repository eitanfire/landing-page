import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { Welcome } from '../components/Welcome/Welcome';
import YearbookPage from '../components/Welcome/YearbookPage';

export function HomePage() {
  return (
    <>
      <ColorSchemeToggle />
      <YearbookPage />
      {/* <Welcome /> */}
    </>
  );
}