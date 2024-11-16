
import logo from "../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col my-2 py-2 justify-center items-center '>
           <div className='logo'>
           <img className='w-[300] ' src={logo} alt="" />
           </div>
           <p className='text-base-300 font-poppins'>Journalism Without Fear or Favour</p>
          <p>{
            moment().format('MMMM Do YYYY, h:mm:ss a')
            }</p>
        </div>
    );
};

export default Header;