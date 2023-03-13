import { Button } from 'components/button';
import { Formik, FormikHelpers } from 'formik';
import { FC } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

interface FormValues {
    email: string;
    password: string;
}

const userSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string()
        .required('Password')
        .min(8, 'Password is too short  -should be 4 chars minimum')
        .matches(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
        ),
});

const handleSubmit = () => {};

export const SignIn: FC = () => {
    return (
        <div className="signup__page">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={userSchema}
                onSubmit={handleSubmit}>
                {(formikProps: FormikHelpers<FormValues>) => (
                    <div className="w-[900px] h-[500px] flex flex-col m-auto  border border-btnColor">
                        <h2 className="text-secondary font-bold  pl-8 pt-12">Sign In</h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="form-left col-span-2 pl-8 lg:pb-10 pr-8 pt-12">
                                <form className="flex flex-col relative">
                                    <label className="flex flex-col">
                                        <span className="text-bold mb-2">Email</span>
                                        <input
                                            type="text"
                                            className="online-none px-3 py-2 border border-btnColor focus:outline-none"
                                            required
                                        />
                                    </label>
                                    <label className="flex flex-col mb-3">
                                        <span className="text-bold mb-2">Password</span>
                                        <input
                                            type="text"
                                            className="online-none px-3 py-2 border border-btnColor focus:outline-none"
                                            required
                                        />
                                    </label>
                                    <Button
                                        type="submit"
                                        disabled={formikProps.setSubmitting}
                                        className="w-full bg-primary h-[40px] items-center  text-white rounded">
                                        Sign Up
                                    </Button>
                                </form>
                            </div>
                            <div className="form-right flex  justify-center flex-col pr-8">
                                <Button className="max-w-full text-sm mb-3 flex items-center h-[40px] rounded justify-evenly border border-btnColor">
                                    <FaGoogle className="mr-3" />
                                    Continue with Google
                                </Button>
                                <Button className="max-w-full text-sm flex items-center bg-secondary rounded text-white h-[40px] justify-evenly">
                                    <FaFacebookF className="mr-3" />
                                    Continue With Facebook
                                </Button>
                            </div>
                        </div>
                        <div className="form-footer bottom-0 mb-0 h-full mt-11  border-t border-btnColor flex justify-center items-center">
                            <span className="text-sm">Already have an Account ?</span>
                            <Link
                                to="/register"
                                className="ml-3 text-sm border border-btnColor py-2 px-7 ">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    );
};
