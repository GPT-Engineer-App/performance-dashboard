import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        <Text fontSize="3xl" fontWeight="bold" textAlign="center">
          Business Dashboard
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <StatCard icon={FaDollarSign} title="Revenue" value="$50,000" change="+5%" />
          <StatCard icon={FaShoppingCart} title="Sales" value="1,200" change="-2%" />
          <StatCard icon={FaUsers} title="Customers" value="300" change="+8%" />
          <StatCard icon={FaChartLine} title="Growth" value="15%" change="+3%" />
        </SimpleGrid>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text fontSize="2xl" mb={4}>
            Sales Overview
          </Text>
          <Image src="https://images.unsplash.com/photo-1543286386-713bdd548da4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMGNoYXJ0fGVufDB8fHx8MTcxNTgwMzQ3OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" />
        </Box>
      </VStack>
    </Container>
  );
};

const StatCard = ({ icon, title, value, change }) => {
  const isPositive = change.startsWith("+");
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
      <HStack spacing={4}>
        <IconButton aria-label={title} icon={React.createElement(icon)} size="lg" isRound />
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{value}</StatNumber>
          <StatHelpText>
            <StatArrow type={isPositive ? "increase" : "decrease"} />
            {change}
          </StatHelpText>
        </Stat>
      </HStack>
    </Box>
  );
};

export default Index;
