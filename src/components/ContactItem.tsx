import { useState } from "react";
import { ActionIcon, Flex, Text, Tooltip, CopyButton } from "@mantine/core";
import { IconCopy, IconPhone, IconMail, IconLink } from "@tabler/icons-react";

interface ContactItemProps {
  type: string;
  value: string;
  formattedValue?: string;
  icon: string;
  storageKey: string;
}

const ContactItem = ({
  type,
  value,
  formattedValue,
  storageKey,
}: ContactItemProps) => {
  const [isVisible, setVisible] = useState(false);

  const handleCopy = (event: React.MouseEvent) => {
    event.preventDefault();
    navigator.clipboard.writeText(value);
    localStorage.setItem(storageKey, value);
    setVisible(!isVisible);
  };

  const getHref = (): string => {
    switch (type.toLowerCase()) {
      case "phone":
        return `tel:${value}`;
      case "email":
        return `mailto:${value}`;
      default:
        return "#";
    }
  };

  const getIcon = () => {
    switch (type.toLowerCase()) {
      case "phone":
        return <IconPhone size={16} />;
      case "email":
        return <IconMail size={16} />;
      default:
        return <IconLink size={16} />;
    }
  };

  return (
    <Flex direction="column" gap="xs">
      <Flex align="center" gap="sm">
        <Tooltip label={`Click to ${type.toLowerCase()}`}>
          <ActionIcon
            component="a"
            href={getHref()}
            variant="subtle"
            color="blue"
          >
            {getIcon()}
          </ActionIcon>
        </Tooltip>

        <Text>{type}</Text>

        <CopyButton value={value} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip label={copied ? "Copied!" : "Copy"}>
              <ActionIcon
                color={copied ? "teal" : "gray"}
                variant="subtle"
                onClick={(e) => {
                  copy();
                  handleCopy(e);
                }}
              >
                <IconCopy size={16} />
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Flex>

      {isVisible && (
        <Text
          id={`${type.toLowerCase()}Input`}
          style={{ cursor: "pointer" }}
          onClick={handleCopy}
        >
          {formattedValue || value}
        </Text>
      )}
    </Flex>
  );
};

export default ContactItem;
