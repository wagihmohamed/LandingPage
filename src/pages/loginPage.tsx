import { UserCircleIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import * as yup from 'yup';
import { FormButton } from "../components/sharedComponents/formSharedComponents/formSubmitButton";
import { SharedIput } from "../components/sharedComponents/formSharedComponents/sharedInput";
import { registerPath } from "../utlis/routes";
import { emptyUsername, requiredPassword, shortPassword, shortUsername } from "../utlis/vlaidationMessages";

export const Login = (): JSX.Element => {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: yup.object({
            username: yup.string().min(4, shortUsername).required(emptyUsername),
            password: yup.string().min(8, shortPassword).required(requiredPassword),
        }),
        onSubmit: (values, { resetForm }): void => {
            console.log(JSON.stringify(values));
            resetForm();
        },
    })
    return (
        <div className="w-full h-screen bg-gray-100">
            <div className="w-full max-w-sm mx-auto pt-24">
                <div>
                    <div className="flex flex-col items-center">
                        <UserCircleIcon className="w-24 h-24 text-indigo-500" />
                    </div>
                    <h1 className="font-bold text-4xl pb-4 text-center">Login to your account</h1>
                    <p className="text-center font-medium  pb-6">
                        Doesn't have an account?
                        <a
                            href={registerPath}
                            className="text-indigo-500 cursor-pointer pl-2 font-bold">
                            Register
                        </a>
                    </p>
                </div>
                <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>
                    <SharedIput
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        id="username"
                        label="Username"
                        type="text"

                    />
                    <p className="text-red-500 text-sm">{formik.errors.username && formik.touched.username && formik.errors.username}</p>
                    <SharedIput
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        id="password"
                        label="Password"
                        type="password"
                    />
                    <p className="text-red-500 text-sm">{formik.errors.password && formik.touched.password && formik.errors.password}</p>
                    <div>
                        <FormButton>Login</FormButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

