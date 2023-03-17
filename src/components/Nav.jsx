import { useState, useEffect } from "react";
import { getCategories } from "../api";
import { Link } from "react-router-dom";


const Nav = ({setSortBy, setOrderBy, sortBy, orderBy}) => {
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
                    <Link className='categoryLink'to={`/category/${category.slug}`}>{category.slug.split('-').join(' ')}</Link>
                </li>
            })}
        </ul>

        <section className='sorting'>
            <section>
            <label htmlFor="sortBy" className='sort'>Sort By</label>
            <select id="sortBy" className="dropDown" value={sortBy} onChange={(event) => {
                setSortBy(event.target.value)
            }}>
                <option value="created_at">Date</option>
                <option value="votes">Votes</option>
            </select>
            </section>

            <section className="orderBy">
            <label htmlFor="orderBy" className='sort'>Order By</label>
            <select id="orderBy" className="dropDown" value={orderBy} onChange={(event) => {
                setOrderBy(event.target.value)
            }}>
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
            </select>
            </section>
        </section>
    </nav>
}

export default Nav;