"use client";
import React from "react";
import {
  Box,
  Heading,
  useColorMode,
  Image,
  Text,
  Grid,
  IconButton,
  Button,
} from "@chakra-ui/react";
import Link from 'next/link';

import {
  FloatInWrapper,
  LoaderSpinner1,
} from "@/components/Navbar/Navbar.style";

import { AiOutlineLink } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";
import { useFetchProjects } from "@/hooks/queryHooks/useFetchProjects";
// //config import
// import portfolioInfo from "../../../config";

function ProjectSection() {
  const { colorMode } = useColorMode();

  const { isLoading, data } = useFetchProjects();


  let CardComponent = ({
    cardCoverImg = "https://i.postimg.cc/fLCwxKFs/BXgNgb6.png",
    title = "BUTEX NoteBOT",
    body = "BUTEX NoteBOT",
    tags = ["react", "node"],
    link = "https://github.com/TriptoAfsin/notebot-engine-v1",
    id = 1,
  }) => {
    return (
      <FloatInWrapper>
        <Box
          width={["90vw", "300px", "300px", "300px"]}
          maxWidth={"320px"}
          key={id}
          boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.5)"}
          background={colorMode === "dark" ? "#2d2f33" : "#fafafb"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={10}
        >
          <Image
            src={cardCoverImg}
            alt={title}
            width={["100%", "100%", "100%", "100%"]}
            height={["auto", "auto", "150px", "150px"]}
            borderRadius={10}
            display={["block", "block", "block", "block"]}
          />
          <Text mt={2} fontWeight={"semibold"} padding={2} ml={2}>
            {title}
          </Text>
          <Text padding={2} ml={2} height={"100px"}>
            {body}
          </Text>
          <Box display={"flex"} flexDir={"row"} justifyContent={"space-around"}>
            <Grid
              templateColumns={[
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
                "repeat(4, 1fr)",
                "repeat(4, 1fr)",
              ]}
              gap={4}
              mt={3}
              mr={[0, 0, 5, 5]}
              mb={5}
              padding={2}
              ml={[0, 0, 2, 2]}
            >
              {tags.map(item => (
                <Text
                  key={item}
                  paddingTop={1}
                  paddingBottom={1}
                  paddingLeft={2}
                  paddingRight={2}
                  background={"#4949f3"}
                  color={"white"}
                  borderRadius={10}
                  textAlign={"center"}
                  fontSize={14}
                >
                  {item}
                </Text>
              ))}
            </Grid>

            <IconButton
              as={"a"}
              href={link}
              background={"#21a366"}
              aria-label="link"
              borderRadius={"50%"}
              boxShadow={"0px 10px 15px -3px rgba(0,0,0,0.1)"}
              minWidth={"50px"}
              height={["50px", "50px", "50px", "50px"]}
              icon={<AiOutlineLink size="24" color={"#FFFFFF"} />}
              mt={3}
              mr={3}
            />
          </Box>
        </Box>
      </FloatInWrapper>
    );
  };

  return (
    <Box
      background={colorMode === "dark" ? "#ffa500" : "#ffa500"}
      paddingTop={[5, 5, 5, 10]}
      paddingBottom={[10, 10, 10, 20]}
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading
        textAlign={"center"}
        color={colorMode === "dark" ? "#fafafb" : "#fafafb"}
      >
        Projects
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
        mt={10}
        mr={[0, 0, 5, 5]}
      >
        {isLoading || !data?.data ? (
          <LoaderSpinner1 />
        ) : data?.data.length > 4 ? (
          <>
            {data?.data?.slice(0, 4).map((item: any) => (
              <CardComponent
                key={item.id}
                id={item.id}
                cardCoverImg={item.img}
                title={item.name}
                body={item.about}
                tags={item.techUsed}
                link={item.link}
              />
            ))}
          </>
        ) : (
          <>
            {data?.data?.map((item: any) => (
              <CardComponent
              key={item.id}
                id={item.id}
                cardCoverImg={item.img}
                title={item.name}
                body={item.about}
                tags={item.techUsed}
                link={item.link}
              />
            ))}
          </>
        )}
      </Grid>
      {
        data && data?.data?.length > 4 ? (
          <Box display={"flex"} alignItems={"center"} flexDir={"column"} mt={[10,10,16,20]}>
          <Link href="/projects">
            <Button
              color={colorMode === "dark" ? "white" : "white"}
              borderRadius={16}
              background={"black"}
              padding={8}
              _hover={{ background: "#2d2f33" }}
              leftIcon={<HiPlusCircle size="24" color={"#FFFFFF"} />}
            >
              View More
            </Button>
          </Link>
        </Box>
        ): null
      }
    </Box>
  );
}

export default ProjectSection;
