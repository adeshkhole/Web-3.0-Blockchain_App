import { AiFillPayCircle } from "react-icons/ai";
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './';

const Welcome =() =>{

    const connectwallet =() =>{

    }
    return(
       <div className="flex w-full justify-center item-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
            <div className="flex-1 justify-start flex-col md:mr-10 ">
              <h1>
                <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                    Explore The Crypto World. Buy  And Sell Cryptocurrencies easily on Krypto.
                </p>
                <button 
                type="button" onClick={connectwallet}
                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                
                >
                <p className='text-white text-base font-semibold'>Connect Wallet</p>

                </button>

              </h1>
              Send Crypto <br/>across the world


            </div>
        </div>


       </div>
    );
}
export default Welcome;