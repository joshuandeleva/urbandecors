import { SignUp } from 'components/form/signin';
import { SignIn } from 'components/form/signUp';
import { Navbar } from 'components/Navigation';
import { FC } from 'react';

export const Login: FC = () => {
    return (
        <div className="lg:mt-[8rem]">
            <SignIn />
        </div>
    );
};
