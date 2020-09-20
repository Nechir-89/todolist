import React, { useState } from "react"
import AppComponent from './AppComponent'
import TodoContext from './TodoContext'

function AppContainer() {
    const [item, setItem] = useState('');
    const [counter, setCounter] = useState(0);
    const [isItDone, setIsItDone] = useState([]);
    const [list, setList] = useState([]);
    
    function updateInput(event) {
        const { value, type, checked, id } = event.target;
        if (type === 'checkbox') {
            const completedTasks = [...isItDone];
            completedTasks[id] = checked;
            setIsItDone(completedTasks)

        } else {
            setItem(value)
        }

    }

    // adding new item to list
    function addItem() {
        if (item === '')
            return;
        // create new List
        const newList = [...list]
        // completed items or tasks
        const completedTasks = [...isItDone]
        completedTasks.push(false)

        // new item
        const newItem = {
            id: counter,
            value: item
        }

        // adding item to list
        newList.push(newItem)

        // add one to counter
        // const newCounter = this.state.counter + 1;

        setItem('');
        setCounter(prevCounter => prevCounter + 1);
        setIsItDone(completedTasks);
        setList(newList);
        // this.setState(
        //     {
        //         item: "",
        //         counter: newCounter,
        //         isItDone: completedTasks,
        //         list: newList
        //     }
        // )
    }
    // keypress for enter key
    function handleKeyPressed(event) {
        // console.log(event.key);
        if (event.key === 'Enter') {
            addItem();
        }
    }
    // deleting an item from list
    function deletItem(id) {
        const oldlist = [...list]
        const newList = oldlist.filter(item => item.id !== id)
        // this.setState({ list: newList })
        setList(newList);
    }

    return (

        <TodoContext.Provider 
        value={
            {
                item,
                counter,
                isItDone,
                list,
                handleKeyPressed,
                deletItem,
                addItem,
                updateInput
            }
        }>
            <AppComponent
               
            />
        </TodoContext.Provider>
    )
}


export default AppContainer