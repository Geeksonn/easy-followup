'use client';
import React from 'react';

import './menu.css';

//const MenuWithSub: React.FunctionComponent = () => {};

type MenuItemProps = {
    selected: boolean;
    text: string;
    onClick: () => void;
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ selected, text, onClick }) => {
    let className = selected ? 'menuItem active' : 'menuItem';

    return (
        <li className={className} onClick={() => onClick()}>
            {text}
        </li>
    );
};

const Menu: React.FunctionComponent = () => {
    const [selected, setSelected] = React.useState<string>('Home');

    return (
        <div className='menu'>
            <div className='appTitle'>Easy Follow-up</div>
            <div className='menuContent'>
                <div>
                    <ul>
                        <MenuItem
                            text='Home'
                            selected={selected === 'Home'}
                            onClick={() => setSelected('Home')}
                        />
                        <MenuItem
                            text='Dashboards'
                            selected={selected === 'Dashboards'}
                            onClick={() => setSelected('Dashboards')}
                        />
                        <MenuItem
                            text='Settings'
                            selected={selected === 'Settings'}
                            onClick={() => setSelected('Settings')}
                        />
                    </ul>
                </div>
                <div className='userMenu'>Geekson</div>
            </div>
        </div>
    );
};

export default Menu;
