'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import api from './api'

function CreateCard() {

    const [formData, setFormData] = useState ({
        "description": "",
        "cardId": "",
        "stackId": "Anatomy"
    })
    const [options, setOptions] = useState([])
    const [toggle, setToggle] = useState(false)

    const getOptions = async() => {
        try{
            const skip = 0
            const limit = 20
            const response = await api.get('/stacks', skip, limit)
            let array = []
            for (let i in response.data.stacks) {array= array.concat(response.data.stacks[i].stackId)}
            const result = [...new Set(array)];
            setOptions(result)
            setFormData({
                ...formData,
                "stackId": result[0]
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() =>{
        getOptions();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let way = `/card`
        const response = await api.post(way, formData)
        if (response.status === 200){
            setToggle(true)
            setTimeout(() => {
                setToggle(false)
              }, 3000);
        }
        setFormData({
            ...formData,
            "description": "",
            "cardId": ""
        })


    }

    const handleChange = (e) => {
        const value = e.target.value
        setFormData({
            ...formData,
            [e.target.name]: value,
        })
    }

  return (
    <div className='relative'>
        <div className={`${!toggle ? "translate-y-[-1500px] transition-all" : "translate-y-[-50px] transition-all" } absolute -top-0 max-w-[100px] text-center m-auto standart_style`}>
            Done ;)
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col p-4 justify-center standart_style'>
        <span className='m-auto pt-2 pb-4'>New Card</span>
        <div className='flex flex-row justify-start items-center'>
                <label className='p-4'>Stack: </label>
                <select name={"stackId"} className='m-auto bg-transparent cursor-pointer' onChange={handleChange}>
                    {options.map((l) => <option name={"stackId"} value={l} key={l}>{l}</option>)}
                </select>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <label className='p-4'>Card Name: </label>
                <input name={"cardId"}  onChange={handleChange} value={formData.cardId} className='h-[20px] rounded-md px-4'/>
            </div>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <label className='p-4'>Description: </label>
                <input name={"description"}  onChange={handleChange} value={formData.description} className='h-[20px] rounded-md px-4'/>
            </div>
            <button type="submit" className='btn m-auto '> Create </button>
        </form>
    </div>
  )
}

export default CreateCard