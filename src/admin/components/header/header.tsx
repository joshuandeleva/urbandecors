import { BellIcon } from '@heroicons/react/24/solid';
import { Button } from 'components/button';
import { FC } from 'react';

export const HedaerItem: FC = () => {
    return (
        <div>
            <div className="search-input flex w-full">
                <form>
                    <input type="text" placeholder="search anything" />
                    <Button type="submit" className="bg-primary">
                        Search
                    </Button>
                </form>
            </div>
            <div className="header-menu">
                <div className="notifications">
                    <BellIcon />
                </div>
                <div className="account">
                    <li></li>
                </div>
            </div>
        </div>
    );
};
