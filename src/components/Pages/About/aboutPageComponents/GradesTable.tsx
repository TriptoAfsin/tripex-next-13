import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@/components/ChakraComponents/Client";

function GradesTable() {
  return (
    <Box>
      <TableContainer>
        <Table size={["sm","sm","md", "mg"]}>
          <Thead>
            <Tr>
              <Th>Degree</Th>
              <Th>Institute</Th>
              <Th>Grade</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>SSC</Td>
              <Td>ACPS (Dhaka)</Td>
              <Td>GPA 5.0</Td>
            </Tr>
            <Tr>
              <Td>HSC</Td>
              <Td>SPSC (Dhaka)</Td>
              <Td>GPA 5.0</Td>
            </Tr>
            <Tr>
              <Td>BSc</Td>
              <Td><a href="https://www.butex.edu.bd/" target={"_blank"} style={{color: "#3592f0"}} rel="noreferrer">BUTEX (Dhaka)</a></Td>
              <Td >GPA 3.73*</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default GradesTable;
