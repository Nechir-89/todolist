import React from 'react'

const completedTasksStyle = {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#777'
}


function AppComponent(props) {
    const item = props.item;
    const list = props.list;
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
                        onChange={props.updateInput}
                        onKeyPress={props.handleKeyPressed}
                    />

                    <button onClick={props.addItem}>Add</button>
                </div>
                <ol>
                    {list.map(element => {
                        return (
                            <li key={element.id} style={props.isItDone[element.id] ? completedTasksStyle : {} }>

                                {element.value}

                                <div>
                                    <input type='checkbox' 
                                        name='isItDone'
                                        id={element.id}
                                        checked={props.isItDone[element.id]}
                                        onChange={props.updateInput}

                                    />
                                    <button onClick={() => props.deletItem(element.id)}>x</button>
                                </div>

                            </li>
                        )
                    })}
                </ol>
            </main>
        </div>
    )
}

export default AppComponent;