import { useMantineColorScheme, Flex, Image } from "@mantine/core";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { LandingPage } from "../components/Landing Page/LandingPage";
import { QRCodeToggle } from "../components/QRCodeToggle";
// import BoulderJS from "@/components/BoulderJS";

export function HomePage() {
  const { colorScheme } = useMantineColorScheme();
  const pageURL = "https://eitans.website/";

  return (
    <div
      style={{
        backgroundColor: colorScheme === "dark" ? "#1A1B1E" : "#f0f0f0",
        minHeight: "100vh",
      }}
    >
      <Flex justify="space-between" align="center" p="md">
        <ColorSchemeToggle />
        <QRCodeToggle url={pageURL} />
      </Flex>
      <LandingPage />
      {/* <BoulderJS /> */}
    </div>
  );
}
