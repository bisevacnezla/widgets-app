import React, {useState, useEffect, useRef} from 'react'

function Dropdown({label, options, selected, onSelectedChange}) {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    // whenever our component is first rendered into the DOM, we're going to run useEffect function once and at that point,
    // we're going to set up an event listener, then, whenever our dropdown is about to be removed from the DOM, react is going
    // to automatically call our cleanup function and that's going to remove event listener
    useEffect(()=>{
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick)
        return ()=>{
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])

    const list = options.map((option)=>{
        if(option.value===selected.value){
            return null
        }
        return (
            <div 
            key={option.value} 
            className="item"
            onClick={()=>onSelectedChange(option)}>
                {option.label}
            </div>)
    })
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                        {list}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dropdown
