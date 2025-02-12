import { useEffect, useState } from "react";
import {
  Anchor,
  Card,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import picture from "../../assets/efire Background Removed.png";
import EmailContact from "../EmailContact";
import classes from "./Welcome.module.css";

export function LandingPage() {
  const { colorScheme } = useMantineColorScheme();
  const pageURL = "https://eitans.website/";

  function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
  }
  const isSmallScreen = useMediaQuery("(max-width: 576px)");
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <div
      style={{
        backgroundColor: colorScheme === "dark" ? "#1A1B1E" : "#f0f0f0",
        minHeight: isSmallScreen ? "80dvh" : isLargeScreen ? "60dvh" : "80dvh",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Container size="md" style={{ width: "100%" }}>
        <Grid justify="center">
          <Grid.Col span={{ sm: 10, md: 8 }}>
            <Paper className={classes.component}>
              <Card
                padding="lg"
                radius="md"
                withBorder
                style={{
                  backgroundColor: colorScheme === "dark" ? "#25262B" : "white",
                }}
              >
                <Grid gutter="sm" align="center">
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <Center>
                      <Image
                        src={picture}
                        className="picture"
                        radius="90%"
                        fit="contain"
                        w={{ base: "50%", sm: "70%" }}
                        styles={{
                          root: {
                            backgroundColor:
                              colorScheme === "dark" ? "#ccfcf4" : "#f2f2f2",
                          },
                        }}
                      />
                    </Center>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, sm: 6 }}>
                    <div
                      style={{
                        width: "100%",
                        padding: "0.5rem",
                      }}
                    >
                      <Title
                        ta={{ base: "center", sm: "left" }}
                        size="2.5rem"
                        style={{
                          color: colorScheme === "dark" ? "pink" : "black",
                        }}
                      >
                        Eitan Fire
                      </Title>
                      <Text size="xl" ta={{ base: "center", sm: "left" }}>
                        builder + teacher
                      </Text>
                      <div
                        style={{
                          
                          display: "flex",
                          justifyContent: isLargeScreen
                            ? "flex-start"
                            : "center",
                        }}
                      >
                        <EmailContact />
                      </div>
                      <div
                        style={{
                          marginTop: "1rem",
                          display: "flex",
                          justifyContent: isLargeScreen
                            ? "flex-start"
                            : "center",
                          gap: "1rem",
                          flexWrap: "wrap",
                        }}
                      >
                        {[
                          {
                            href: "https://github.com/eitanfire",
                            label: "GitHub",
                          },
                          {
                            href: "https://www.linkedin.com/in/eitanfire/",
                            label: "LinkedIn",
                          },
                          {
                            href: "https://projects.eitans.website/",
                            label: "Projects",
                          },
                        ].map((link) => (
                          <Anchor
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            underline="hover"
                            size="lg"
                          >
                            {link.label}
                          </Anchor>
                        ))}
                      </div>
                    </div>
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
