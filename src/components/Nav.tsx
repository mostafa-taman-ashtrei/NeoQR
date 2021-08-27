import React from 'react';
import { Flex, Text, Heading, Box, Spacer, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, AddIcon, CheckIcon } from '@chakra-ui/icons';
import ThemeToggle from './ThemeToggle';

const Nav: React.FC = () => (
    <Flex as="nav" backgroundColor="tomato">
        <Box p="2">
            <RouterLink to="/"><Heading size="md">NeoQR</Heading></RouterLink>
        </Box>

        <Spacer />

        <Box>
            <ThemeToggle />
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon />}
                    variant="outline"
                />
                <MenuList>
                    <RouterLink to="/generate">
                        <MenuItem icon={<AddIcon />}>
                            <RouterLink to="/generate"><Text as="i">Generate QR codes</Text></RouterLink>
                        </MenuItem>
                    </RouterLink>

                    <RouterLink to="/scan">
                        <MenuItem icon={<CheckIcon />}>
                            <Text as="i">Scan QR codes</Text>
                        </MenuItem>
                    </RouterLink>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Nav;
