import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { StyleSheet, View, ScrollView } from 'react-native';

const CardCourse = () => (
    <View style={style.container}>
        <ScrollView>
            <Card>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text variant="titleLarge">Curso de Python3</Text>
                    <Text variant="bodyMedium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer ac molestie tortor. Nullam commodo malesuada metus,
                        sed elementum sem fringilla ut.
                    </Text>
                </Card.Content>
            </Card>

            <Card style={style.myCard}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text variant="titleLarge">Curso de Csharp</Text>
                    <Text variant="bodyMedium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer ac molestie tortor. Nullam commodo malesuada metus,
                        sed elementum sem fringilla ut.
                    </Text>
                </Card.Content>
            </Card>

            <Card style={style.myCard}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Content>
                    <Text variant="titleLarge">Curso de Api</Text>
                    <Text variant="bodyMedium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer ac molestie tortor. Nullam commodo malesuada metus,
                        sed elementum sem fringilla ut.
                    </Text>
                </Card.Content>
            </Card>

        </ScrollView>
    </View>
);

const style = StyleSheet.create({
    container: {
        margin: 10
    },
    myCard: {
        marginTop: 30
    }
})

export default CardCourse;