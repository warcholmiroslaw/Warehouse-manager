import {FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";


const InputField = ({name, type = "text", placeholder, onChange, isRequired}) => {
    return (
        <FormControl id={name} isRequired={isRequired}>
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
        </FormControl>
    )
};

export default InputField;