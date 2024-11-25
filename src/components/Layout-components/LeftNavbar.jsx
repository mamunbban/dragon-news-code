import { useEffect, useState } from "react";


const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then((res) => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])
    return (
        <div>
            <h2 className="mb-4">All Category ({categories.length})</h2>
            <div className="flex flex-col gap-2 mb-4">
                {
                    categories.map(category => <button className="btn" key={category.category_id}>{category.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;