import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";

const User = ({ details, title, uservalue, handleDetails, handleSubmit }) => {
  return (
    <Flex justifyContent={"center"} height={"100vh"} alignItems={"center"}>
      <Flex
        minW={{ sm: "50%", lg: "30%", base: "90%" }}
        backgroundImage={"linear-gradient(1deg, #A100FFFF 0%, #71C4FFFF 100%)"}
        backgroundSize={"100% 100%"}
        backgroundPosition={"0px 0px"}
        color={"white"}
        flexDir={"column"}
        alignItems={"center"}
        p={8}
        borderRadius={10}
      >
        <Image
          borderRadius="full"
          boxSize="80px"
          src="https://i.pinimg.com/736x/0b/73/51/0b7351f7b132512ea28fae9d5fff1bde--triangle-logos-triangle-logo-design.jpg"
          alt="Dan Abramov"
        />
        <Heading>{title}</Heading>
        <FormControl isRequired mt={6}>
          {details.map((item, index) => {
            return (
              <Box key={index}>
                <FormLabel>{item}</FormLabel>
                <Input
                  value={uservalue[item]}
                  onChange={handleDetails}
                  name={item}
                />
              </Box>
            );
          })}

          <Flex justifyContent={"center"}>
            <Button
              mt={6}
              bg={"#FFFFFF"}
              type="submit"
              borderRadius={18}
              width="100px"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default User;

