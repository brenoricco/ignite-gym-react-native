import { Heading, HStack, Icon, Text, VStack, Image } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import BodySvg from '@assets/body.svg';

export function Exercise() {

    const navigation = useNavigation();

    function handleGoBack() {
        return navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <VStack px={8} bg="gray.600" pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
                </TouchableOpacity>

                <HStack justifyContent="space-between" mt={4} mb={8} alignItems="center">
                    <Heading color="gray.100" fontSize="lg" flexShrink={1}>
                        Puxada frontal
                    </Heading>

                    <HStack alignItems="center">
                        <BodySvg />
                        <Text color="gray.200" ml={1} textTransform="capitalize">
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>

            <VStack p={8}>
                <Image 
                    w="full"
                    h={80}
                    mb={3}
                    source={{ uri: 'https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-949560442-1024x675.jpg' }}
                    alt="Nome do exercício"
                    resizeMode="cover"
                    rounded="lg"
                />
            </VStack>
        </VStack>
    );
}