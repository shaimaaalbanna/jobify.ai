import React from "react";
import { Space, Card, Flex, Button, SimpleGrid } from "@mantine/core";
import {
  IconBriefcaseFilled,
  IconUserPlus,
  IconUserCheck,
  IconSquareFilled,
  IconClockHour3Filled,
} from "@tabler/icons-react";
import Image from "next/image";
import image from "../../image.png"; // Ensure correct path for Next.js

const Hrpage = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <Card
          bg="#fafbf8"
          w={720}
          h={180}
          mt={20}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Flex justify="space-between">
            <div>
              <h1 style={{ color: "#1d4ed8", fontFamily: "monospace" }}>
                Expedite your hiring with Jobify
              </h1>
              <h2>
                AI helps you filter candidates, conduct initial interviews, and
                introduce you to the top qualified candidates.
              </h2>
              <Space mt={10} h="sm" />
              <Button
                h={30}
                w={190}
                size="md"
                style={{ backgroundColor: "#1d4ed8", color: "white" }}
              >
                Post a new Job
              </Button>
            </div>
            <Image src={image} alt="interview" width={125} height={125} />
          </Flex>
        </Card>
      </Flex>
      <Card mr={120} shadow="sm" radius="md">
        <Flex justify="space-between">
          <h1 style={{ fontWeight: "bold" }}>Recent Jobs</h1>
          <h2 style={{ color: "#1d4ed8" }}>View all</h2>
        </Flex>
        <SimpleGrid cols={4} spacing="lg" h="auto">
          {Array(4)
            .fill(null)
            .map((_, index) => (
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
                    <h1 style={{ margin: 0 }}>BIM Manager</h1>
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
                  <Flex align="center" mb={8}>
                    <IconSquareFilled
                      style={{
                        color: "#10b981", // Green color for active status
                        fontSize: "1.25rem",
                        marginRight: "8px",
                      }}
                    />
                    <h4 style={{ margin: 0 }}>Active</h4>
                  </Flex>
                  <Flex align="center">
                    <IconClockHour3Filled
                      style={{
                        color: "#1d4ed8",
                        fontSize: "1.25rem",
                        marginRight: "8px",
                      }}
                    />
                    <h5 style={{ margin: 0 }}>Deadline: 12-06-24</h5>
                  </Flex>
                </Flex>
              </Card>
            ))}
        </SimpleGrid>
      </Card>
    </>
  );
};

export default Hrpage;
