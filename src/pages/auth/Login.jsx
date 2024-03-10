import { FaArrowRight } from "react-icons/fa6";
import { AuthLayout } from "../../layouts";
import styles from "../../styles/styles";

const Login = () => {
    return (
        <AuthLayout>
            <h1 className="mb-4 text-center text-2xl font-bold text-primary">Login</h1>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <input type="text" className={styles.form.input} placeholder="Email" autoFocus={true} />
                </div>
                <div>
                    <input type="password" className={styles.form.input} placeholder="Password" />
                </div>
                <div>
                    <button
                        className={`${styles.form.button} group relative w-full bg-primary uppercase text-white transition-opacity hover:opacity-90 active:opacity-100`}
                    >
                        Login{" "}
                        <FaArrowRight className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 transition-all group-hover:right-3 group-hover:opacity-100" />
                    </button>
                    <p className="mt-3 text-right">
                        <a href="" className="text-sm text-primary underline underline-offset-2">
                            Forgot your password?
                        </a>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;
