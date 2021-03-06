import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Button,
} from 'react-native';

import Task from '../components/Tasks';

const TaskScreen = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task != null) {
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled">
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Tasks</Text>
          <View style={styles.items}>
            <TouchableOpacity onPress={() => cycleSort} color="#000743">
              <Text style={styles.sortButton}>Sort By: Date</Text>
            </TouchableOpacity>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
        keyboardVerticalOffset={Platform.select({ios: 100, android: 500})}>
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
          autoCorrect={false}
          autoCapitalize="sentences"
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default TaskScreen;

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
    fontWeight: 'bold',
    marginTop: 30,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
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
    width: 55,
    height: 55,
    backgroundColor: '#000743',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginHorizontal: 30,
  },
  addText: {
    fontSize: 28,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortButton: {
    position: 'absolute',
    top: -30,
    right: 10,
    fontSize: 16,
  },
});
