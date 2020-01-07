import React from 'react';

interface TextComponentProps {
    children: any
    style?: React.CSSProperties
    font?: "helvetica"
    className?: string
}

export const TextComponent = (props: TextComponentProps) => {

    let className = '';
    if (props.font) {
        if (props.font === "helvetica") {
            className += 'helvetica-font'
        }
    }

    if (props.className) {
        className += props.className
    }

    return (
        <p style={{...props.style}} className={className}>
            {props.children}
        </p>
    )
};
