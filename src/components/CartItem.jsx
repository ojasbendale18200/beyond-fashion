import {
  CloseButton,
  Flex,
  Heading,
  Link,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import CartProductMeta from "./CartProductMeta";
import PriceTag from "./PriceTag";

function CartItem({
  id,
  title,
  price,
  description,
  image,
  off_price,
  quantity,
  getdata,
}) {
  const handleRemove = (id) => {
    return axios.delete(
      `https://63cbafba9b72d2a88e005571.mockapi.io/cart/${id}`
    );
  };

  const deleteItem = (id) => {
    handleRemove(id);
    getdata();
  };
  return (
    <div>
      <Flex
        direction={{
          base: "column",
          md: "row",
        }}
        justify="space-between"
        align="center"
      >
        <CartProductMeta
          name={title}
          description={description}
          image={image}
          quantity={quantity}
        />

        {/* Desktop */}
        <Flex
          width="40%"
          justify="space-between"
          display={{
            base: "none",
            md: "flex",
          }}
          alignItems="center"
        >
          <Stack>
            <Heading size="sm">Qty</Heading>
            <Text>{quantity}</Text>
          </Stack>

          <PriceTag price={price} currency="$" />
          <CloseButton
            aria-label={`Delete ${title} from cart`}
            onClick={() => deleteItem(id)}
          />
        </Flex>

        {/* Mobile */}
        <Flex
          mt="4"
          align="center"
          width="full"
          justify="space-between"
          display={{
            base: "flex",
            md: "none",
          }}
        >
          <Link fontSize="sm" textDecor="underline">
            Delete
          </Link>

          <PriceTag price={price} currency="$" />
        </Flex>
      </Flex>
    </div>
  );
}

export default CartItem;
