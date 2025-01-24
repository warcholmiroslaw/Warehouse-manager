import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    InputGroup
} from "@chakra-ui/react";


const InputField = ({name, type = "text", placeholder, onChange, isRequired, isInvalid, errorMessage}) => {
    return (
        <FormControl id={name}
                     isRequired={isRequired}
                     isInvalid={isInvalid}
        >
            <FormLabel
            color = "#101540"
            >
                {name}
            </FormLabel>
            <InputGroup>
                <Input name = {name}
                       type={type} placeholder={placeholder}
                       onChange = {onChange}
                       bg = "#EDF0F2"
                       borderColor = "#8F8F8F"
                />
            </InputGroup>
            { isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
        </FormControl>
    )
};

export default InputField;