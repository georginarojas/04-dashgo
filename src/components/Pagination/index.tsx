import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

// Calculating the pages next to the current one
const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)] // blank array with to-from elements
    .map((_, index) => {
      // _ because is a blank element
      return from + index + 1;
    })
    .filter((page) => page > 0);
}
// OBS. The final array does not consider the position "from"
// ---------------------------------------------

export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  // type of formatting
  // firstPage ... beforePage - actualPage - nextPage ... lastPage

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  // ----------------------------------------------------------

  return (
    <Stack
      direction={["column", "row"]}
      marginTop="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {currentPage > siblingsCount + 1 && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange} />
            {currentPage > siblingsCount + 2 && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page, index) => {
            return (
              <PaginationItem
                key={index}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        <PaginationItem
          number={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPages.length > 0 &&
          nextPages.map((page, index) => {
            return (
              <PaginationItem
                key={index}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width={8} textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} onPageChange={onPageChange} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
