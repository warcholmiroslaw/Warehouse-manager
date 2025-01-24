import React from 'react';
import {Icon, IconButton, Stack} from "@chakra-ui/react"
import { MdOutlineHistory } from "react-icons/md";
import {Button, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";




const ButtonWithLabel = ({fieldKey, icon, name, action}) => {
    const navigate = useNavigate();

    const handleSignUp = (action) => {
        navigate(`/${action}`);
    };

    return (
        <Button onClick={() => handleSignUp(action)}
        bg = "#FFC30D"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        boxSize= "100px"
        color="black"
        margin={1}
        >

            <Icon as={icon} boxSize="40px"/>
            <Text
                textStyle="sm"
            >
                {name}
            </Text>
        </Button>
    )
}

export default ButtonWithLabel;