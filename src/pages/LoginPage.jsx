import React, {useState} from 'react';
import {Box, Button, Checkbox, Flex, HStack, Image, Link, Text} from "@chakra-ui/react";
import logo from "../images/logo.png";
import InputField from "../components/InputField";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const inputFields = [
        { name: "email", type: "email", placeholder: "Enter email", isRequired: true },
        { name: "password", type: "password", placeholder: "Enter password", isRequired: true },
    ];

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Flex
            justifyContent= "center"
            alignItems="center"
            height="100vh"
            width="100vw"
            bg="EDF0F2"
        >
            <Flex
                bg="white"
                borderRadius="15"
                width="95vw"
                height="95vh"
                justifyContent="center"
            >
                <HStack spacing={0}
                        width="100%"
                        marginLeft={8}
                        marginRight={8}

                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        width="100%"
                        height="100%"
                        padding={4}
                        justifyContent="center"
                        alignItems="left"
                        >

                        {/*head of login section*/}
                        <Flex
                            display="block"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box boxSize = {10}
                                 bg="#FFC30D">

                            </Box>

                            <Text
                                fontSize="2xl"
                                fontWeight="bold"
                                color="#000000"
                            >
                                Warehouse manager
                            </Text>

                            <Text
                                paddingTop={4}
                                fontSize="md"
                            >
                                Login
                            </Text>
                        </Flex>

                        {/*Input and buttons*/}
                        <Flex display = "flex"
                              justifyContent="center"
                            flexDirection="column"
                                paddingTop = {8}
                                width = "70%">

                            {inputFields.map((field, index) => (
                                <InputField
                                    key={index}
                                    name={field.name}
                                    label={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    onChange={handleChange}
                                    isRequired={field.isRequired}
                                >

                                </InputField>
                            ))}

                            <Flex
                                flexDirection="row"
                                justifyContent="space-between"
                                paddingTop={6}
                            >

                                <Checkbox
                                    variant="subtle"
                                    colorPalette="green"
                                    borderColor="#8F8F8F"
                                    colorScheme="green"
                                    borderRadius={1}
                                    size = "md"
                                >
                                    Remember me
                                </Checkbox>
                                <Text
                                    fontSize="md"
                                    fontWeight="bold"
                                    color="#101540"
                                >
                                    Forgot password?

                                </Text>
                            </Flex>

                            <Button
                                bg="#101540"
                                borderRadius={10}
                                marginTop={8}
                                color="white"
                            >
                                Login
                            </Button>

                            <Text
                                padding={4}>
                                Not registered yet? {" "}
                                <Link
                                    variant="underline"
                                    href="https://chakra-ui.com"
                                    color="#101540"
                                    fontWeight="bold"
                                >
                                    Create new account
                                </Link>
                            </Text>

                        </Flex>

                    </Box>

                    <Image src={logo}
                        justifyContent="center"
                           alignItems="center"
                           display="flex"
                           width="100%"
                    ></Image>
                </HStack>
        </Flex>

        </Flex>
    )
}
export default LoginPage;