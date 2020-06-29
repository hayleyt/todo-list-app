import React from 'react'

function Header(props) {
    return(
        <div className="header">
            <h1>TO DO LIST</h1>
            <label className="switch">
                <input 
                    type="checkbox" 
                    onClick={props.toggleTheme}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Header