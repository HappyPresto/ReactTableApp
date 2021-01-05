import React, { useState } from 'react';
import { menu } from '../../someMenu';
import './menu.css';

const CreateMenu = ({updateID}) => {
    const [open, toggleOpen] = useState({ ana: false, kat: false });
    const [active, addActive] = useState();

    const handleChange = (id) => {
        toggleOpen({
            ...open,
            [id]: !open[id]
        })
    }

    const update = (id) => {
        updateID(id);
        addActive(id);
    }

    const parentMenu = [];
    for (const [key, item] of Object.entries(menu)) {
        const children = [];
        for (const [key2, value] of Object.entries(item.children)) {
            children.push(
                <div 
                    key={key2}
                    className={`menu__sublings-item${active === value.id ? " menu__sublings-active" : ""}`}
                    onClick={() => update(value.id)}
                >{value.name}
                </div>
            );
        } 
        parentMenu.push(
            <div className="menu__item" key={key}>
                <div 
                    className={`menu__name${open[item.id] ? " menu__name-active" : ""}`}
                    onClick={() => handleChange(item.id)}
                >{item.name}</div>
                <div className="menu__sublings">
                    {children}
                </div>
            </div>
        );
    }
    return parentMenu
}

const Menu  = (props) => {
    return (
        <div className="menu">
            <CreateMenu {...props}/>
        </div>
    )
}

export default Menu

