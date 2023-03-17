import { useState, useEffect } from "react";
import { getCategories } from "../api";
import { Link } from "react-router-dom";


const Nav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
        .then((categories) => {
            setCategories(categories)
            
        })
    }, [])

    return <nav className="nav">
        <ul className="categoryList">
            {categories.map((category) => {
                return <li key={category.slug} className="category">
                    <Link className='categoryLink'to={`/category/${category.slug}`}>{category.slug}</Link>
                </li>
            })}
        </ul>
    </nav>
}

export default Nav;