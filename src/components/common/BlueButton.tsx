import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const BlueButton: React.FC<Props> = props => {
    return (
        <button
            className={`${props.className} text-white h-fit rounded-lg font-semibold text-sm bg-prussianBlue px-4 py-3 hover:bg-transparent hover:text-prussianBlue border-2 border-prussianBlue transition-all ease-out duration-300`}
        >
            {props.children}
        </button>
    );
};

export default BlueButton;
