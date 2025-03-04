import { Group, Anchor, CopyButton, Tooltip, ActionIcon } from "@mantine/core";
import { Copy } from "lucide-react";

interface EmailContactProps {
  email?: string;
}

const EmailContact = ({
  email = "eitan@eitans.website",
}: EmailContactProps) => {
  return (
    <Group gap={4} align="center">
      <Anchor href={`mailto:${email}`} underline="hover" size="lg">
        {email}
      </Anchor>
      <CopyButton value={email} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? "Copied!" : "Copy"}>
            <ActionIcon
              color={copied ? "teal" : "gray"}
              variant="subtle"
              onClick={copy}
            >
              <Copy size={18} />
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Group>
  );
};

export default EmailContact;
