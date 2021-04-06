import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex
        align="center"
      >
        { showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Matheus Santos</Text>
            <Text color="gray.300" fontSize="small">
              matheus.psantos2016@gmail.com
            </Text>
          </Box>
        )}

        <Avatar size="md" name="Matheus Santos" src="https://github.com/MathPSantos.png" />
      </Flex>
  )
}