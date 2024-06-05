import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../components/Sidear";
import { GetProduct } from "../redux/Products/action";
import { Link, useSearchParams } from "react-router-dom";
import Sorting from "../components/Sorting";
import { FaHeart } from "react-icons/fa";
import { Skeleton } from "@chakra-ui/react";
import { ADDTOCART, Wishlist_SUCCESS } from "../redux/Products/actionTypes";
import { UserDetails } from "../redux/User/action";

const Home = () => {
  const { loading, products, wishlist, cartItems } = useSelector((product) => {
    return product.Products;
  });
  const [bg, setBg] = useState("");
  const [searchParams] = useSearchParams();
  const [limit, setLimit] = useState(10);
  const [check, setCheck] = useState(wishlist.length > 0 ? wishlist : []);
  const [page, setPage] = useState(1);
  const orderurl = searchParams.get("_order");
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length === 0 || location) {
      const changedata = {
        params: {
          category: searchParams.getAll("category"),
          _sort: orderurl && "price",
          _order: orderurl,
        },
      };
      dispatch(GetProduct(limit));
      dispatch(UserDetails());
    }
  }, [location.search]);

  const handleWishList = (e, product) => {
    e.preventDefault();
    const updateWishlist = [...wishlist];
    // console.log(updateWishlist);
    if (updateWishlist.includes(product)) {
      updateWishlist.splice(updateWishlist.indexOf(product), 1);
    } else {
      updateWishlist.push(product);
    }
    // setCheck(newcheck.id);
    dispatch({ type: Wishlist_SUCCESS, payload: updateWishlist });
  };

 
  return (
    <Flex w={"92%"} m={"auto"} justifyContent={"space-between"} minH="88vh">
      <Box w={"20%"}>
        <SideBar />
      </Box>
      <Box w={"75%"}>
        <Sorting />
        <Skeleton isLoaded={!loading}>
          <SimpleGrid columns={[1, 2, 4]} spacing={5} p={3} mt={5}>
            {products.length > 0 &&
              products.slice(page * limit - limit, page * limit).map((ele) => (
                <Link
                  to={`/detail/${ele._id}`}
                  key={ele._id}
                  state={ele}
                  style={{ color: "black" }}
                >
                  <Box
                    textAlign={"center"}
                    p={2}
                    boxShadow={
                      "0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)"
                    }
                    cursor={"pointer"}
                    height={"350px"}
                    position={"relative"}
                  >
                    <FaHeart
                      style={{
                        position: "absolute",
                        right: "5",
                        fontSize: "1.5rem",
                        color: `${check.includes(ele) ? "red" : "white"}`,
                        border: "1px solid black",
                        borderRadius: "40%",
                      }}
                      onClick={(e) => handleWishList(e, ele)}
                    />
                    <Image
                      src={ele.image}
                      alt="product"
                      height={"50%"}
                      w={"90%"}
                      m={"auto"}
                    />
                    <Text fontSize="sm" mt={3}>
                      {ele.title}
                    </Text>
                    <Heading as={"h6"} size={"sm"} mt={2}>
                      price: {ele.price}
                    </Heading>
                    {/* <WrapItem
                      gap={"15px"}
                      position={"absolute"}
                      bottom={"8"}
                      right={1}
                    >
                      <Button
                        colorScheme="yellow"
                        size={"sm"}
                        onClick={(e) => AddToCart(e, ele)}
                      >
                        Add To Cart
                      </Button>
                      <Button colorScheme="yellow" size={"sm"}>
                        Buy now
                      </Button>
                    </WrapItem> */}
                  </Box>
                </Link>
              ))}
          </SimpleGrid>
          <Center>
            <span style={{ fontSize: "1.5rem" }}>◀</span>
            {new Array(Math.ceil(products.length / limit))
              .fill("")
              .map((ele, index) => {
                return (
                  <span
                    style={{
                      border: "1px solid black",
                      padding: "0.5rem 1rem",
                      cursor: "pointer",
                      background: index === bg ? "gray" : "",
                    }}
                    key={index}
                    onClick={() => {
                      setPage(index + 1), setBg(index);
                    }}
                  >
                    {index + 1}
                  </span>
                );
              })}
            <span style={{ fontSize: "1.5rem" }}>▶</span>
          </Center>
        </Skeleton>
      </Box>
    </Flex>
  );
};

export default Home;
