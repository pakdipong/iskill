import Button from '../../components/ui/Button'

const SectionHero = () => {
    return (
        <section className='bg-[url("src/assets/bg-hero.jpg")] bg-cover text-neutral-950 py-10'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 place-items-center">
                    <div className='col-span-2 md:col-span-1 p-10 text-center md:text-left backdrop-blur-md bg-white/30'>
                        <h1 className='bg-lime-300 text-4xl md:text-6xl font-bold'>Welcome to iSKiLL.</h1>
                        <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti perferendis sed harum recusandae nemo ad sint, magnam aperiam mollitia unde quia temporibus adipisci illo reprehenderit alias odit dicta quis explicabo!</p>
                        <div className='mt-4 flex justify-center md:justify-start'>
                            <Button variant='contained'>Get Start</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionHero