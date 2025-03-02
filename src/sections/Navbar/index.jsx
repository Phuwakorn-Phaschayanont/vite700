import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
          return (
                    <div className='flex flex-col gap-4'>
                              <div className='text-left font-medium'>
                                        <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
                                        About
                              </div>
                              <div className='text-left font-medium'>
                                        <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
                                        Experience
                              </div>
                              <div className='text-left font-medium'>
                                        <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
                                        Project
                              </div>
                              <div className='text-left font-medium'>
                                        <FontAwesomeIcon className='mr-2 text-primaryTitle' icon={faArrowRight} />
                                        Article
                              </div>
                    </div>
          )
}

export default Navbar;