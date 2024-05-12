import {Inter} from 'next/font/google'
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})
export default function HomePage() {
 
  return (
    <> 

    <div className=''>

    
    <div className="flex justify-between mx-16">

      <div className="mx-52 ">
      <h1 className={`text-white text-6xl font-semibold text-gradient-to-b from-[#FFFFFF]  via-transparent to-[#373737] rounded-md leading-28 
      ${inter.className}`}>Flexible <span className="text-[#61A0FF]">Debit</span> <span className="text-[#585858]">card</span> <br />
      <span className="text-[#585858]">for your business</span></h1>
      </div>

        <div>
          <img src="./card.png" alt="card" />
        </div>
    </div>


      {/* circle section */}

      <div>
        <div>Img</div>

        <div>
          <div>
            <h1>text</h1>
            <button>Talk to an Expert</button>
            <button>Get API Keys</button>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}