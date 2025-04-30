import React from 'react'
import Siderbar from './components/Siderbar'
import Siderbar2 from './components/SideBar2'
import Hero from './pages/Hero'

const App = () => {
  return (
    <section className='flex w-screen h-screen bg-[#25262e] items-center'>
      <Siderbar />
      <Hero />
      <Siderbar2 />
    </section>
  )
}

export default App