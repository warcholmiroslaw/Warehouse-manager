import React, {useState} from 'react';
import {Box, Button, Checkbox, Flex, HStack, Image, Link, Text} from "@chakra-ui/react";
import logo from "../images/logo.png";
import InputField from "../components/InputField";
import {useNavigate} from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {signup} from "../services/authService";


const RegisterPage = () => {

    // send to server
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        roleId: 2

    });

    // errors state for inputs
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    });

    // inputs configuration
    const inputFields = [
        { name: "firstName", type: "text", placeholder: "Enter name", isRequired: true},
        { name: "lastName", type: "text", placeholder: "Enter lastname", isRequired: true},
        { name: "email", type: "email", placeholder: "Enter email", isRequired: true},
        { name: "password", type: "password", placeholder: "Enter password", isRequired: true},
        { name: "confirmPassword", type: "password", placeholder: "Confirm password", isRequired: true},
    ];

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Reset error when user types
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        const newErrors = {
            email: !formData.email,
            password: !formData.password,
            confirmPassword: formData.password !== formData.confirmPassword
        };

        setErrors(newErrors);

        // If there are errors, stop form submission
        if (Object.values(newErrors).some((error) => error)) {
            return;
        }

        const result = await signup(formData);

        if (result.success) {
            console.log('Sign up successful');
            navigate("/login");
        } else {
            console.error('Sign up failed:', result.message);
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
                                            isInvalid={errors[field.name]}
                                            errorMessage={
                                                field.name === "confirmPassword" && errors.confirmPassword
                                                    ? "Passwords do not match"
                                                    : field.name === "email" && errors.email
                                                        ? "Email is required"
                                                        : field.name === "password" && errors.password
                                                            ? "Password is required"
                                                            : ""
                                            }
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