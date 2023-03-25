import Link from 'next/link';
import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
};

const WhiteButton: React.FC<Props> = props => {
    return (
        <button
            className={`${props.className} h-fit rounded-lg font-semibold text-sm text-black bg-white px-4 py-3 hover:bg-transparent hover:text-white border-2 border-white transition-all ease-out duration-300`}
        >
            {props.children}
        </button>
    );
};

export default WhiteButton;
