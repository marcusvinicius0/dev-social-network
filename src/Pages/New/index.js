import React, { useParams } from 'react'

import { news } from '../../Components/ApiNews/news'

import { ApiNews } from '../../Components/ApiNews'

import './new.css'

export default function (props) {
    const id = props.match.params.id

    return (
        <div className="containerAll">
            <div className="pageNew">
                <div className="containerNew">
                    <img src={news[id].imageBanner} alt={`Imagem ${news[id].title}`} />
                    <div className="contentNew">
                        <h1>{news[id].title}</h1>
                        <p>{news[id].author} da {news[id].company}</p>
                        <div className="descriptionNew">
                            <span className="titleContent">{news[id].titleContent}</span>
                            <p className="content">{news[id].content}</p>
                        </div>
                    </div>
                </div>

                <div className="api-news">
                    <ApiNews />
                </div>
            </div>
        </div>
    )
}