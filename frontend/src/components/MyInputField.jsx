import { Input, FormControl, FormLabel } from "@chakra-ui/react";


const MyInputField = ({
  placeholder,
  label,
  value,
  onChange,
  error,
}) => {
  return (
    <FormControl isRequired>
      <FormLabel margin="0" fontSize="sm">
        {label}
      </FormLabel>
      <Input
        type="email"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isInvalid={!value && error}
        required
      />
    </FormControl>
  );
};
export default MyInputField;
