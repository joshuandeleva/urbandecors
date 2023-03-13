import { NewsLetter } from 'components/banner/news';
import { FC } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer: FC = () => {
    return (
        <div className="footer min-h-[12rem] flex bg-btnColor w-full">
            <div className="footer-bottom flex flex-col w-1/2 lg:pl-10">
                <p className="lg:mt-16 ">
                    &copy; 2023 <Link to="/">urbandecors</Link>
                </p>
                <div className="social-icons flex mt-3">
                    <Link to="/" className="ml-0 rounded-full px-2 py-2 bg-secondary">
                        <FaTwitter className="text-btnColor text-sm" />
                    </Link>
                    <Link to="/" className="mx-2 rounded-full px-2 py-2 bg-secondary">
                        <FaLinkedin className="text-btnColor text-sm" />
                    </Link>
                    <Link to="/" className="mx-2 rounded-full px-2 py-2 bg-secondary">
                        <FaGithub className="text-btnColor text-sm" />
                    </Link>
                </div>
            </div>
            <div className="flex w-1/2 lg:mt-16">
                <NewsLetter />
            </div>
        </div>
    );
};
