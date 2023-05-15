"use client";
import React from "react";
import { Box, Heading, useColorMode, Image, Text, Grid } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import Link from 'next/link';

import { FaLinux } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  SiJavascript,
  SiReact,
  SiGithub,
  SiNextdotjs,
  SiTypescript
} from "react-icons/si";
//config import
import portfolioInfo from "@/config";

import {
    FloatLeftWrapper,
    FloatRightWrapper,
  } from "../../../Navbar/Navbar.style";
// import ParticleComponent from "../ParticleComponent";

const githubUrl = portfolioInfo.socialLinks.socialGithub;
const facebookUrl = portfolioInfo.socialLinks.socialFacebook;
const LikedinUrl = portfolioInfo.socialLinks.socialLinkedin;
const mailUrl = portfolioInfo.socialLinks.socialMail;

function HeroSection() {
  const { colorMode } = useColorMode();

  return (
    <Box
      background={colorMode === "dark" ? "#2d2f33" : "#fafafb"}
      paddingTop={[5, 5, 5, 10]}
      paddingBottom={[10, 10, 10, 20]}
      display={"flex"}
      flexDir={"row"}
      justifyContent={"space-evenly"}
    >
        {/* <ParticleComponent onCLick={true} onHover={false} speed={1.5} desktopAmount={20} mobileAmmount={10} area={900}/> */}
      <Box display={"flex"} flexDir={"row"} mt={[0,0,0,5]}>
      <FloatLeftWrapper >
        <Image
          src={'/dev_new.jpg'}
          alt="Afshin Nahian Tripto"
          width={["90vw", "350px", "300px", "400px"]}
          height={["auto", "400px", "300px", "400px"]}
          borderRadius={"50%"}
          display={["none", "none", "none", "block"]}
        />
        </FloatLeftWrapper>
        <FloatRightWrapper >
        <Box display={"flex"} flexDir={"column"} ml={5} mt={10}>
          <Box display={"flex"} flexDir={"row"}>
            <SocialIcon
              url={githubUrl}
              bgColor={colorMode === "dark" ? "#ffffff" : "#21a366"}
              style={{ marginRight: 10 }}
            />
            <SocialIcon
              url={LikedinUrl}
              bgColor={colorMode === "dark" ? "#ffffff" : "#21a366"}
              style={{ marginRight: 15 }}
            />
            <SocialIcon
              url={facebookUrl}
              bgColor={colorMode === "dark" ? "#ffffff" : "#21a366"}
              style={{ marginRight: 15 }}
            />
            <SocialIcon
              url={mailUrl}
              bgColor={colorMode === "dark" ? "#ffffff" : "#21a366"}
              style={{ marginRight: 15 }}
            />
          </Box>
          <Heading mt={5}>Hi, I am Afshin Nahian Tripto</Heading>
          <Text mt={2}>Webdeveloper || Student || Learner</Text>
          <Text mt={5} lineHeight={2} mr={[2, 2, 10, 10]}>
            {" "}
            I’m a{" "}
            <Text
              display={"inline"}
              ml={1}
              mr={1}
              background={"#4949f3"}
              color={colorMode === "dark" ? "#f3f3f4" : "#f3f3f4"}
            >
              fullstack web developer
            </Text>{" "}
            and an engineering student who is passionate about tech and loves to
            learn. <br />
            I am a firm believer of
            <Text
              display={"inline"}
              ml={2}
              background={"#4949f3"}
              color={colorMode === "dark" ? "#f3f3f4" : "#f3f3f4"}
            >
              Change starts from you
            </Text>
          </Text>
          <Grid templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(5, 1fr)']} gap={4} mt={5} mr={10}>
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                JavaScript
              </Text>
              <SiJavascript size="22" color={"#FFFFFF"} />
            </Box>
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                TypeScript
              </Text>
              <SiTypescript size="22" color={"#FFFFFF"} />
            </Box>
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                React
              </Text>
              <SiReact size="24" color={"#FFFFFF"} />
            </Box>
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                Next JS
              </Text>
              <SiNextdotjs size="24" color={"#FFFFFF"} />
            </Box>
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"} color={"#FFFFFF"}>
                Node
              </Text>
              <FaNodeJs size="24" color={"#FFFFFF"} />
            </Box>
            {/* <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                Wordpress
              </Text>
              <FaWordpress size="24" color={"#FFFFFF"} />
            </Box> */}
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                MySQL
              </Text>
              <GrMysql size="24" color={"#FFFFFF"} />
            </Box>
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                Git
              </Text>
              <SiGithub size="24" color={"#FFFFFF"} />
            </Box>
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"black"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                Linux
              </Text>
              <FaLinux size="24" color={"#FFFFFF"} />
            </Box>
            <Link href="/skills">
            <Box
              borderRadius={20}
              minWidth={"130px"}
              maxWidth={"150px"}
              height={"40px"}
              background={"#4949f3"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              mr={2}
              as={'a'}
              href='/skills'
            >
              <Text fontSize={14} fontWeight={"bold"}color={"#FFFFFF"}>
                More
              </Text>
              <BsFillArrowUpRightCircleFill size="24" color={"#FFFFFF"} />
            </Box>
            </Link>
          </Grid>
        </Box>
        </FloatRightWrapper>
      </Box>
    </Box>
  );
}

export default HeroSection;
