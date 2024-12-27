import 'bootstrap/dist/css/bootstrap.css';
import SecondPageStyle from './SecondPage.module.css'
import img from './img2.png'
import { useNavigate } from 'react-router-dom';


function SecondPage(){
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/thirdPage" );
  };

  return (
    <div className={`d-flex flex-column position-relative text-white ${SecondPageStyle.container}`}>
      <div className="d-flex justify-content-space-between w-100 h-100 bg-black">
        <div className='w-50 pt-5'>
          <p>
            <span className={`${SecondPageStyle.HBD} `}>Happy Birthday Bhava ...😘<br /></span> 
            Wish You a Many More Happy Return of the Day Bhava 💕!!! <br />
            Happy Birthday <span className={SecondPageStyle.name}>Santudi</span> 
            Your Are So Ama-z-ing brother🤩 You've always been my partner in Success, My biggest Supporter 😊and My Source of Endless Laughter😂.
            Having a brother like you 😘means never having to face life alone.🥰 May your day be filled with laughter, love❤️, and all the things that make you happy!...🥰<br />
            I pray to <span className={SecondPageStyle.krishna} >Krishna </span>that this year opens doors to incredible opportunities for you and blesses you with success in your career and the perfect job.
            Wishing you a very Happy Birthday My...  may all your dreams come true!🥰💫....
          </p>
        </div>
        <div className='w-50 pt-5 d-flex justify-content-center align-items-center'>
        <img 
            src={img} 
            alt="img" 
            className="img-fluid" 
            style={{ maxWidth: '86%', maxHeight: '70vh' }} 
          />
        </div>
      </div>

      <button 
        className={`btn btn-outline-light position-absolute bottom-0 end-0 m-3 
             btn-sm btn-md btn-lg ${SecondPageStyle.btn1}`}

        onClick={handleButtonClick}
      >
       Pieces of Our Beautiful Past!!!
      </button>
    </div>
  );
};

export default SecondPage;
