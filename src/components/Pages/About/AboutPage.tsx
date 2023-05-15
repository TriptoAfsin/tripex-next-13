import React from "react";
import { Box, Image, Heading, Text } from "@/components/ChakraComponents/Client";
import GradesTable from "./aboutPageComponents/GradesTable";
import {
  FloatLeftWrapper,
  FloatRightWrapper,
  FloatInWrapper,
} from "@/components/Navbar/Navbar.style";

function AboutPage() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        mt={5}
        flexDir={["column", "column", "column", "row"]}
        lineHeight={2}
        alignItems={"center"}
      >
        <FloatLeftWrapper>
          <Box>
            <Image
              src={"/dev.webp"}
              alt="Afshin Nahian Tripto"
              width={["80vw", "80vw", "350px", "350px"]}
              height={"auto"}
              borderRadius={"50%"}
            />
          </Box>
        </FloatLeftWrapper>
        <FloatRightWrapper>
          <Box display={"flex"} flexDir={"column"} ml={[5, 0, 8, 10]}>
            <Heading
              fontSize={30}
              mb={5}
              textAlign={["center", "center", "left", "left"]}
              mt={[5, 5, 0, 0]}
            >
              A Curious Soul
            </Heading>
            <Text>
              The joy of learning always fascinated me, from my early age I was
              introduced with computers 💻
            </Text>
            <Text>
              And I always wanted to make things do things, things that are
              useful and most importantly impactful
            </Text>
            <Text>
              <Text
                display={"inline"}
                mr={2}
                background={"#4949f3"}
                color={"#f3f3f4"}
              >
                2015 was the year when I was first introduced to programming
              </Text>
              , and from that time I learnt and tried to make meaningful stuff
              from my learning
            </Text>
            <Text>
              After my <b>HSC(2017)</b>, I got admitted to <b>BUTEX(2018)</b>,
              and in that same year{" "}
              <Text
                display={"inline"}
                mr={2}
                background={"#4949f3"}
                color={"#f3f3f4"}
              >
                I made an educational content delivering chatbot named
                <a href="https://github.com/TriptoAfsin/notebot-engine-v1">
                  &quot;BUTEX NoteBOT&quot;
                </a>
              </Text>
            </Text>
            <Text>
              And through this period of time it has served more than{" "}
              <Text
                display={"inline"}
                mr={2}
                background={"#4949f3"}
                color={"#f3f3f4"}
              >
                5,000 students
              </Text>{" "}
              with their study
            </Text>
          </Box>
        </FloatRightWrapper>
      </Box>
      <FloatInWrapper>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading fontSize={[20, 20, 24, 28]} mb={10} mt={10}>
            Educational Background
          </Heading>
          <Box maxW={"450px"} mb={10} width={"90vw"}>
            <GradesTable />
          </Box>
        </Box>
      </FloatInWrapper>
      <FloatInWrapper>
        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={5}
          padding={2}
          lineHeight={2}
        >
          <Heading fontSize={[20, 20, 24, 28]} mb={5} mt={5}>
            Hobbies
          </Heading>
          <Text mb={2} ml={2}>
            I am a PC enthusiast and a huge fan of cricket🏏, I also watch a lot
            of movies and TV series -{" "}
          </Text>
          <>
            <Text>🎥Movies: Batman Trilogy, Shawshank Red..</Text>
            <Text>📺TV Series: GOT, Narcos, Silicon Valley</Text>
            <Text>🎮Video Games: Witcher 3, RDR2, Valorant</Text>
          </>
        </Box>
      </FloatInWrapper>
    </>
  );
}

export default AboutPage;
