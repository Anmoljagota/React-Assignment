import { Center, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const SinglePage = () => {
  const [data, setData] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      setData(state);
    } else {
    }
  }, []);
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
      >
        {data && <Image src={data.image} h={"200px"} w={"200px"} m={"auto"} />}
        <Text fontWeight={"bold"}>{data.title}</Text>
        <Text>{data.description}</Text>
        <Text fontWeight={"bold"}>Price: {data.price}</Text>
      </Flex>
    </Center>
  );
};

export default SinglePage;
