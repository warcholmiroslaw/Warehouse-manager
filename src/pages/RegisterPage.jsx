import React, {useState} from 'react';
import {Box, Button, Checkbox, Flex, HStack, Image, Link, Text} from "@chakra-ui/react";
import logo from "../images/logo.png";
import InputField from "../components/InputField";
import {useNavigate} from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {signup} from "../services/authService";


const RegisterPage = () => {


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        roleId: 2

    });

    const inputFields = [
        { name: "email", type: "email", placeholder: "Enter email", isRequired: true },
        { name: "password", type: "password", placeholder: "Enter password", isRequired: true },
        { name: "confirmPassword", type: "password", placeholder: "Confirm password", isRequired: true },
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

        if (formData.password !== formData.confirmPassword) {
            console.error("Passwords do not match!");
            return;
        }

        const result = await signup(formData);

        if (result.success) {
            console.log('Signup successful, token:', result.token);
            navigate("/login");
        } else {
            console.error('Signup failed:', result.message);
            alert(result.message);
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
                height="100%"
                boxSizing="border-box"
            >

                <HStack spacing={0}
                        display="flex"
                        justifyContent="center"
                        flexWrap={{base: "wrap", md: "wrap", lg: "nowrap"}}
                        boxSizing="border-box"

                >
                    <Image
                        src={logo}
                    />

                    <Box
                        display="flex"
                        flexDirection="column"
                        padding={4}
                        alignItems={{base: "left", md: "left", lg: "left"}}
                        boxSizing="border-box"
                    >

                        {/*head of login section*/}
                        <Flex
                            display="block"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Box boxSize={10}
                                 bg="#FFC30D">

                            </Box>

                            <Text
                                fontSize="2xl"
                                fontWeight="bold"
                                color="#000000"
                            >
                                Register
                            </Text>

                            <Text
                                paddingTop={4}
                                fontSize="md"
                                color="#101540"
                                fontWeight="bold"
                            >
                                Manage all your inventory efficiently
                            </Text>

                            <Text
                                paddingTop={4}
                                fontSize="md"
                            >
                                Let's get you all set up so you can verify your personal account
                                and begin setting up your work profile
                            </Text>

                        </Flex>

                        {/*Input and buttons*/}
                        <form onSubmit={handleSubmit}>
                            <Flex display="flex"
                                  flexDirection={{base: "column", md: "column", lg: "row"}}
                                  flexWrap="wrap"
                                  paddingTop={8}
                                  boxSizing="border-box"
                            >

                                {inputFields.map((field, index) => (
                                    <Box width={{base: "100%", md: "70%", lg: "50%"}}
                                         key={index}
                                         padding={2}
                                    >
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
                                    </Box>
                                ))}


                            </Flex>
                            <Flex display="flex"
                                  justifyContent="center"
                                  flexDirection="column"
                                  paddingTop={2}
                                  width="100%"
                                  boxSizing="border-box">

                                <Checkbox
                                    variant="subtle"
                                    colorPalette="green"
                                    borderColor="#8F8F8F"
                                    colorScheme="green"
                                    borderRadius={1}
                                    size="md"
                                    paddingTop={2}
                                >
                                    I agree all terms, privacy policies, and fees
                                </Checkbox>


                                <Button
                                    type="submit"
                                    bg="#101540"
                                    borderRadius={10}
                                    marginTop={4}
                                    padding={8}
                                    color="white"
                                >
                                    Sign up
                                </Button>

                                <Text
                                    padding={4}>
                                    Already have account? {" "}
                                    <Link
                                        as={RouterLink}
                                        to="/login"
                                        variant="underline"
                                        href="https://chakra-ui.com"
                                        color="#101540"
                                        fontWeight="bold"
                                    >
                                        Log in
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
export default RegisterPage;