import Header from '../Header';
import Navber from '../Navbar';
import Contact from '../Contact';

const LeftSection = () => {
          return (
                    <div className='px-5'>
                              <div className='sticky top-0 grid gap-y-5 lg:grid-row-[35%_45%_20%] h-[87vh]'>
                                        <Header />
                                        <Navber />
                                        <Contact />
                              </div>
                    </div>
          )
}

export default LeftSection;