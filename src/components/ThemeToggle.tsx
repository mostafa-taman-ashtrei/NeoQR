import React from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeToggle: React.FC = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <IconButton
            aria-label="Toggle Dark Switch"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
            // size="md"
            fontSize="xl"
            m="0.5"
            variant="outline"
        />
    );
};

export default ThemeToggle;
