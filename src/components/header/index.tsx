import headerImage from '../../assets/header.png'

export default function Header() {
  return (
    <div className='flex flex-row gap-5 justify-center  border-b md:border-b-2 lg:border-b-2 border-slate-500 p-3 lg:p-5   shadow-xl h-full' >
    <img src = {headerImage} className='w-5 h-5 md:w-7 md:h-7 lg:w-6 lg:h-6' alt='header'></img>
    <p className='text-sm md:text-base lg:text-xl  font-satisfy font-semibold'>Culinary Kitchen</p>
    </div>
  )
}
