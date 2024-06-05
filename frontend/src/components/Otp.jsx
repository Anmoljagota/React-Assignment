import {
  Flex,
  HStack,
  Heading,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/User/action";
const Otp = () => {
  const dispach = useDispatch();
  const inputref = [useRef(), useRef(), useRef(), useRef()];
  const id = useRef(null);
  useEffect(() => {
    inputref[0].current.focus();
  }, []);
  const handleChange = (e, i) => {
    clearTimeout(id.current);
    const checkotp =
      inputref[0].current.value +
      inputref[1].current.value +
      inputref[2].current.value +
      inputref[3].current.value;
    if (i === 3 || (e.code !== "Backspace" && checkotp.length === 4)) {
      id.current = setTimeout(() => {
        dispach(
          LoginUser({
            otp: checkotp,
          })
        );
      }, 2000);
    }
  };

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      maxH={"100vh"}
      h={"100vh"}
    >
      <EmailIcon color={"#9241D9"} fontSize={"4rem"} />
      <Flex
        direction={"column"}
        gap={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Heading as="h2" size="lg" mt={10}>
          OTP Verification
        </Heading>
        <Text>Enter the otp sent to mail</Text>
        <HStack>
          <PinInput>
            {inputref.map((input, i) => (
              <PinInputField
                ref={input}
                key={i}
                // onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleChange(e, i)}
              />
            ))}
          </PinInput>
        </HStack>
        <Text color={"#9241D9"} fontWeight={600}>
          Resend OTP
        </Text>
      </Flex>
    </Flex>
  );
};

export default Otp;
