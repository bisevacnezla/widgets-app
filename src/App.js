import React, {useState} from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end js framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite js library among engineers'
    },
    {
        title: 'How to use React?',
        content: 'By creating components'
    }
]

const options = [
    {
        label: 'The Color red',
        value: 'red'
    },
    {
        label: 'The Color Green', 
        value: 'green'
    }, 
    {
        label: 'The Shade of Blue',
        value: 'blue'
    }
]

export default function App() {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            
            <Route path="/list">
                <Search/>
            </Route>
            
            <Route path="/translate">
                <Translate />
            </Route>

            
            <Route path="/dropdown">
                <Dropdown 
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
        </div>
    )
}
