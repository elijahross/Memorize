'use client'
import React from 'react'
import api from '@/components/api'
import { useState, useEffect } from 'react'
import { Suspense } from 'react'
import Link from 'next/link.js'



const page = () => {
const [options, setOptions] = useState([])
const [lmnt, setLmnt] = useState([])
const [card, setCard] = useState([])
const [length, setLength] = useState(0)
const [toggle, setToggle] = useState(false)

const getOptions = async() => {
    try{
        const skip = 0
        const limit = 20
        const response = await api.get('/stacks', skip, limit)
        let array = []
        for (let i in response.data.stacks) {array= array.concat(response.data.stacks[i].stackId)}
        const result = [...new Set(array)];
        setOptions(result);
        showCards(result[0])
    } catch (err) {
        console.log(err)
    }
}

useEffect(() =>{
    getOptions();
}, [])

const handleChange = async(e) => {
    let flow = showCards(e.target.value)
    setLmnt(flow)
    setToggle(false)
}

const showCards = async(query) => {
    const value = `/stack?:stackId=${query}`
    const response = await api.get(value)
    const array = response.data.cards
    const mix = array.sort(() => {return 0.5 - Math.random()})
    setLmnt(mix)
    setCard(mix[0])
    return card}
    
const previousCard = () => {
    if (length >= 1) {
    setToggle(false)
    setCard(lmnt[length-1])
    setLength(length - 1)}
    else {

    }

}

const nextCard = () => {
    if (length <= (lmnt.length-2)) {
    setToggle(false)
    setCard(lmnt[length + 1])
    setLength(length + 1)}
    else {

    }
}

  return (
    <main className="flex flex-col h-screen w-screen justify-between font-mono text-sm p-10">
        <div className='w-full py-4 px-8 flex'>
          <Link href="/" className='justify-self-start flex btn'> Back </Link>  
        </div>
        <div className='flex flex-col items-center justify-center sm:p-10 px-10 '>
        <div className='flex flex-row standart_style sm:mb-10 mb-0'>
            <h1 className='font-mono mr-4 '>
            Choose Stack:
            </h1>
            <select name={"stackId"} className='bg-transparent font-mono cursor-pointer' defaultValue="default" onChange={handleChange}>
                {options.map((l) => <option value={l} key={l}>{l}</option>)}
            </select>
        </div>
        <div className='align-top items-start my-8'>
            <Suspense fallback={<p>Loading feed...</p>}>
                <div className={`standart_style min-h-[240px] min-w-[360px] max-w-[360px] text-center self-center`}>
                    {!toggle ? <p>{card.cardId}</p> : <p>{card.cardId}<br/> - <br/>{card.description}</p>}
                </div>
            </Suspense>
        </div>
        </div>
        <div className='flex flex-row justify-between items-center w-full m-auto sm:px-8 px-0'>
            <div className='btn' onClick={previousCard}>Previous Card</div>
            <div className='btn' onClick={() => setToggle(prevState => !prevState)}>Show Card</div>
            <div className='btn' onClick={nextCard}>Next Card</div>
        </div>
    </main>
  )
}

export default page
