import Hero from './home/Hero'
import Steps from './home/Steps'
import LeftScroll from './home/LeftScroll'
import Features from './home/Features'
import Testimonial from './home/Testimonial'
import WhyStyleMe from './home/WhyStyleMe'

const Home = () => (
    <div className="flex flex-col w-full bg-black h-content max-w-full">
        <Hero />
        <Features />
        <Steps />
        <WhyStyleMe />
        <LeftScroll />
        <Testimonial />
    </div>
);

export default Home;