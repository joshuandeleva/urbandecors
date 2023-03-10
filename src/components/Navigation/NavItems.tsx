import { FC } from 'react';

export const NavItems: FC = () => {
    return (
        <ul className="flex items-center lg:ml-12">
            <li className="pr-3">
                <a href="/" className="text-secondary hover:bg-hovercolor lg:px-3 lg:py-3">
                    Living Room
                </a>
            </li>
            <li className="pr-3">
                <a
                    href="/"
                    className="text-btnColor active:text-secondary hover:bg-hovercolor  lg:px-3 lg:py-3">
                    Dining
                </a>
            </li>
            <li className="pr-3">
                <a
                    href="/"
                    className="text-btnColor active:text-secondary hover:bg-hovercolor  lg:px-3 lg:py-3">
                    Home Office
                </a>
            </li>
            <li className="pr-3">
                <a
                    href="/"
                    className="text-btnColor active:text-secondary hover:bg-hovercolor  lg:px-3 lg:py-3">
                    Office
                </a>
            </li>
            <li className="pr-3">
                <a
                    href="/"
                    className="text-btnColor active:text-secondary hover:bg-hovercolor  lg:px-3 lg:py-3">
                    Bedroom
                </a>
            </li>
        </ul>
    );
};
