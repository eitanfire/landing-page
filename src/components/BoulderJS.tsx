import React, { useState } from "react";
import { Box, Button, Collapse, Center, Container } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";

const BoulderJS = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Center>
      <Container size="75%">
        <Box>
          <Button
            onClick={toggleDropdown}
            fullWidth
            rightSection={
              isOpen ? (
                <IconChevronUp size={16} />
              ) : (
                <IconChevronDown size={16} />
              )
            }
            color="dark"
            mb={isOpen ? "md" : 0}
            radius="md"
            size="md"
          >
            BoulderJS
          </Button>

          <Collapse in={isOpen}>
            <iframe
              src="https://lu.ma/embed/event/evt-a8ttjK8n8ivdaZI/simple"
              width="100%"
              height="450"
              frameBorder="0"
              style={{
                border: "1px solid #bfcbda88",
                borderRadius: "4px",
              }}
              aria-hidden={!isOpen}
              tabIndex={isOpen ? 0 : -1}
            ></iframe>
          </Collapse>
        </Box>
      </Container>
    </Center>
  );
};

export default BoulderJS;
