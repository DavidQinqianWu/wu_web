import './index.scss';

interface IProps {
    readonly name: string;
}

const itemClickHandler = () => {
    console.log('我被点击了');
};

export const NavigationItem = (props: IProps) => {
    return (
        <div className="navigation_item" onClick={itemClickHandler}>
            {props.name}
        </div>
    );
};
