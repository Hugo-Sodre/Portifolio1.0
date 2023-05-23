import Perfil from '../assets/perfil.jpg'
function About() {
    return (
        <section id='about' className='w-full flex flex-col  md:flex-row'>
            <div className="text-[#00FF00] font-bold text-2xl">
                Sobre mim
            </div>

            
            <div className='md:flex mt-4 mx-auto gap-6'>
            
                <div className='text-white text-center '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni et quidem nihil voluptas, nobis ipsa nisi fuga voluptatem mollitia.</p>
                </div>
                <div className='max-w-[250px] mx-auto'>
                    <img src={Perfil} className='' alt="Pefil" />
                </div>
            </div>
        </section>
    );
}

export default About;