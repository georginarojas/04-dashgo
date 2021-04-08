import React from "react";
import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { SiderBar } from "../components/SideBar";

// --- Chart config and import - start

/* react-apexcharts is only loaded on the browser side for this reason 
we need to configure the imports of this framework. For this, we use dynamic, 
this alow import modules or components dynamically and load  the import as a 
separate chunk */

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false, //server-side render disable to ensure the loading only the side browser
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: "series1", data: [47, 102, 45, 2, 36, 69, 100] }];

// --- Chart - end

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="20"
      >
        <SiderBar />

        {/* minChildWidth='320' The width at which child elements will break into columns. */}
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            padding="8"
            background="gray.800"
            borderRadius={8}
            paddingBottom="4"
          >
            <Text fontSize="lg" marginBottom="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
