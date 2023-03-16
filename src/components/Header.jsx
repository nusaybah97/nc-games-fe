import { Link } from "react-router-dom";

const Header = () => {
    return <>
    <Link className='headerLink' to={'/'}>
    <h1 className='header'>Games</h1> 
    </Link>
    <p className='intro'>Welcome! This is a space where you can read reviews about some amazing board games. You can leave a comment on a review and read what others had to say about it. </p>
    </>
};

export default Header;