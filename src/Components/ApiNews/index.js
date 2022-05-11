import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom'

import './api.css'
import { news } from './news'

import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

export function ApiNews() {
    const [seeMore, setSeeMore] = useState(false)

    return (
        <div className="container">
            <h1>DevSocialNetwork Notícias</h1>
            {<div className={seeMore ? "listNews listMoreOn" : "listNews listMoreOff"} >
                {news.map(item => (
                    <Link to={`/news/${item.id}`}>
                        <div className="boxNew" key={item.id}>
                            <p>{item.title}</p>
                            <span>de {item.author}</span>
                        </div>
                    </Link>
                ))}
            </div>}
            <button onClick={() => setSeeMore(!seeMore)}>{seeMore ? 'Ver menos' : 'Ver mais' }</button>
        </div>
    )

}