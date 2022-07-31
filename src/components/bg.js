import Field from "./formField"
import logo1 from '../logo.svg';

// Component
function Login() {
    return (
        <>
            <div className='p1'>
                <div className='a1'>
                    <form >
                        <Field />
                        <Field />
                        <div className='b1'>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;