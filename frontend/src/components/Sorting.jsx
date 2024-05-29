import { HStack, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sorting = () => {
  const [searchParams, setSeacrhParams] = useSearchParams();
  const geturl = searchParams.getAll("category");
  const getsortdata = searchParams.get("_order");
  const [order, setOrder] = useState(getsortdata || "");
  const handleSort = (e) => {
    setOrder(e.target.name);
  };
  useEffect(() => {
    let params = {};
    if (geturl?.length > 0) {
      params.category = geturl;
    }
    if (order) {
      params._order = order;
    }
    setSeacrhParams(params);
  }, [order]);
  return (
    <HStack spacing={3} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"} p={3}>
      <Text fontSize="xl">Sort By Price:</Text>
      <RadioGroup>
        <Stack direction="row">
          <Radio
            name="asc"
            onChange={handleSort}
            isChecked={getsortdata === "asc"}
          >
            Low to High
          </Radio>
          <Radio
            name="desc"
            onChange={handleSort}
            isChecked={getsortdata === "desc"}
          >
            High to Low
          </Radio>
        </Stack>
      </RadioGroup>
    </HStack>
  );
};

export default Sorting;
