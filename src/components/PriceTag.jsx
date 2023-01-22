import { HStack, Text } from "@chakra-ui/react";
import React from "react";

function PriceTag({ price }) {
  return (
    <div style={{ display: "flex", marginLeft: "20px" }}>
      <Text>$ {price}</Text>
    </div>
  );
}

export default PriceTag;
