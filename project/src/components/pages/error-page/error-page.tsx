import { Link } from 'react-router-dom';
import Header from '../../header/header';
import classes from './error-page.module.css';

function ErrorPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <div className={classes.pageNotFoundWrapper}>
          <h1>404 Page Not Found</h1>
          <Link to='/'>Return to main page</Link>
        </div>
      </main>
    </div>
  );
}

export default ErrorPage;
