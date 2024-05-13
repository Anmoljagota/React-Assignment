import {
  Text,
  Flex,
  Box,
  useColorMode,
  Input,
  InputGroup,
  InputRightElement,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { cartItems } = useSelector((product) => {
    return product.Products;
  });
  console.log(colorMode,"colormode");
  return (
    <Box as="nav" bg={"#9F7AEA"} p={6}>
      <Flex
        w={"90%"}
        m={"auto"}
        justifyContent={"space-between"}
        alignItems={"center"}
        color={"white"}
        fontWeight={"bold"}
      >
        <Link to="/">
          {" "}
          <Text>Home</Text>
        </Link>
        <InputGroup size="md" bg={"white"} w={"50%"} borderRadius={"0.5rem"}>
          <Input pr="4.5rem" placeholder="search here.." />
          <InputRightElement width="4.5rem">
            <SearchIcon color={"black"} />
          </InputRightElement>
        </InputGroup>
        <Link to="/favourate">
          <Text>Wishlist</Text>
        </Link>
        <Flex
          fontSize={".8rem"}
          justifyContent={"center"}
          flexDir={"column"}
          alignItems={"center"}
        >
          <Center
            color="#2e2f32"
            bg={"#ffc220"}
            borderRadius={"100%"}
            width="18px"
            height="18px"
            fontSize="12px"
          >
            {cartItems.length > 0 ? cartItems.length : 0}
          </Center>
          <Link to={"/cart"}>
            <AiOutlineShoppingCart style={{ fontSize: "1.4rem" }} />
          </Link>
        </Flex>

        {colorMode === "light" ? (
          <MoonIcon
            onClick={toggleColorMode}
            cursor={"pointer"}
            fontSize={"1.3rem"}
          />
        ) : (
          <SunIcon
            onClick={toggleColorMode}
            cursor={"pointer"}
            fontSize={"1.3rem"}
          />
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
