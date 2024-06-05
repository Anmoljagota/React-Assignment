import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Box,
  Center,
} from "@chakra-ui/react";
const Favourate = ({ items, text }) => {
  return (
    <Box>
      {items.length === 0 ? (
        <Center mt={20}>Nothing here..</Center>
      ) : (
        <TableContainer>
          <Table variant="simple">
            <TableCaption placement="top">{text}</TableCaption>
            <Thead>
              <Tr>
                <Th>
                  <Th>Image</Th>
                </Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {items?.map((item) => {
                return (
                  <Tr>
                    <Td>
                      {" "}
                      <Image src={item.image} boxSize={"50px"} />
                    </Td>
                    <Td>{item.title}</Td>
                    <Td>{item.category}</Td>
                    <Td>{item.price}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Favourate;
