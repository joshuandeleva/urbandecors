import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type menuTypes =
    | 'Orders'
    | 'Products'
    | 'Discounts'
    | 'GiftCards'
    | 'Pricing'
    | 'Settings'
    | 'Customers';

export type MenuProps = {
    icon: ReactNode;
    title: string;
    url: string;
    type: menuTypes;
};

export const SidebarItem: FC<MenuProps> = ({ icon, title, url }) => {
    return (
        <div>
            <Link to={url}>
                <div className="icon">{icon}</div>
                {title}
            </Link>
        </div>
    );
};
