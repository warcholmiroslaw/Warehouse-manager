import {extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            fonts: {
                body: 'Poppins'
            },
            body: {
                bg: "#EDF0F2", // default background color
                color: "#858585", // default text color
            },
        },
    },
});

export default theme;
