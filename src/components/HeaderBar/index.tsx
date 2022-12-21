import { NavigationBar } from '../NavigationBar';
import './index.scss';

export const HeadBar = () => {
    return (
        <div className="head_bar">
            <div className="box"></div>
            <NavigationBar></NavigationBar>
        </div>
    );
};
