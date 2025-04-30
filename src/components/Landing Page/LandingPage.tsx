import { useEffect, useState, useRef } from "react";
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
import TeethGlint from "../Landing Page/TeethGlint";
import classes from "./Landing-Page.module.css";

export function LandingPage() {
  const { colorScheme } = useMantineColorScheme();
  const pageURL = "https://eitans.website/";
  const [showGlint, setShowGlint] = useState(false);
  const previousColorScheme = useRef(colorScheme);
  const hasSwitchedToDark = useRef(false);

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

  useEffect(() => {
    if (
      colorScheme === "dark" &&
      previousColorScheme.current === "light" &&
      !hasSwitchedToDark.current
    ) {
      setShowGlint(true);
      hasSwitchedToDark.current = true;

      const timer = setTimeout(() => {
        setShowGlint(false);
      }, 1200);

      return () => clearTimeout(timer);
    }

    previousColorScheme.current = colorScheme;
  }, [colorScheme]);

  const isSmallScreen = useMediaQuery("(max-width: 576px)");
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  const handleLinkKeyDown = (e: React.KeyboardEvent, href: string) => {
    if (e.key === "Enter" || e.key === " ") {
      window.open(href, "_blank", "noopener noreferrer");
    }
  };

  return (
    <main
      role="main"
      aria-label="Personal portfolio landing page"
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
                    <Center style={{ position: "relative" }}>
                      <Image
                        src={picture}
                        className="picture"
                        radius="90%"
                        fit="contain"
                        w={{ base: "50%", sm: "70%" }}
                        alt="Eitan Fire portrait"
                        aria-labelledby="profile-name"
                        styles={{
                          root: {
                            backgroundColor:
                              colorScheme === "dark" ? "#ccfcf4" : "#f2f2f2",
                          },
                        }}
                      />

                      <TeethGlint
                        show={showGlint}
                        theme={colorScheme}
                        aria-hidden={!showGlint}
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
                        id="profile-name"
                        ta={{ base: "center", sm: "left" }}
                        size="2.5rem"
                        style={{
                          color: colorScheme === "dark" ? "pink" : "black",
                        }}
                      >
                        Eitan Fire
                      </Title>
                      <Text
                        size="xl"
                        ta={{ base: "center", sm: "left" }}
                        role="doc-subtitle"
                      >
                        software engineer + teacher
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
                      <nav
                        aria-label="Social media and projects links"
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
                            ariaLabel: "Visit Eitan's GitHub profile",
                          },
                          {
                            href: "https://www.linkedin.com/in/eitanfire/",
                            label: "LinkedIn",
                            ariaLabel: "Connect with Eitan on LinkedIn",
                          },
                          {
                            href: "https://projects.eitans.website/",
                            label: "Projects",
                            ariaLabel: "View Eitan's portfolio projects",
                          },
                        ].map((link) => (
                          <Anchor
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            underline="hover"
                            size="lg"
                            rel="noopener noreferrer"
                            aria-label={link.ariaLabel}
                            onKeyDown={(e) => handleLinkKeyDown(e, link.href)}
                            tabIndex={0}
                          >
                            {link.label}
                          </Anchor>
                        ))}
                      </nav>
                    </div>
                  </Grid.Col>
                </Grid>
              </Card>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </main>
  );
}
