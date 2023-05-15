import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
} from "@/components/ChakraComponents/Client";
import { SocialIcon } from "react-social-icons";
//config import
import portfolioInfo from "@/config";
let date = new Date();
let currentYear = date.getFullYear();

const githubUrl = portfolioInfo.socialLinks.socialGithub;
const facebookUrl = portfolioInfo.socialLinks.socialFacebook;
const LikedinUrl = portfolioInfo.socialLinks.socialLinkedin;
const mailUrl = portfolioInfo.socialLinks.socialMail;

function Footer({ grad1Color = "#339af0", grad2Color = "#4949f3" }) {

  const gradient = `linear(to-l, ${grad1Color}, ${grad2Color})`;
  return (
    <>
      <Box display={'flex'} flexDir={'column'} bg={'#339af0'} padding={20}>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={[5, 5, 10, 50]}
        padding={10}
        gridRowEnd={'auto'}
        color={"#ffffff"}
      >
        <Box display={"flex"} flexDir={"column"}>
          <Heading fontSize={[18,18,22,24]}>Afshin Nahian Tripto</Heading>
          <Text mt={2}>✅ Be the change</Text>
          <Text>
            All rights reserved by: Afshin Nahian Tripto {currentYear}
          </Text>
        </Box>
        <Box display={"flex"} flexDir={"column"}>
          <Text fontSize={16} fontWeight={'semibold'}>🏡 Address</Text>
          <Text>Dhaka, Bangladesh</Text>
        </Box>
        <Box display={"flex"} flexDir={"column"} mb={5}>
          <Text fontSize={16} fontWeight={'semibold'}>👀 Follow Me</Text>
          <Box display={"flex"} flexDir={"row"} mt={2}>
            <SocialIcon
              url={githubUrl}
              bgColor={"#ffffff"}
              style={{ marginRight: 10 }}
            />
            <SocialIcon
              url={LikedinUrl}
              bgColor={"#ffffff"}
              style={{ marginRight: 15 }}
            />
            <SocialIcon
              url={facebookUrl}
              bgColor={"#ffffff"}
              style={{ marginRight: 15 }}
            />
            <SocialIcon
              url={mailUrl}
              bgColor={"#ffffff"}
              style={{ marginRight: 15 }}
            />
          </Box>
        </Box>
      </Grid>
      <Text textAlign={'center'} mb={5} color={"#ffffff"} mt={20}> Made with 💝 by Afshin Nahian Tripto</Text>
      </Box>
    </>
  );
}

export default Footer;
