import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { Logo } from 'components/Logo/index.';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { NavItems } from './NavItems';
export const Navbar: FC = () => {
    return (
        <div className="flex justify-between items-center lg:text-bas lg:pr-10 lg:pl-10 w-full min-h-[100px] fixed top-0 z-50:">
            <div className="navitems-right flex justify-between">
                <Logo />
                <NavItems />
            </div>
            <div className="nav-items-left flex justify-between">
                <div>
                    <form>
                        <input type="text" placeholder="search product" />
                    </form>
                </div>
                <div className="shopping-bag-icon">
                    <ShoppingBagIcon className="text-secondary h-6 w-6" />
                </div>
                <div className="auth-btns">
                    <button>
                        <Link to="/login">Sign Up</Link>
                    </button>
                    <button>
                        <Link to="/login">Sign In</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
