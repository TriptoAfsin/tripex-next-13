"use client";
import React from "react";
import { Spinner, Box } from "@chakra-ui/react";

function CustomSpinner() {
  return (
    <Box display={'flex'} flexDir={'column'} justifyContent={'center'} alignItems={'center'} mt={10} mb={[200,200,300,350]}>
      <Spinner
        thickness="10px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#4949f3"
        boxSize={120}
        zIndex={5000}
      />
    </Box>
  );
}

export default CustomSpinner;
