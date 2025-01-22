import React, {useState} from 'react';
import {Box, Button, Checkbox, Flex, HStack, Image, Link, Text} from "@chakra-ui/react";
import logo from "../images/logo.png";
import InputField from "../components/InputField";
import {useNavigate} from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { login } from "../services/authService";

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await login(formData);
            console.log("Logged in! Token:", token);
            navigate("/dashboard");
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <Flex
            display="flex"
            justifyContent= "center"
            alignItems="center"
            bg="EDF0F2"
            width="100vw"
            height={{lg: "100vh"}}
            minHeight="100vh"
            padding={{base:8, md: 4, lg: 4}}
            boxSizing="border-box"
        >
            <Flex
                display="flex"
                bg="white"
                borderRadius="15"
                width="100%"
                height={{lg: "100vh"}}
                minHeight="100vh"
                justifyContent= "center"
                alignItems="center"
                boxSizing="border-box"
            >
                <HStack spacing={0}
                        display="flex"
                        width="100%"
                        justifyContent={{base: "center", md: "center", lg: "center"}}
                        alignItems="center"
                        padding={{base:0, md: 0, lg: 8}}
                        flexWrap={{base: "wrap", md: "wrap", lg: "nowrap"}}
                        boxSizing="border-box"

                >
                    <Image src={logo}
                           display="flex"
                           justifyContent="center"
                           alignItems="center"
                           width={{base:"100%", md: "70%", lg: "100%"}}
                           padding={{base: 8, md: 4, lg: 2}}
                           boxSizing="border-box"
                    ></Image>

                    <Box
                        display="flex"
                        width="100%"
                        padding={4}
                        marginLeft={{base: 0, md:8, lg: 20}}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="left"
                        >

                        {/*head of login section*/}
                        <Flex
                            flexDirection="column"
                            justifyContent="left"
                            alignItems="left"
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
                        <form onSubmit={handleSubmit}>
                        <Flex display = "flex"
                                flexDirection="column"
                                paddingTop = {8}
                                width = {{base: '90%', md: '80%', lg: '70%'}}
                        >

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
                                flexDirection={{base:"column", md:"row", lg:"row"}}
                                justifyContent="space-between"
                                paddingTop={{base:2, md:4, lg:8}}
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
                                    paddingTop={{base:2, md:0, lg:0}}
                                >
                                    Forgot password?

                                </Text>
                            </Flex>

                            <Button
                                type = "submit"
                                bg="#101540"
                                borderRadius={10}
                                marginTop={{base:2, md:6, lg:8}}
                                color="white"
                            >
                                Login
                            </Button>


                            <Text
                                paddingTop={{base: 2, md: 4, lg: 6}}
                            >
                                Not registered yet? {" "}
                                <Link
                                    as={RouterLink}
                                    to="/register"
                                    variant="underline"
                                    color="#101540"
                                    fontWeight="bold"
                                >
                                    Create new account
                                </Link>
                            </Text>

                        </Flex>
                        </form>
                    </Box>
                </HStack>
        </Flex>
        </Flex>
    )
}
export default LoginPage;