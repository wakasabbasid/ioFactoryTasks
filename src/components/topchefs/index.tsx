import React from 'react'
import TopChef1 from '../../assets/top_chef_1_2.png'
import TopChef2 from '../../assets/top_chef_2.png'
import ChefLeft from '../../assets/chef_left.png'
import ChefMiddle from '../../assets/chef_middle.png'
import ChefRight from '../../assets/chef_right.png'
import Vegetable from '../../assets/vegetable.png'
import Fruits from '../../assets/fruits.png'
import WholeGrains from '../../assets/whole_grains.png'
import Protein from '../../assets/healthy_protein.png'

const chefData = [{ img: ChefLeft, name: "Eileen Johnson", position: 'Executive Chef, USA' }, { img: ChefMiddle, name: "Robert Downey Jr", position: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
{ img: ChefRight, name: "Amanda Dority", position: 'Sous Chef, India' },
];
const foodData = [{ img: Vegetable, name: "VEGETABLES", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
{ img: Fruits, name: "FRUITS", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' },
{ img: WholeGrains, name: "WHOLE GRAINS", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
{ img: Protein, name: "HEALTHY PROTEIN", description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard.' }]

const TopChefs = () => {
  return (
    <div className='flex flex-col items-center pt-5 w-screen  pl-10 pr-10   'style={{height:'40%'}} >
      <p className=' text-xs md:text-base lg:text-2xl  font-poppins font-extralight pt-2  pb-3 lg:pt-10 lg:pb-5'>TOP CHEFS</p>
      <p className='md:pt-2 lg:pt-0 border-b  lg:border-b-2 border-slate-800 w-10 md:w-14 lg:w-16 ' />
      <div className='relative w-full ' >
        <img src={TopChef1} alt="" className=' pt-6 lg:pt-16 h-96 md:h-72 lg:h-fit w-full object-cover  ' />
        <div className='flex flex-col md:flex-row   w-full h-full lg:h-full absolute top-2 md:top-8  gap-2 md:gap-24 lg:gap-48  justify-center items-center ' >
          {chefData.map((chef, index) => (
            index === 1 ?
              (<div className='flex flex-col   lg:gap-5 items-center justify-center rounded-3xl md:rounded-2xl lg:rounded-3xl bg-white w-28 h-56 md:w-2/12 md:h-40 lg:w-96 lg:h-80'>
                <img src={chef.img} alt="" className=' mt-5 lg:mt-10 w-9 h-9 md:w-20 md:h-24 lg:w-28 lg:h-28' />
                <p className='text-xs   lg:text-xl font-semibold text-black font-poppins'>{chef.name}</p>
                <a className='text-xs   lg:text-base text-black font-poppins   w-10 h-10    lg:whitespace-normal truncate   md:w-8/12 lg:w-10/12 lg:h-44 text-center leading-normal cursor-pointer ' title={`${chef.position}`} href="javascript:void(0);"> {chef.position}</a>
              </div>) : (<div className='flex flex-col gap-2  lg:mt-36 lg:gap-5 items-center justify-center h-56 w-3/12  lg:w-2/12 lg:h-fit  '>
                <img src={chef.img} alt="" className='mt-5 w-9 h-9 md:w-20 md:h-20 lg:w-28 lg:h-28' />
                <p className='text-xs  lg:text-xl font-semibold text-white font-poppins w-24 md:w-fit lg:w-fit'>{chef.name}</p>
                <a className='text-xs   lg:text-base text-white font-poppins   w-10 h-10  md:whitespace-normal lg:whitespace-normal truncate   md:w-9/12 lg:w-8/12 lg:h-56 text-center leading-normal cursor-pointer ' title={`${chef.position}`} href="javascript:void(0);"> {chef.position}</a>

              </div>)
          )
          )}
        </div>

      </div>

      <div className='relative h-5/12 w-full ' >
        <img src={TopChef2} alt="" className='h-96  lg:h-fit md:h-fit  lg:w-full object-cover'/>


        <div className='flex flex-col items-center absolute  top-0 left-0 right-0 lg:left-0 lg:right-0 lg:top-5'>
          <p className='text-xs md:text-base lg:text-2xl  font-poppins font-extralight pt-5 lg:pb-2'>FOOD GUIDE</p>
          <p className='border-b  lg:border-b-2 border-slate-800 w-10 md:w-14 lg:w-16 pt-3 ' />
        </div>
        <div >
              <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2   md:gap-0   xl:gap-20  md:gap-x-52 lg:gap-x-56 h-80 w-full md:h-fit lg:h-96  absolute  top-24 md:-left-2 md:top-24 lg:-left-0  lg:-right-10 lg:-mt-24 xl:top-56 '>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-8  md:h-44 lg:h-fit items-center lg:-ml-44'>
                  <img src={foodData[0].img} className=' w-10 h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24' alt=''/>
                  <p className='text-xs  lg:text-base font-semibold font-poppins '>{foodData[0].name}</p>
                  <a className='text-xs   text-black font-poppins   w-10 h-10    lg:whitespace-normal truncate   md:w-8/12 md:h-56 lg:w-8/12 lg:h-fit  xl:w-5/12 text-center lg:leading-normal cursor-pointer b' title={`${foodData[0].description}`} href="javascript:void(0);"> {foodData[0].description}</a>
                </div>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-8  items-center   lg:-mr-44'>
                  <img src={foodData[1].img} className='w-10 h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24' alt='' />
                  <p className='text-xs  lg:text-base font-semibold font-poppins '>{foodData[1].name}</p>
                  <a className='text-xs   text-black font-poppins   w-10 h-10   lg:whitespace-normal truncate   md:w-8/12 md:h-fit lg:w-8/12 lg:h-fit xl:w-5/12 text-center lg:leading-normal cursor-pointer ' title={`${foodData[1].description}`} href="javascript:void(0);"> {foodData[1].description}</a>

                </div>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-8  items-center lg:-ml-44'>
                  <img src={foodData[2].img} className=' w-10 h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24' alt=''/>
                  <p className='text-xs  lg:text-base font-semibold font-poppins '>{foodData[2].name}</p>
                  <a className='text-xs   text-black font-poppins   w-10 h-10   lg:whitespace-normal truncate   md:w-8/12 md:h-fit lg:w-8/12 lg:h-fit xl:w-5/12 text-center lg:leading-normal cursor-pointer ' title={`${foodData[0].description}`} href="javascript:void(0);"> {foodData[0].description}</a>
                </div>
                <div className='flex flex-col  md:gap-4 lg:gap-8  items-center  lg:-mr-44 '>
                  <img src={foodData[3].img} className='w-10 h-10 md:w-12 md:h-12 lg:w-20 lg:h-20 xl:w-24 xl:h-24' alt='' />
                  <p className='text-xs  lg:text-base font-semibold font-poppins '>{foodData[3].name}</p>
                  <a className='text-xs   text-black font-poppins   w-10 h-10    lg:whitespace-normal truncate   md:w-8/12 md:h-fit lg:w-8/12 lg:h-fit xl:w-5/12 text-center lg:leading-normal cursor-pointer ' title={`${foodData[1].description}`} href="javascript:void(0);"> {foodData[1].description}</a>
                </div>
              </div>
              </div>
              <div className='h-fit  md:h-screen lg:h-screen '>
        </div>
      </div>
    </div>
  )
}

export default TopChefs