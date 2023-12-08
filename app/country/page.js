'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const dat = [{'United Kingdom': 'London',
'France': 'Paris',
'Germany': 'Berlin',
'Japan': 'Tokyo',
'India': 'New Delhi',
'Brazil': 'Brasília',
'Australia': 'Canberra',
'South Africa': 'Pretoria',
'Canada': 'Ottawa'}, 
{
    'Italy': 'Rome',
    'Spain': 'Madrid',
    'China': 'Beijing',
    'Russia': 'Moscow',
    'Mexico': 'Mexico City',
    'South Korea': 'Seoul',
    'Argentina': 'Buenos Aires',
    'Turkey': 'Ankara',
    'Egypt': 'Cairo',
    'Nigeria': 'Abuja',}, 
  {
    'Indonesia': 'Jakarta',
    'Canada': 'Ottawa',
    'Saudi Arabia': 'Riyadh',
    'Australia': 'Canberra',
    'Netherlands': 'Amsterdam',
    'Switzerland': 'Bern',
    'Thailand': 'Bangkok',
    'Sweden': 'Stockholm',
    'Greece': 'Athens',
    'Norway': 'Oslo',},
    {
    'Brazil': 'Brasília',
    'South Africa': 'Pretoria',
    'Portugal': 'Lisbon',
    'Vietnam': 'Hanoi',
    'Ireland': 'Dublin',
    'Peru': 'Lima',
    'Iran': 'Tehran',
    'New Zealand': 'Wellington',
    'Czech Republic': 'Prague',
    'Belgium': 'Brussels',},
  {
    'Austria': 'Vienna',
    'Denmark': 'Copenhagen',
    'Finland': 'Helsinki',
    'Hungary': 'Budapest',
    'Poland': 'Warsaw',
    'Singapore': 'Singapore',
    'Chile': 'Santiago',
    'Malaysia': 'Kuala Lumpur',
    'Romania': 'Bucharest',
    'South Korea': 'Seoul',},
  {
    'Netherlands': 'Amsterdam',
    'Switzerland': 'Bern',
    'Thailand': 'Bangkok',
    'Sweden': 'Stockholm',
    'Greece': 'Athens',
    'Norway': 'Oslo',
    'Portugal': 'Lisbon',
    'Vietnam': 'Hanoi',
    'Ireland': 'Dublin',
    'Peru': 'Lima',},
  {
    'Iran': 'Tehran',
    'New Zealand': 'Wellington',
    'Czech Republic': 'Prague',
    'Belgium': 'Brussels',
    'Austria': 'Vienna',
    'Denmark': 'Copenhagen',
    'Finland': 'Helsinki',
    'Hungary': 'Budapest',
    'Poland': 'Warsaw',
    'Singapore': 'Singapore',},
  {
    'Chile': 'Santiago',
    'Malaysia': 'Kuala Lumpur',
    'Romania': 'Bucharest',
    'South Korea': 'Seoul',
    'Germany': 'Berlin',
    'France': 'Paris',
    'Italy': 'Rome',
    'Spain': 'Madrid',
    'United Kingdom': 'London',
    'Canada': 'Ottawa',},
  {
    'Japan': 'Tokyo',
    'Australia': 'Canberra',
    'Brazil': 'Brasília',
    'India': 'New Delhi',
    'South Africa': 'Pretoria',
    'Mexico': 'Mexico City',
    'Russia': 'Moscow',
    'China': 'Beijing',
    'Turkey': 'Ankara',
    'Argentina': 'Buenos Aires',},
  {
    'USA': 'Washington, D.C.',
    'Indonesia': 'Jakarta',
    'Saudi Arabia': 'Riyadh',
    'Egypt': 'Cairo',
    'Nigeria': 'Abuja',
    'Ghana': 'Accra',
    'Kenya': 'Nairobi',
    'Morocco': 'Rabat',
    'Iraq': 'Baghdad',
    'Pakistan': 'Islamabad',
  }];


const page = () => {
    const [data, setData] = useState();
    const [lastClick, setLastClick] = useState();
    const [options, setOptions] = useState([1,2,3]);
  
    useEffect(() =>{
        let rand = Math.floor( Math.random() * 10 );
        setData(dat[rand]);
        setOptions([...Object.values(dat[rand]), ...Object.keys(dat[rand])]
        .sort(() => Math.random() - 0.2)
        .map((points) => ({
          call: points,
          state: "default",
        })), )
    }, [])
    const handleClick = ({ stars }) => {
      if (!lastClick) {
        setLastClick(stars.call);
        setOptions(
          options.map((opt) => {
            return {
              ...opt,
              state: opt.call === stars.call ? "selected" : "default",
            };
          }),
        );
      } else if (
        data[lastClick] === stars.call ||
        lastClick === data[stars.call]
      ) {
        setOptions(
          options.filter((opt) => {
            if (opt.call === lastClick || opt.call === stars.call) {
              return;
            } else {
              return opt;
            }
          }),
        );
        setLastClick();
      } else {
        setOptions(
          options.map((opt) => {
            return opt.call === lastClick || opt.call === stars.call
              ? { ...opt, state: "wrong" }
              : opt;
          }),
        );
        setLastClick();
      }
    };
  
    const restartGame = () => {
        const rand = Math.floor( Math.random() * 10 );
      setData(dat[rand]);
      setOptions(
        [...Object.values(dat[rand]), ...Object.keys(dat[rand])]
          .sort(() => Math.random() - 0.2)
          .map((points) => ({
            call: points,
            state: "default",
          })),
      );
    };
  
    return (
      <main className="flex flex-col h-screen w-screen justify-start font-mono text-sm p-10 relative">
        <div className={`${options.length === 0 ? "popUp" : "skip"} md:w-1/3 z-10 sm:right-10 flex absolute`}>
          <div className="standart_style w-full items-center">
            <h1 className="text-xl mb-8 text-center">Congratulations!</h1>
            <p className="mb-4">
              You've completed the game successfully. Well done!
            </p>
            <div className='w-full flex items-center m-auto justify-center'>
                <button className="flex btn self-center m-auto" onClick={restartGame}>
                Restart
                </button>
                <Link href="/" className='flex btn'> Quit </Link>  
            </div>
          </div>
        </div>
        <div className='w-full py-4 px-8 flex'>
          <Link href="/" className='justify-self-start flex btn'> Back </Link>  
        </div>
        <div className='md:p-20 p-0 items-center m-auto'>
            <div className='max-w-[720px] items-center justify-center align-middle'>
                {options.map((stars, index) => {
                    return (
                    <button
                        className={`btn ${stars.state === "selected" ? "col" : ""} ${
                        stars.state === "wrong" ? "col2" : ""
                        }`}
                        key={stars.call? index : stars}
                        onClick={() => {
                        handleClick({ stars });
                        }}
                    >
                        <p>{stars.call}</p>
                    </button>
                    );
                })}
            </div>
        </div>
      </main>
  )
}

export default page