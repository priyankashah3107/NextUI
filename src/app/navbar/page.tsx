import { title } from 'process'
import styles from './navbar.module.css'
export default function NavBar() {

const navLink = [
  {
    id: "platform",
    title: "Platform"

  },
  {
    id: "products",
    title: "Products"

  },
  {
    id: "solutions",
    title: "Solutions"

  },
  {
    id: "Pricing",
    title: "Pricing"

  },
  {
    id: "Blog",
    title: "Blog"

  },
  {
    id: "company",
    title: "Company"

  },
]  


  return (
    <>
     <div className="flex justify-between mx-16 my-16  items-center text-center ">

      <div>
        <img src="./logo.png" alt="img" />
      </div>

       <div className='flex '>
        <ul className='flex justify-between gap-16'>
          {/* {navLink.map((nav, index) => {
    return (
        <li key={nav.id}>{nav.title}</li>
    );
})} */}

        {navLink.map((nav, index) => {
         return(
          <li key={nav.id} className=" text-xl font-thin text-[#d3d3d3] leading-10 gap-20 ">
            
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
         )
        })}
        </ul>
       </div>


       <div className='flex justify-between gap-10 '>

        <button className={`  hover:bg-[#112037] w-[125px] h-[53px] rounded-full text-white font-semibold leading-10 text-base`}>Sign in</button>
        <button className={`${styles.btnn}  text-white font-semibold leading-10 text-base`}>Read Docs</button>
        <button className={`bg-gradient-to-b from-blue-900 via-blue-500 to-white w-[125px] h-[53px] rounded-full text-white font-semibold leading-10 text-base`}>Get Started</button>
       </div>

     </div>
    </>
  )
}