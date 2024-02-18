import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../redux/auth/authSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const LoginScreen = () => {
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)
    const submitForm = (data) => {
        dispatch(login(data));
        console.log(localStorage.getItem("token"))
    }
    useEffect(() => {
        if (isAuthorized) {
            navigate('/');
        }
        console.log(isAuthorized);
    }, [isAuthorized]);
    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    className='form-input'
                    {...register('email')}
                    required
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    className='form-input'
                    {...register('password')}
                    required
                />
            </div>
            <button type='submit' className='button'>
                Login
            </button>
        </form>
    )
}
export default LoginScreen