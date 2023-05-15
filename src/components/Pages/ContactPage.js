import React from 'react'
import { Box, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <Box>
            <Heading>Contact</Heading>
        </Box>
    </motion.div>
  )
}

export default ContactPage