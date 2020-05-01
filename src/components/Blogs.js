import React from 'react';

import '../css/blog.css';
import blog from '../blog.jpg';

const Blogs = () => {
    return (
        <section className="blogs">
            <div className="wrapper">
                <ul>
                    <li>
                        <img src={blog} alt="" />
                        <p>Top 7 Signs To Know If He Is Your Soulmate</p>
                        <span>March, 2017 by <strong>John Doe</strong></span>
                    </li>

                    <li>
                        <img src={blog} alt="" />
                        <p>Top 7 Signs To Know If He Is Your Soulmate</p>
                        <span>March, 2017 by <strong>John Doe</strong></span>
                    </li>

                    <li>
                        <img src={blog} alt="" />   
                        <p>Top 7 Signs To Know If He Is Your Soulmate</p>
                        <span>March, 2017 by <strong>John Doe</strong></span>
                    </li>

                    <li>
                        <img src={blog} alt="" />
                        <p>Top 7 Signs To Know If He Is Your Soulmate</p>
                        <span>March, 2017 by <strong>John Doe</strong></span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Blogs;