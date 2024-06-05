import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { AddToCart } from "../redux/Products/action";
import { LoginDrawer } from "./LoginDrawer";
const SinglePage = () => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const { state } = useLocation();
  const checkuser = useSelector((data) => data.Products.cartItems);
  console.log(checkuser, "check");
  useEffect(() => {
    if (state) {
      setData(state);
      if (checkuser?.message === "login first") {
        onOpen();
      }
    } else {
    }
  }, [checkuser]);

  const AddProduct = (productId) => {
    dispatch(AddToCart(productId));
  };
  return (
    <Center minH={"89vh"}>
      <Flex
        flexDir={"column"}
        gap={2}
        w={"50%"}
        textAlign={"center"}
        boxShadow={
          "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        }
        p={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {data && <Image src={data.image} h={"200px"} w={"200px"} m={"auto"} />}
        <Text fontWeight={"bold"}>{data.title}</Text>
        <Text>{data.description}</Text>
        <Text fontWeight={"bold"}>Price: {data.price}</Text>
        <Button
          colorScheme="yellow"
          size={"sm"}
          w={"25%"}
          onClick={() => AddProduct(data._id)}
        >
          Add To Cart
        </Button>
        <LoginDrawer isOpen={isOpen} onClose={onClose} />
      </Flex>
    </Center>
  );
};

export default SinglePage;
