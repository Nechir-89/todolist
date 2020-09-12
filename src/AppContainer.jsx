import React from "react"
import AppComponent from './AppComponent'


class AppContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            item: "",
            counter: 0,
            isItDone: [],
            list: []
        }
        this.updateInput = this.updateInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deletItem = this.deletItem.bind(this)
    }

    updateInput(event) {
        const { name, value, type, checked, id } = event.target;
        if (type === 'checkbox') {
            const completedTasks = [...this.state.isItDone];
            completedTasks[id] = checked;
            // console.log(completedTasks);
            this.setState({ [name]: completedTasks });
            
        } else {
            this.setState({ [name]: value });
        }

    }

    addItem() {
        if (this.state.item === '')
            return;
        // create new List
        const newList = [...this.state.list]

        // completed items or tasks
        const completedTasks = [...this.state.isItDone]
        completedTasks.push(false)

        // new item
        const newItem = {
            id: this.state.counter,
            value: this.state.item
        }

        // adding item to list
        newList.push(newItem)

        // add one to counter
        const newCounter = this.state.counter + 1;

        this.setState(
            {
                item: "",
                counter: newCounter,
                isItDone: completedTasks,
                list: newList
            }
        )
    }

    deletItem(id) {
        const list = [...this.state.list]
        const newList = list.filter(item => item.id !== id)
        this.setState({ list: newList })
    }

    handleKeyPressed = (event) => {
        // console.log(event.key);
        if (event.key === 'Enter') {
            this.addItem();
        }
    }

    render() {
        return (
            <AppComponent
                handleKeyPressed={this.handleKeyPressed}
                deletItem={this.deletItem}
                addItem={this.addItem}
                updateInput={this.updateInput}
                {...this.state}
            />
        )
    }
}

export default AppContainer