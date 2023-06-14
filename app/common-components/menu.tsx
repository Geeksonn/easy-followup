'use client';
import React from 'react';

import './menu.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//const MenuWithSub: React.FunctionComponent = () => {};

type MenuItemProps = {
    text: string;
    path: string;
    useSub?: boolean;
};

type SubMenuItemProps = MenuItemProps & {
    children: MenuItemProps[];
};

const MenuItemWithSub: React.FunctionComponent<SubMenuItemProps> = (props) => {
    const { text, path, children } = props;
    const pathname = usePathname();

    return (
        <div className='menuItem active'>
            <Link href={path}>
                <li>{text}</li>
            </Link>
            <ul className='mt-2'>
                {children.map((c, i) => (
                    <Link key={`link_${i}`} href={`${path}${c.path}`}>
                        <li key={`li_${i}`} className={`subMenuItem ${pathname === path + c.path ? 'active' : ''}`}>
                            {c.text}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ text, path, useSub = false }) => {
    const pathname = usePathname();
    let className = path === pathname ? 'menuItem active' : 'menuItem';

    //TODO
    const boards = [
        { text: 'Electricity', path: '/a1245' },
        { text: 'Electricity', path: '/drerdf' },
        { text: 'Electricity', path: '/trtrgr' },
        { text: 'Electricity', path: '/fgfgfg' },
    ];

    if (useSub && pathname.includes(path)) {
        return <MenuItemWithSub text={text} path={path} children={boards} />;
    } else {
        return (
            <Link href={path}>
                <li className={className}>{text}</li>
            </Link>
        );
    }
};

const Menu: React.FunctionComponent = () => {
    return (
        <div className='menu'>
            <div className='appTitle'>Easy Follow-up</div>
            <div className='menuContent'>
                <div>
                    <ul>
                        <MenuItem text='Home' path='/' />
                        <MenuItem text='Dashboards' path='/dashboards' useSub />
                        <MenuItem text='Settings' path='/settings' />
                    </ul>
                </div>

                <ul>
                    <MenuItem text='Geekson' path='/user/profile' />
                </ul>
            </div>
        </div>
    );
};

export default Menu;
