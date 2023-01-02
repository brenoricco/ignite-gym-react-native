import { Heading, HStack, Text, VStack } from "native-base";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
    return (
        <HStack bgColor="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto 
                source={{ uri: 'https://github.com/brenoricco.png' }}
                size={16}
                alt="Imagem do perfil do usuário"
                mr={4}
            />

            <VStack>
                <Text color="gray.100" fontSize="md">
                    Olá,
                </Text>

                <Heading color="gray.100" fontSize="md">
                    Breno
                </Heading>
            </VStack>
        </HStack>
    )
}