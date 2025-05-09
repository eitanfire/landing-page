import { useState } from "react";
import QRCode from "react-qr-code";
import { Button, Center, Flex, Modal } from "@mantine/core";

interface QRCodeToggleProps {
  url: string;
}

export function QRCodeToggle({ url }: QRCodeToggleProps) {
  const [showQR, setShowQR] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    alert("Website URL copied to clipboard!");
  };

  return (
    <>
      <Flex gap="md" align="center">
        <Button onClick={() => setShowQR(true)}>Show QR Code</Button>
        <Button variant="outline" onClick={handleCopyLink}>
          Copy Link
        </Button>
      </Flex>

      <Modal
        opened={showQR}
        onClose={() => setShowQR(false)}
        centered
        fullScreen
      >
        <Center style={{ height: "100vh", flexDirection: "column" }}>
          <QRCode value={url} size={250} />
          <Button mt="md" onClick={() => setShowQR(false)}>
            Close
          </Button>
        </Center>
      </Modal>
    </>
  );
}
