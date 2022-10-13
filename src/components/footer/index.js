import FacebookIcon from '../../assets/Facebook Icon.png'
import InstagramIcon from '../../assets/Instagram Icon.png'
import TwitterIcon from '../../assets/Twitter Icon.png'

export default function Footer() {
  return (
    <div className='flex flex-row gap-8 md:gap-16 lg:gap-16 justify-center pt-10  ' style={{height:'10%'}}>
    <img src = {FacebookIcon} className='w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16' alt='header'></img>
    <img src = {InstagramIcon} className='w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16' alt='header'></img>
    <img src = {TwitterIcon} className='w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16' alt='header'></img>
    </div>
  )
}
