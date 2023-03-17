import { useState, useEffect } from "react";
import { getCategories } from "../api";
import { Link, useParams } from "react-router-dom";


const Nav = () => {
    const [categories, setCategories] = useState([])
    const {category} = useParams()

    useEffect(() => {
        getCategories(category)
        .then((categories) => {
            setCategories(categories)
            
        })
    }, [])

    return <nav>
        <ul>
            {categories.map((category) => {
                return <li key={category.slug}>
                    <Link to={`/category/${category.slug}`}>{category.slug}</Link>
                </li>
            })}
        </ul>
    </nav>
}

export default Nav;