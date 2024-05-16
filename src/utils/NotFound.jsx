import { Link } from 'react-router-dom';

export default function NotFound(){
    return(
        <div>
            <h1>404 ERROR! - PAGE NOT FOUND</h1>
            <Link to="/">{"<<"} BACK TO HOME PAGE</Link>
        </div>
    )
}