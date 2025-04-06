import React, { useState, useRef } from 'react'
import { Send } from 'lucide-react'

const Hero = () => {
    const [input, setInput] = useState('')
    const [responses, setResponses] = useState([])
    const loaderIntervals = useRef({}) // To track active loaders

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (input.trim() === '') return

        setResponses(prev => [...prev, { type: 'user', content: input }])

        const botId = `bot-${Date.now()}`
        setResponses(prev => [...prev, { type: 'bot', content: '', id: botId }])
        setInput('')

        const botEl = await waitForElement(botId)
        showLoader(botEl, botId)

        const fakeResponse = await fetchBotResponse(input)
        stopLoader(botId)
        typeText(botEl, fakeResponse)
    }

    const fetchBotResponse = (query) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(`Here's a response to: "${query}" 🤖`)
            }, 2000)
        })
    }

    const showLoader = (element, id) => {
        let dots = ''
        const interval = setInterval(() => {
            dots = dots.length < 3 ? dots + '.' : ''
            element.innerHTML = dots
        }, 300)
        loaderIntervals.current[id] = interval
    }

    const stopLoader = (id) => {
        clearInterval(loaderIntervals.current[id])
        delete loaderIntervals.current[id]
    }

    const typeText = (element, text) => {
        let index = 0
        let interval = setInterval(() => {
            if (index < text.length) {
                element.innerHTML += text.charAt(index)
                index++
            } else {
                clearInterval(interval)
            }
        }, 20)
    }

    const waitForElement = (id) => {
        return new Promise(resolve => {
            const check = () => {
                const el = document.getElementById(id)
                if (el) resolve(el)
                else setTimeout(check, 50)
            }
            check()
        })
    }

    return (
        <main className='w-[67vw] h-[95%] bg-white rounded-tl-2xl rounded-bl-2xl flex flex-col'>
            <section className='flex-1 overflow-y-auto p-4 space-y-4'>
                {responses.map((res, index) => (
                    res.type === 'user' ? (
                        <div key={index} className='bg-gray-200 p-3 rounded-lg shadow-sm self-end max-w-[80%]'>
                            {res.content}
                        </div>
                    ) : (
                        <div key={res.id} id={res.id} className='bg-gray-200 p-3 rounded-lg shadow-sm max-w-[80%]'></div>
                    )
                ))}
            </section>

            <section className='h-1/16 w-full p-4'>
                <form
                    className='h-full w-full flex justify-center items-center gap-5'
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder='Start typing'
                        className='w-5/6 h-fit p-2 rounded-xl pl-8 bg-gray-100 outline-none'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={input.trim() === ''}
                        className={`bg-amber-500 p-2 rounded-xl text-white transition-opacity ${input.trim() === '' ? 'opacity-50 hover:bg-amber-500' : 'cursor-pointer hover:bg-amber-600'
                            }`}
                    >
                        <Send className='scale-80' />
                    </button>
                </form>
            </section>

            <footer className='h-1/16'></footer>
        </main>
    )
}

export default Hero
