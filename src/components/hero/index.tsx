import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Button } from 'components/button';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Iprops = {
    title: string;
    description: string;
    image: string;
};

export const Hero: FC<Iprops> = ({ title, description, image }) => {
    return (
        <div className="flex bg-hovercolor min-h-[400px] mt-[4em] w-full max-w-screen-2xl justify-between">
            <div className="w-1/2 flex flex-col pl-10 mt-[6em]">
                <h2 className="font-black leading-8 text text-[2em] tracking-wide mb-7">{title}</h2>
                <p className="leading-8 my-7">{description}</p>

                <Button className="flex items-center mt-[1rem]  px-7 bg-primary h-[40px] py-7 hover:opacity-70 rounded text-center justify-center text-white w-[200px]">
                    <Link to="/shop">Shop Now</Link>
                    <ArrowLongRightIcon className="h-6 w-6 text-white ml-3" />
                </Button>
            </div>
            <div className="w-1/2 flex flex-col">
                <img src={image} alt="" />
            </div>
        </div>
    );
};
