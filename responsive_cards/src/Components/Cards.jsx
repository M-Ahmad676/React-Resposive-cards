import React from 'react'

export default function Cards() {

    const data = [
       
        {
          picture: 'https://www.topgear.com/sites/default/files/news-listicle/image/2024/10/Header%20image_2.jpg?w=848&h=477',
          heading: 'BMW',
          body: 'The most iconic cars from Need For Speed games',
        }
        ,
        {
            picture: 'https://www.topgear.com/sites/default/files/2024/10/hero%20shot_2.jpg?w=848&h=477',
            heading: 'Nissan 350Z',
            body: 'The most iconic cars from Need For Speed games',
          }
          ,
          {
            picture: 'https://www.topgear.com/sites/default/files/2024/10/Mazda%20RX7%20Battle%20Machine_1.jpg?w=848&h=477',
            heading: 'Mazda Rx-7',
            body: 'The most iconic cars from Need For Speed games',
          }
          ,
    ] 

  return (
    <>
   <div className='flex justify-center gap-x-10 h-auto flex-wrap max-w-screen-[1200px] pt-20 gap-y-10 md:gap-y-0'>
   {data.map((content,index) => (
    <div key={index} className='max-w-[24rem] w-full p-3 shadow-md shadow-gray-300 rounded-md'>
       <div>
        <img src={content.picture} alt="cars" className='rounded-md'/>
       </div>
       <div className='w-full h-[5rem] text-center py-4 space-y-2'>
          <h3 className='text-purple-500 text-[1.2rem] font-semibold'>{content.heading}</h3>
          <p className='leading-5 text-gray-500 text-sm font-medium'>{content.body}</p>
       </div>
    </div>
    ))}
      </div>
    </>
  )
}
