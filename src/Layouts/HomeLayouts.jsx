
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';

const HomeLayouts = () => {
    return (
        <div className='font-poppins'>
            <header>
            <Header></Header>
            <section className='w-11/12 mx-auto py-3'>
            <LatestNews></LatestNews>
            </section>
            </header>

            <nav className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            </nav>

            <main className='w-11/12 mx-auto gap-3 py-5  lg:grid grid-cols-12'>

            <aside className='left col-span-3'>Left</aside>
            <section className='main col-span-6'>Main</section>
            <aside className='right col-span-3'> Right</aside>

            </main>
            
        </div>
    );
};

export default HomeLayouts;