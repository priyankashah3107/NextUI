import {Inter} from 'next/font/google'
import styles from "../app/navbar/navbar.module.css"
import style from '../app/home.module.css'
import { styleText } from 'util'
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
export default function HomePage() {
 // image mei loop laga ker fetch krna h aur 
 // ye images code repeat ki jagah useState and UseEffect se kaise kre

  return (
    <> 

    <div className='min-h-screen'>

    
    <div className="flex justify-between mx-16">

      <div className="mx-52 ">
      <h1 className={`text-white text-6xl font-semibold text-gradient-to-b from-[#FFFFFF]  via-transparent to-[#373737] rounded-md leading-28 
      ${inter.className}`}>Flexible <span className="text-[#61A0FF]">Debit</span> <span className="text-[#585858]">card</span> <br />
      <span className="text-[#585858]">for your business</span></h1>
      </div>

        <div className=''>
          {/* <img src="./cards.png" alt="card" /> */}

          <img src="./cards.png " alt="card"  className=" w-[250px] h-[150px] md:w-[459px] md:h-[293px]"/>
          {/* <img src="./line.png" alt="" /> */}
        </div>
       
    </div>


      {/* circle section */}

      <div className='mx-40 -mt-40 flex justify-around items-center'>

        <div>
          <img src="./circle.png" alt="" className='w-[490px] h-[490px]'/>
        </div>

        <div className=''>
          <div>
            <h1 className="w-[649px] text-white/opacity-60 text-xl font-light font-['Inter'] leading-9">Meet the new standard for a modern card platform <br />
Launch your product, issue cards, and grow your revenue.</h1>
             
             <div className='flex items-center gap-10 mt-10 text-center' >
             <button className={` w-[230px] h-[73px]  bg-gradient-to-b from-blue-900 via-blue-500 to-white rounded-[38px] shadow-inner justify-center items-center gap-[8px] inline-flex" cursor-pointer ` }>
               <div className={`text-white text-xl font-semibold leading-10`}>Talk to an Expert</div>
              </button>

            <button className={`${styles.btnn} p-3 cursor-pointer`}>Get API Keys</button>
             </div>
           

          </div>
        </div>
      </div>

      
      {/* infinite logo carouse */}

      {/* <div className='bg-[#070614] w-[1000px] h-[84px] mx-40 md:mx-80  rounded-md items-center text-center  logos'>
           
          <div className='flex mx-auto justify-around items-center text-center logo-slide '>
          <img src="./stripe.png" alt="" className='mt-7'/>
           <img src="./solarwind.png" alt=""  className='mt-7'/>
           <img src="./chase.png" alt="" className='mt-7' />
           <img src="./tencent.png" alt="" className='mt-7' />
           <img src="./stripe.png" alt=""  className='mt-7'/>
           <img src="./solarwind.png" alt="" className='mt-7' />

          </div>
      </div> */}


         <div className={`bg-[#070614] ${style.logos}  ` } >
           
          <div className={style.logoslide }>
          <img src="./stripe.png" alt="" />
           <img src="./solarwind.png" alt=""  />
           <img src="./chase.png" alt=""  />
           <img src="./tencent.png" alt=""  />
           <img src="./stripe.png" alt=""  />
           <img src="./solarwind.png" alt=""  />

          </div>

          <div className={style.logoslide }>
          <img src="./stripe.png" alt="" />
           <img src="./solarwind.png" alt=""  />
           <img src="./chase.png" alt=""  />
           <img src="./tencent.png" alt=""  />
           <img src="./stripe.png" alt=""  />
          </div>
      </div>

      
   
    </div>
    </>
  )
}