import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import NewTaskButton from '../components/NewTaskButton';
import TaskButton from '../components/TaskButton';
import todoIcon from '../../assets/todo-icon.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AntDesign } from '@expo/vector-icons';

export default function Home() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        bgcolor: 'background.paper',
        border: 'none',
        boxShadow: 24,
        p: 2,
      };

    let [selectedTask, setSelectedTask] = useState();
    let [task, setTask] = useState('');
    let [myTasks, setMyTasks] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function insertTask(task) {
        if (task.trim() != '') {
            const data = {
                id: String(new Date().getTime()),
                name: task
            };

            setMyTasks((oldState) => [...oldState, data]);
            setTask('');
        } else alert('Task name is required to insert.');
    }

    function deleteTask(idTask) { 
        const newMyTasks = myTasks.filter(element => element.id != idTask );

        setMyTasks(newMyTasks);
    }

    function editTask() {
         const old = myTasks.filter(element => element.id != selectedTask.id);
         const taskEdit = myTasks.find(element => element.id == selectedTask.id);
        
         taskEdit.name = selectedTask.name;

        setMyTasks([...old, taskEdit]);
        handleClose();
    }   

    return (
        <View style={styles.container}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: 'center'}}>
                        Edit Task
                    </Typography>
                    <TextInput
                        style={styles.editTaskInput}
                        placeholder='Edit your task here'
                        value={selectedTask ? selectedTask.name : ''}
                        onChangeText={(value) => setSelectedTask({id: selectedTask.id, name: value})}
                    ></TextInput>

                    <TouchableOpacity onPress={editTask} style={styles.modalButton}>
                        <Text style={{color: '#FFF', fontSize: 16, fontWeight: 'bold'}}>Confirmar</Text>
                    </TouchableOpacity>
                </Box>
            </Modal>

            <Text style={{display: myTasks.length == 0 ? 'block' : 'none', textAlign: 'center', margin: 10, color: '#8f8f8f'}}>Create your first Task!</Text>
            
            <NewTaskButton insert={insertTask} task={task} setTask={setTask} style={styles.newTask}></NewTaskButton>

            <FlatList
                style={{ paddingBottom: 70 }}
                data={myTasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskButton}>
                        <Image
                            style={styles.todoImage}
                            source={todoIcon}
                        />
                        <Text style={styles.taskButtonText}>{item.name}</Text>
                        <View>
                            <TaskButton function={deleteTask} id={item.id} icon="delete"/>

                            <TouchableOpacity 
                                style={{marginTop: 15}}
                                onPress={() => {
                                    handleOpen();
                                    setSelectedTask(item);
                                }}>
                                <AntDesign name='edit' size={20} color="green" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(250, 250, 250)',
        flex: 1
    },
    taskButton: {
        backgroundColor: '#FFF',
        padding: 20,
        marginHorizontal: 20,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
    },
    taskButtonText: {
        fontSize: 20,
        fontWeight: 400,
        color: 'rgb(217, 178, 192)',
        width: '100%'
    },
    todoImage: {
        width: 80,
        height: 80
    },
    editTaskInput: {
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 25,
        paddingInlineStart: 15,
        marginTop: 25,
        fontSize: 16
    },
    modalButton: {
        textAlign: 'center',
        backgroundColor: 'rgb(235, 63, 126)',
        padding: 10,
        borderRadius: 25,
        marginTop: 25
    }
});