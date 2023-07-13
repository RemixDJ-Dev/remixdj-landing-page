import logo from '@public/images/croppedlogo.png';

export default function Index() {
  return (
    <div>
      <header className='inline-flex flex-row place-items-start p-3 m-3'>
        <div className='flex-1'>
          <h1 className='text-7xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl font-extrabold 
      bg-gradient-to-tr from-green via-turquoise to-magenta hover:from-magenta hover:via-green hover:to-turquoise inline-block text-transparent bg-clip-text'>RemixDJ</h1>
        </div>
        <div className="flex-1 max-h-16">
          <img src={logo} className='max-h-16 sm:max-h-16 md:max-h-24 lg:max-h-32 xl:max-h-32 2xl:max-h-32' alt='RemixDJ Logo'/>
        </div>
      </header>
    </div>
  )
}