import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { loginAction } from '../../store/actions/api-actions';
import classes from './sign-in-form.module.css';

function SignInForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const checkEmailValid = () => {
    if(email === '') {
      setEmailError('Field is required');
    }
  };

  const checkPasswordValid = () => {
    if(password === '') {
      setPasswordError('Field is required');
    }
  };

  const handleEmailInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
    setEmailError('');
  };

  const handlePasswordInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
    setPasswordError('');
  };

  const handleSignInFormSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    checkEmailValid();
    checkPasswordValid();

    if(!emailError && !passwordError) {
      dispatch(loginAction({
        email,
        password,
      }));
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSignInFormSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input style={{marginBottom: emailError ? 0 : '24px', borderColor: emailError ? 'red' : '#e6e6e6'}} className="login__input form__input" type="email" name="email" placeholder="Email" value={email} onChange={handleEmailInputChange}/>
        {emailError && <p className={classes.errorMessage}>{emailError}</p>}
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input style={{marginBottom: passwordError ? 0 : '24px', borderColor: emailError ? 'red' : '#e6e6e6'}} className="login__input form__input" type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordInputChange}/>
        {passwordError && <p className={classes.errorMessage}>{passwordError}</p>}
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default SignInForm;
