import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Keyboard,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform, TextInput,
} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import Task from '../components/Tasks';


const HomeScreen = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    const {user, logout} = useContext(AuthContext)
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >

                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Tasks</Text>
                    <View style={styles.items}>
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input}
                           placeholder={'Write a task'}
                           value={task}
                           onChangeText={text => setTask(text)}
                           autoCapitalize="none"
                           autoCorrect={false}
                />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        left: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 260,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginHorizontal: 30
    },
    addText: {},
});
