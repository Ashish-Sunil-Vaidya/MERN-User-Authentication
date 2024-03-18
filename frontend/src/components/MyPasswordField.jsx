import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";



const MyPasswordField = ({
  placeholder,
  label,
  value,
  onChange,
  error,
}) => {
  const [show, setShow] = useState(false);
  const handleMouseUp = () => setShow(false);
  const handleMouseDown = () => setShow(true);

  return (
    <FormControl isRequired>
      <FormLabel fontSize="sm" margin="0">
        {label}
      </FormLabel>
      <InputGroup>
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          isInvalid={!value && error}
        />
        <InputRightElement>
          <IconButton
            aria-label="toggle password visibility"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            size="md"
            colorScheme="blue"
            variant="ghost"
            icon={show ? <FaEyeSlash /> : <FaEye />}
          />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};
export default MyPasswordField;
