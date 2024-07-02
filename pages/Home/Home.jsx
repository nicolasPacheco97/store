import { Link } from 'react-router-dom'
import artVideo from '../../src/assets/art.mp4'
import CenterInfo from '../../src/components/Layout/CenterInfo'
function Home(){
    return <>
        <div className="w-full z-0 absolute top-0 right-0">
            <video className='w-full h-screen object-cover' muted playsInline autoPlay loop>
                <source src={artVideo} type="video/mp4; codecs=&quot;avc1&quot;"/>
                <p>Your browser cannot play the provided video file.</p>
            </video>
        </div>
        <div className='w-full z-10 absolute top-0 right-0 backdrop-brightness-75 h-screen'>
            <CenterInfo>
                <div className='relative w-full h-full'>
                    <span className='absolute top-[30%] text-white h-fit'>
                        <h1 className='text-5xl md:text-7xl font-extrabold'>Nuevos productos <br/> para tu arte</h1>
                        <br/>
                        <h2 className='text-3xl font-normal'>Se tu propio artista</h2>
                        <br/>
                        <Link to="/store/product" className='rounded-full border-white border-2 py-3 px-6 my-2'>Ir al catálogo</Link>
                    </span>
                </div>
            </CenterInfo>
        </div>
    </>
}

export default Home