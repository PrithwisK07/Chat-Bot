import React from 'react'
import { MessageSquare, Settings, CircleHelp, PanelRight, Info, ArrowUpRight, LogOut } from 'lucide-react'

const Siderbar = () => {
    return (
        <aside className='w-[17vw] h-full text-white p-5'>
            <header className='h-1/8 flex justify-between'>
                <h1 className='text-xl'>CodeDex</h1>
                <button
                    type="button"
                    className='h-fit cursor-pointer'
                >
                    <PanelRight className='scale-100 text-gray-400' />
                </button>
            </header>
            <main className='h-6/8'>
                <section className='h-2/3'>
                    <ul className='h-full flex flex-col gap-5 items-center text-sm font-semibold'>
                        <li className='h-1/8 w-full flex items-center pl-6 rounded-xl bg-[#32323d]  hover:text-amber-600 text-gray-400 cursor-pointer'>
                            <MessageSquare className='mr-2 scale-80 mt-1' />
                            AI Chat helper
                        </li>
                        <li className='h-1/8 w-full flex items-center pl-6 rounded-xl bg-[#32323d] hover:text-amber-600 text-gray-400 cursor-pointer'>
                            <Settings className='mr-2 scale-80' />
                            Settings
                        </li>
                        <li className='h-1/8 w-full flex items-center pl-6 rounded-xl bg-[#32323d] hover:text-amber-600 text-gray-400 cursor-pointer'>
                            <CircleHelp className='mr-2 scale-80' />
                            Updates & FAQ
                        </li>
                    </ul>
                </section>

                <section className='h-[calc(100%-70%)] bg-gradient-to-r from-[#ff7a05] from-0% to-[#fe9f56] rounded-xl p-5 flex flex-col gap-2'>
                    <Info className='scale-125' />
                    <h1 className='text-xl'>About Us</h1>
                    <div>
                        <button type="button" className='p-2 pt-1 pb-1 font-semibold  bg-white text-black rounded-3xl'>
                            <ArrowUpRight className='scale-90' />
                        </button>
                    </div>
                </section>
            </main>
            <hr className='w-full relative top-2 opacity-20' />
            <footer className="h-1/8 flex justify-center">
                <button
                    type='button'
                    className='relative top-8 w-9/10 h-1/3 flex items-center justify-between cursor-pointer'
                >
                    Log Out
                    <LogOut className='scale-80 text-gray-400' />
                </button>
            </footer>
        </aside>
    )
}

export default Siderbar