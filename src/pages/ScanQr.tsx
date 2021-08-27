import React, { useState } from 'react';
import { Center, Container, Grid, GridItem, Text } from '@chakra-ui/react';
import QrScan from 'react-qr-reader';

const ScanQr: React.FC = () => {
    const [qrData, setQrData] = useState<string>('');

    const handleScan = (data: string | null) => { if (data) setQrData(data); };

    return (
        <Grid gap={4} m={3}>
            <GridItem colSpan={4}>
                <Center>
                    <QrScan
                        delay={300}
                        // eslint-disable-next-line no-console
                        onError={(err) => console.log(err)}
                        onScan={handleScan}
                        style={{ height: 400, width: 400 }}
                    />
                </Center>
            </GridItem>

            {qrData && (
                <GridItem colSpan={4}>
                    <Center>
                        <Container>
                            <Text fontSize="xl" fontWeight="bold">
                                This QR code contains :
                                {' '}
                                {qrData}
                            </Text>
                        </Container>
                    </Center>
                </GridItem>
            )}
        </Grid>
    );
};

export default ScanQr;
