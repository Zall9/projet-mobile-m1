import { Box } from "@chakra-ui/react";
import React from "react";

const Inventory = (props) => {
  const SIZE = 4;
  const inventory = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];
  console.log("inventory", inventory);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {inventory.map((item, index) => {
        return (
          <Box
            key={item.id + index}
            sx={{
              position: "relative",
            }}
          >
            <Box
              width="54px"
              bg="tomato"
              h="54px"
              sx={{
                float: "left",
                margin: "2px",
                borderColor: "black",
                borderWidth: "1px",
              }}
            ></Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Inventory;
