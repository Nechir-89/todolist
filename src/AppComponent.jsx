import React, { useContext } from 'react'
import TodoContext from './TodoContext'

const completedTasksStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#777'
}


function AppComponent() {
    // const value = useContext(TodoContext);
   const {item, isItDone, list, handleKeyPressed, deletItem, addItem, updateInput} = useContext(TodoContext);
    return (
        <div className="App">
            <header>
                <h1>To do list</h1>
            </header>
            <main>
                <div>
                    <input type="text"
                        value={item}
                        name="item"
                        placeholder="Type item here..."
                        onChange={updateInput}
                        onKeyPress={handleKeyPressed}
                    />

                    <button onClick={addItem}>Add</button>
                </div>
                <ol>
                    {
                        list.map(element => {
                            return (
                                <li key={element.id} style={isItDone[element.id] ? completedTasksStyle : {}}>

                                    {element.value}

                                    <div>
                                        <input type='checkbox'
                                            name='isItDone'
                                            id={element.id}
                                            checked={isItDone[element.id]}
                                            onChange={updateInput}

                                        />
                                        <button onClick={() => deletItem(element.id)}>x</button>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ol>
            </main>
        </div>
    )
}

export default AppComponent;