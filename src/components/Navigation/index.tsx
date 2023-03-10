import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
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
                <div className="flex items-center mr-10 px-5">
                    <form>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <MagnifyingGlassIcon className="h-4 w-4 text-btnColor" />
                            </span>
                            <input
                                className="w-full block border placeholder:text-btnColor py-2 pl-9 h-[40px] rounded focus:outline-none border-btnColor"
                                type="text"
                                placeholder="search product"
                            />
                        </label>
                    </form>
                    <div className="shopping-bag-icon ml-4">
                        <ShoppingBagIcon className="text-secondary h-6 w-6" />
                    </div>
                </div>
                <div className="auth-btns items-center flex">
                    <button className="bg-secondary px-5 py-3 flex items-center mr-3 h-[40px]">
                        <Link to="/login" className="text-white lg:text-sm">
                            Sign Up
                        </Link>
                    </button>
                    <button className="bg-btnColor px-5 py-3 flex items-center mr-3 h-[40px]">
                        <Link to="/login" className="text-white lg:text-secondary text-sm">
                            Sign In
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
