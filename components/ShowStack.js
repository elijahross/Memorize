"use client"
import React, { Suspense } from 'react'
import api from './api'


function showStack(query) {
    const value = `/stack/?stack_id=${query}`
    const respon = api.get(value)
    const array = respon.cards[0].cardId
    const mix = array.sort(() => {return 0.5 - Math.random()})
    
  return mix
}

export default showStack