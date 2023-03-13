import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { Button } from 'components/button';
import { ChangeEvent } from 'react';
export const NewsLetter = () => {
    //handle form submit
    const handleFormSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col w-full">
            <div className="new-left flex flex-col">
                <h6 className="font-bold text-lg">Subscribe to our newsletter to get updated</h6>
                <span>We are inform you that you give any discount</span>
            </div>
            <div className="new-right flex mt-3">
                <form className="flex items-center" onSubmit={handleFormSubmit}>
                    <label>
                        <input
                            className="h-[50px] w-full focus:outline-none pl-9 bg-white"
                            type="text"
                            placeholder="Enter your email address here"
                        />
                    </label>
                    <Button
                        type="button"
                        className="bg-primary flex items-center px-8 rounded h-[50px] text-white min-w-[40px]">
                        Subscribe
                        <ArrowLongRightIcon className="h-6 w-6 text-white ml-3" />
                    </Button>
                </form>
            </div>
        </div>
    );
};
