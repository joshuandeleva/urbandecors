import { FC, ReactNode } from 'react';
type BtnProps = {
    children: ReactNode;
    className: string;
    type?: string;
    disabled?: boolean;
};

export const Button: FC<BtnProps> = ({ children, className }) => {
    return <button className={className}>{children}</button>;
};
