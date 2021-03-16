import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Search() {

    const [term, setTerm] = useState('programming')
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    //en.wikipedia.org/w/api/php?action=query&list=search&format=json&origin=*&srsearch=
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        if (term && !results.length) {
            search()
        } else {
            const timeOut = setTimeout(() => {
                if (term) {
                    search()
                }
            }, 5000)

            return (() => {
                clearTimeout(timeOut)
            })
        }
    }, [term])

    const renderedResults = (results !== 'undefined' && results.length > 0 && results.map((result) => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a
                        href={`https://en.wikipedia.org?curid=${result.pageid}`} //curid==query string property
                        className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>

                </div>
            </div>
        )
    }))
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className="input"></input>
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    )
}
