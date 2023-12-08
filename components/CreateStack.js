'use client'
import React from 'react'
import { useState } from 'react'
import api from './api'

function CreateStack() {
    const [toggle, setToggle] = useState(false)
    const [formData, setFormData] = useState ({
        "description": "",
        "cardId": "",
        "stackId": ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await api.post('/stacks', formData)
        if (response.status === 200){
            setToggle(true)
            setTimeout(() => {
                setToggle(false)
              }, 3000);
        }
        setFormData({
            "description": "",
            "cardId": "",
            "stackId": ""
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
        <div className={`${!toggle ? "translate-y-[-1500px] transition-all" : "translate-y-[-50px] transition-all" } absolute top-0 max-w-[100px] text-center m-auto standart_style`}>
            Done ;)
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col p-8 justify-center standart_style'>
        <span className='m-auto pt-2 pb-4'>New Stack</span>
            <div className='flex flex-row justify-between items-center'>
                <label className='p-4'>Name:</label>
                <input name={"stackId"}  onChange={handleChange} value={formData.stackId} className='h-[20px] rounded-md px-4'/>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <label className='p-4'>First Card: </label>
                <input name={"cardId"}  onChange={handleChange} value={formData.cardId} className='h-[20px] rounded-md px-4'/>
            </div>
            <div className='mb-4 flex flex-row justify-between items-center'>
                <label className='p-4'>Description: </label>
                <input name={"description"}  onChange={handleChange} value={formData.description} className='h-[20px] rounded-md px-4'/>
            </div>
            <button type="submit" className='btn m-auto'>Create</button>
        </form>
    </div>
  )
}

export default CreateStack