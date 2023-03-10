import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Icon,
  chakra,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";

function MenProductCard({
  id,
  title,
  price,
  image,
  brand,
  rating,
  categories,
  actualPrice,
  description,
}) {
  const sendData = async () => {
    try {
      let res = await axios.post(
        `https://63cbafba9b72d2a88e005571.mockapi.io/cart`,
        {
          id: id,
          title: title,
          price: actualPrice,
          image: image,
          description: description,

          rating: rating,
        }
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Center py={12}>
        <RouterLink
          className="links"
          to={`/productDetails/${id}`}
          style={{ textDecoration: "none" }}
        >
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `url(${image})`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={image}
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                {brand}
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {rating}
              </Heading>
              <Stack direction={"row"} align={"center"} justify={"right"}>
                <Text fontWeight={800} fontSize={"xl"}>
                  $ {price}
                </Text>
                <Text textDecoration={"line-through"} color={"gray.600"}>
                  $ {actualPrice}
                </Text>
              </Stack>
            </Stack>
            <Stack align={"center"}>
              <Button
                onClick={sendData}
                colorScheme="teal"
                color="white"
                size="md"
                mt="10px"
                align={"center"}
              >
                Add to Cart
              </Button>
            </Stack>
          </Box>
        </RouterLink>
      </Center>
    </div>
  );
}

export default MenProductCard;
