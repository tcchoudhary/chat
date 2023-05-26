import {Container,Row,Col,} from 'react-bootstrap';
import './Header.css';
import {Videocall,Voicecall,Saccess,Back,displayData,camera,file,emot} from './script';
import './script';






const Header = ()=>{
    const design = (
           <>
            <div className="header">
                <div className="user-info">
                    <i className="fa fa-regular fa-arrow-left" onClick={Back} ></i>
                    <i className="fa-solid fa-user user-icon"></i>
                    <h5>user name</h5>
                </div>
                <div className="app-icon">
                    <i className="fa fa-phone" onClick={Voicecall}></i>
                    <i className="fa fa-solid fa-video icon" onClick={Videocall}></i>
                    <i className="fa fa-ellipsis-vertical" onClick={Saccess}></i>
                </div>
            </div>
            <div className="chat-container">
                <form id='form'>
                    <div className="text-area">
                        <div className="textarea ">
                            <p  id='msg'></p>
                        </div>
                    </div>
                    <div className="input">
                        <i className="fa-sharp fa-solid fa-face-smile" onClick={emot}></i>
                        <input type="text" name="" id="text" autoComplete='off'/>
                        <i className="fa fa-camera" onClick={camera}></i>
                        <i className="fa-solid fa-paperclip" onClick={file}></i>
                        <button  className='button' onClick={displayData}>send</button>
                    </div>
                </form>
            </div>
           </>
            
    );
    return design;
}




export default Header;
