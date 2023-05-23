import Teste from '../assets/career.svg'
function Landing() {

    return (
        <section className='font-bold h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-6 md:gap-6 md:flex-row'>




                <p className="text-2xl text-white md:text-3xl ">
                    Olá! Meu nome é
                    <span className="text-3xl text-[#00FF00]"> <b>Hugo Silva Sodré</b></span>
                    <span className='text-2xl font-black text-white'>, e sou um front end developer</span>.
                </p>
                <div className=' flex justify-center items-center'>
                    <img src={Teste} alt="portfolio" className='w-[300px] md:w-[400px]' />
                </div>

                {/* <h1 className='text-secundary '>
                        Olá, meu nome é
                    </h1>
                    <div className="md:text-4xl">
                    <h1 className='text-third text-2xl'>Hugo Silva Sodré</h1>
                    </div>
                    <span className='text-[#8892b0] text-2xl '>Lorem ipsum dolor sit amet.</span>

                    <p className='text-[#8892b0]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laborum eveniet, culpa id autem nostrum.
                    </p> */}

                <a href="#about" className='py-2 px-3 border border-green-300 w-32 text-center text-[#00FF00] rounded-md duration-[0.6s] hover:shadow-[3px_3px_0_#00FF00] self-center'>Sobre mim</a>
            </div>


        </section>


    );
}

export default Landing;