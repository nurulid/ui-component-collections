import { Check, Chrome, Monitor } from 'lucide-react'

export const Pricing = () => {
  const features = {
    extension: [
      'Free', 
      'Record over any window',
      'Backgrounds',
      'Canvas',
      'Blur tool'
    ],
    desktop: [
      'Free',
      'Record over any video',
      'Speaker notes',
      'Record in HD (up to 4k)',
      'Backgrounds and frames',
      'Canvas',
      'Highlight mouse clicks',
      'Draw tool'
    ]
  }

  return (
    <div
      style={{'--primary': '#625DF5', '--primary-light': '#C7C6F9'} as any}
      className='grid grid-cols-2 gap-6 max-w-4xl mx-auto'
    >
      <div className='p-10 border-2 border-[var(--primary)] rounded-3xl shadow-xl'>
        <div className='text-center space-y-5 px-8'>
          <Chrome size={60} color='var(--primary-light)' className='mx-auto'/>
          <h3 className='text-2xl font-semibold'>Chrome extension</h3>
          <p className='text-gray-500'>Get start first with quick intallation.</p>
          <a href='#' className='py-[10px] px-4 rounded-full bg-[var(--primary)] text-white block font-semibold border hover:scale-105 transition-all'>Install</a>
        </div>
        <ul className='mt-7 pt-7 border-t-2 border-gray-100 space-y-3'>
          {features.extension.map((item, i) => (
          <li key={i} className='text-gray-500'>
            <Check className='inline-block mr-4' size={15}/>
            <span>{item}</span>
          </li>
          ))}
        </ul>
      </div>
      <div className='p-10 border-2 border-[var(--primary)] rounded-3xl shadow-xl'>
        <div className='text-center space-y-5 px-8'>
          <Monitor size={60} color='var(--primary-light)' className='mx-auto'/>
          <h3 className='text-2xl font-semibold'>Desktop App</h3>
          <p className='text-gray-500'>Highest quality videos and speaker notes.</p>
          <a href='#' className='py-[10px] px-4 rounded-full block font-semibold border hover:scale-105 transition-all'>Download</a>
        </div>
        <ul className='mt-7 pt-7 border-t-2 border-gray-100 space-y-3'>
          {features.desktop.map((item, i) => (
          <li key={i} className='text-gray-500'>
            <Check className='inline-block mr-4' size={15}/>
            <span>{item}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
