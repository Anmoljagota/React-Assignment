import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const [searchParams, setSeacrhParams] = useSearchParams();
  var checkurl = searchParams.getAll("category");
  const getsortdata = searchParams.get("_order");
  const [value, setValue] = useState(checkurl.length > 0 ? checkurl : "");
  const handleChange = (e) => {
    const category = [...value];
    if (category.includes(e.target.value)) {
      category.splice(category.indexOf(e.target.value), 1);
    } else {
      category.push(e.target.value);
    }
    setValue(category);
  };
  useEffect(() => {
    const params = {};
    if (value) {
      params.category = value;
    }
    if (getsortdata) {
      params._order = getsortdata;
    }
    setSeacrhParams(params);
  }, [value]);
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Filter
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          pb={4}
          display={"flex"}
          flexDir={"column"}
          gap={"0.5rem"}
        >
          <Checkbox
            value={"men's clothing"}
            onChange={handleChange}
            isChecked={checkurl.includes("men's clothing")}
          >
            Men's Clothing
          </Checkbox>
          <Checkbox
            value={"women's clothing"}
            onChange={handleChange}
            isChecked={checkurl.includes("women's clothing")}
          >
            Women's Clothing
          </Checkbox>
          <Checkbox
            value={"electronics"}
            onChange={handleChange}
            isChecked={checkurl.includes("electronics")}
          >
            Electronics
          </Checkbox>
          <Checkbox
            value={"jewelery"}
            onChange={handleChange}
            isChecked={checkurl.includes("jewelery")}
          >
            Jewelery
          </Checkbox>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default SideBar;
