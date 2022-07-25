import { UserAddIcon } from "@heroicons/react/outline";
import { useFormik } from "formik";
import { homePath, loginPath } from "../utlis/routes";
import * as yup from 'yup';
import { emptyUsername, matchPassword, requiredPassword, shortPassword, shortUsername } from "../utlis/vlaidationMessages";
import { SharedIput } from "../components/sharedComponents/formSharedComponents/sharedInput";
import { FormButton } from "../components/sharedComponents/formSharedComponents/formSubmitButton";
import { useNavigate } from "react-router-dom";


export const Register = (): JSX.Element => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: (values, { resetForm }): void => {
            console.log(JSON.stringify(values));
            navigate(homePath);
            resetForm();
        },
        validationSchema: yup.object({
            username: yup.string().min(4, shortUsername).required(emptyUsername),
            password: yup.string().min(8, shortPassword).required(requiredPassword),
            confirmPassword: yup.string().required(requiredPassword)
                .oneOf([yup.ref('password'), null], matchPassword),
        })
    })

    return (
        <div className="w-full h-screen bg-gray-100">
            <div className="w-full max-w-sm mx-auto px-4 md:px-0 pt-12 md:pt-24">
                <div>
                    <div className="flex flex-col items-center">
                        <UserAddIcon className="w-24 h-24 text-indigo-500" />
                    </div>
                    <h1 className="font-bold text-2xl md:text-3xl pb-4 text-center">Create your account</h1>
                    <p className="text-center font-medium  pb-6">
                        Already have an account?
                        <a
                            href={loginPath}
                            className="text-indigo-500 pl-2 font-bold">
                            Login
                        </a>
                    </p>
                </div>
                <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={formik.handleSubmit}>

                    <div className="mt-1">
                        <SharedIput
                            label="Username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            type="text"
                            id="username"
                        />
                        <p className="text-red-500 text-sm">{formik.errors.username && formik.touched.username && formik.errors.username}</p>
                    </div>

                    <SharedIput
                        label="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type="password"
                        id="password"
                    />
                    <p className="text-red-500 text-sm">{formik.errors.password && formik.touched.password && formik.errors.password}</p>

                    <SharedIput
                        label="Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        type="password"
                        id="confirmPassword"
                    />
                    <p className="text-red-500 text-sm">{formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}</p>
                    <div>
                        <FormButton>Register</FormButton>
                    </div>
                </form>
            </div>
        </div>
    );
}