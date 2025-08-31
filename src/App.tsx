import './App.css'
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Sidebar from './components/Sidebar/Sidebar'

import Slider from './components/Slider/Slider'
import slider1 from './images/slider.png'



import type { SliderImages } from './Models'



function App() {

  const sliderImages: SliderImages[] = [
    { imgId: 1, imgAddress: slider1, active: true },
    { imgId: 2, imgAddress: slider1, active: false },
    { imgId: 3, imgAddress: slider1, active: false },
    { imgId: 4, imgAddress: slider1, active: false },
    { imgId: 5, imgAddress: slider1, active: false },
    { imgId: 6, imgAddress: slider1, active: false },
    { imgId: 7, imgAddress: slider1, active: false },
  ]



  return (
    <div className='App'>

      <div className="myContainer">
        <Header />
      </div>


      <div className="body bg-[#F3F4F5]">

        {/* <Slider /> */}
        <Slider images={sliderImages} />


        <div className="myContainer">

          <div className="content">

            <Sidebar />

            <Products />

          </div>

        </div>



      </div>

    </div>
  )
}

export default App
