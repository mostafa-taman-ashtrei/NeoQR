import React from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';

const Nav: React.FC = () => (
    <Stack as="main" align="center">
        <Flex p="2" w="100%" as="nav" flexDirection="row" pt="2" justify="space-between" backgroundColor="green.400">
            <Text>NEOQR</Text>
            <ThemeToggle />
        </Flex>
    </Stack>

);

export default Nav;
