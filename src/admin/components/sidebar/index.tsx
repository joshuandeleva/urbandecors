import {
    Cog6ToothIcon,
    CurrencyDollarIcon,
    GiftIcon,
    ShoppingBagIcon,
    TagIcon,
    UserIcon,
} from '@heroicons/react/24/solid';
import { FC } from 'react';

import { MenuProps, SidebarItem } from './sidebarItem';

const menuItems: MenuProps[] = [
    {
        title: 'Orders',
        icon: <ShoppingBagIcon />,
        url: '/orders',
        type: 'Orders',
    },
    {
        title: 'Products',
        icon: <TagIcon />,
        url: '/products',
        type: 'Products',
    },
    {
        title: 'Customers',
        icon: <UserIcon />,
        url: '/customers',
        type: 'Customers',
    },
    {
        title: 'Gift Cards',
        icon: <GiftIcon />,
        url: '/gifts',
        type: 'GiftCards',
    },
    {
        title: 'Pricing',
        icon: <CurrencyDollarIcon />,
        url: '/pricing',
        type: 'Pricing',
    },
    {
        title: 'Settings',
        icon: <Cog6ToothIcon />,
        url: '/settings',
        type: 'Settings',
    },
];

export const MainSidebar: FC = () => {
    return (
        <div>
            <div className="flex flex-col">
                {menuItems.map(menuItem => {
                    return (
                        <SidebarItem
                            key={menuItem.type}
                            icon={menuItem.icon}
                            title={menuItem.title}
                            url={menuItem.url}
                            type={menuItem.type}
                        />
                    );
                })}
            </div>
        </div>
    );
};
