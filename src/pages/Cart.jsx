import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import CartItem from "../components/CartItem";
import CartOrderSummary from "../components/CartOrderSummary";
import Navbar from "../components/Home/navbar/Navbar";

function Cart() {
  const [cartItem, setCartItem] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get(
        `https://63cbafba9b72d2a88e005571.mockapi.io/cart`
      );
      setCartItem(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let sum = 0;
  cartItem.forEach((item) => {
    sum += item.price * item.quantity;
  });

  return (
    <div>
      <Navbar />
      <Box
        maxW={{
          base: "3xl",
          lg: "7xl",
        }}
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartItem.length})
            </Heading>

            <Stack spacing="6">
              {cartItem.map((item) => (
                <CartItem key={item.id} {...item} getdata={getData} />
              ))}
            </Stack>
          </Stack>

          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary total={sum} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link color={mode("blue.500", "blue.200")}>
                Continue shopping
              </Link>
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </div>
  );
}

export default Cart;
