import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, VStack, SectionList } from 'native-base';
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
            />
        </VStack>
    );
}