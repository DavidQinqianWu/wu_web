import { NavigationItem } from '../NavigationItem';
import './index.scss';
export const NavigationBar = () => {
    const items = [{ name: 'css挑战' }, { name: 'react实战笔记' }];

    return (
        <div className="navigation_bar">
            {items.map((item, index) => {
                return (
                    <NavigationItem
                        name={item.name}
                        key={index}
                    ></NavigationItem>
                );
            })}
        </div>
    );
};
