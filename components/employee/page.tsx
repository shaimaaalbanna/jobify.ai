import { Space, Card, Flex, SimpleGrid, Button } from "@mantine/core";
import {
  IconBriefcaseFilled,
  IconUserPlus,
  IconUserCheck,
  IconSquareFilled,
  IconClockHour3Filled,
  IconCalendar,
} from "@tabler/icons-react";
import React from "react";

const EmployeePage = () => {
  return (
    <>
      <Card mr={120} shadow="sm" radius="md">
        <Flex justify="space-between" align="center">
          <h1 className="font-bold">Upcoming Interviews</h1>
          <h2 className="text-blue-700">View all</h2>
        </Flex>

        <SimpleGrid cols={3} spacing="lg">
          {["BIM Manager", "BIM Manager", "BIM Manager"].map((job, index) => (
            <Card key={index} bg="#fafbf8" shadow="sm" radius="lg" withBorder>
              <Flex direction="column" p="md">
                <Flex align="center" mb={8}>
                  <IconBriefcaseFilled
                    style={{
                      color: "#1d4ed8",
                      fontSize: "1.5rem",
                      marginRight: "8px",
                    }}
                  />
                  <h1 style={{ margin: 0 }}>{job}</h1>
                </Flex>
                <Flex align="center" mb={8}>
                  <IconUserPlus
                    style={{
                      color: "#1d4ed8",
                      fontSize: "1.25rem",
                      marginRight: "8px",
                    }}
                  />
                  <h2 style={{ margin: 0 }}>Dicotra Tech Ltd</h2>
                </Flex>
                <Flex align="center" mb={8}>
                  <IconUserCheck
                    style={{
                      color: "#1d4ed8",
                      fontSize: "1.25rem",
                      marginRight: "8px",
                    }}
                  />
                  <h3 style={{ margin: 0 }}>Deadline : 25-07-24</h3>
                </Flex>
                <Flex align="center" mb={8}>
                  <IconSquareFilled
                    style={{
                      color: "#10b981",
                      fontSize: "1.25rem",
                      marginRight: "8px",
                    }}
                  />
                  <h4 style={{ margin: 0 }}>Duration:45 mins</h4>
                </Flex>
                <Flex align="left">
                  <Button> Start Now</Button>
                </Flex>
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Card>

      <Space mt={10} h="md" />

      <Card mr={120} shadow="sm" radius="md">
        <Flex justify="space-between" align="center">
          <h1 className="font-bold">Recommended Jobs</h1>
          <h2 className="text-blue-700">View all</h2>
        </Flex>

        <SimpleGrid cols={4} spacing="lg">
          {["BIM Manager", "BIM Manager", "BIM Manager", "BIM Manager"].map(
            (job, index) => (
              <Card key={index} bg="#fafbf8" shadow="sm" radius="lg" withBorder>
                <Flex direction="column" p="md">
                  <Flex align="center" mb={8}>
                    <IconBriefcaseFilled
                      style={{
                        color: "#1d4ed8",
                        fontSize: "1.5rem",
                        marginRight: "8px",
                      }}
                    />
                    <h1 style={{ margin: 0 }}>{job}</h1>
                  </Flex>
                  <Flex align="center" mb={8}>
                    <IconUserPlus
                      style={{
                        color: "#1d4ed8",
                        fontSize: "1.25rem",
                        marginRight: "8px",
                      }}
                    />
                    <h2 style={{ margin: 0 }}>15 applications</h2>
                  </Flex>
                  <Flex align="center" mb={8}>
                    <IconUserCheck
                      style={{
                        color: "#1d4ed8",
                        fontSize: "1.25rem",
                        marginRight: "8px",
                      }}
                    />
                    <h3 style={{ margin: 0 }}>2 Matches</h3>
                  </Flex>
                  <Flex align="center">
                    <IconSquareFilled
                      style={{
                        color: "#10b981",
                        fontSize: "1.25rem",
                        marginRight: "8px",
                      }}
                    />
                    <h4 style={{ margin: 0 }}>Active</h4>
                  </Flex>
                </Flex>
              </Card>
            )
          )}
        </SimpleGrid>
      </Card>

      <Space mt={10} h="md" />

      <Card mr={120} shadow="sm" radius="md">
        <Flex justify="space-between" align="center">
          <h1 className="font-bold">AI Interviews</h1>
          <h2 className="text-blue-700">View all</h2>
        </Flex>

        <SimpleGrid cols={3} spacing="lg">
          {["BIM Manager", "BIM Manager", "BIM Manager"].map((job, index) => (
            <Card key={index} bg="#fafbf8" shadow="sm" radius="md" withBorder>
              <Flex direction="column" p="md">
                <Flex align="center" mb={8}>
                  <IconBriefcaseFilled
                    style={{
                      color: "#1d4ed8",
                      fontSize: "1.5rem",
                      marginRight: "8px",
                    }}
                  />
                  <h1 style={{ margin: 0 }}>{job}</h1>
                </Flex>
                <Flex align="center" mb={8}>
                  <IconUserPlus
                    style={{
                      color: "#1d4ed8",
                      fontSize: "1.25rem",
                      marginRight: "8px",
                    }}
                  />
                  <h2 style={{ margin: 0 }}>15 applications</h2>
                </Flex>
                <Flex align="center" mb={8}>
                  <IconUserCheck
                    style={{
                      color: "#1d4ed8",
                      fontSize: "1.25rem",
                      marginRight: "8px",
                    }}
                  />
                  <h3 style={{ margin: 0 }}>2 Matches</h3>
                </Flex>
                <Flex align="center">
                  <IconSquareFilled
                    style={{
                      color: "#10b981",
                      fontSize: "1.25rem",
                      marginRight: "8px",
                    }}
                  />
                  <h4 style={{ margin: 0 }}>Active</h4>
                </Flex>
              </Flex>
            </Card>
          ))}
        </SimpleGrid>
      </Card>
    </>
  );
};

export default EmployeePage;
