import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { getQuote } from '../context/QuoteAction'


const Card = () => {

    const {quote, dispatch} = useContext(GlobalContext)

    const handleClick = async() =>{
        const data = await getQuote();

        dispatch({
            type:"GET_DATA",
            payload: data
        })
    }
  return (
    <div className="card">
  <div class="card-header">
    Daily Quotes
  </div>
  <div className="card-body">
    
    <p className="card-text h1 my-1">{quote.content}</p>
    <h5 className="card-title my-2">Author:- {quote.author}</h5>
    <div className="my-5">
        <span className='badge text-bg-primary p-2 rounded-1'>{quote.tags[0]}</span>
        <span className='badge text-bg-primary mx-2 p-2 rounded-1'>{quote.tags[1]}</span>
    </div>
    <button onClick={handleClick} class="btn btn-primary">Get more Quote</button>
  </div>
</div>
  )
}

export default Card