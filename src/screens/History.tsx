import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, VStack, SectionList, Text } from 'native-base';
import { useState } from 'react';

export function History() {
    const [excercises, setExercises] = useState([
        {
            title: '26.08.22',
            data: ['Puxada frontal', 'Remada unilateral']
        },
        {
            title: '27.08.22',
            data: ['Puxada curvada']
        },
    ])

    return (
        <VStack flex={1}>
            <ScreenHeader title="Histórico de Exercicios" />

            <SectionList 
                sections={excercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mt={10} mb={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={excercises.length === 0 && { flex: 1, justifyContent: 'center' }}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Não há exercícios registrados ainda. {'\n'}
                        Vamos nos exercitar hoje?
                    </Text>
                )}
            />
        </VStack>
    );
}