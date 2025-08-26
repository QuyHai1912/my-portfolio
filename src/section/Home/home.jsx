import styleHome from './home.module.scss';
import img1 from '../../assets/image/homeImageDhcn.png';
import img2 from '../../assets/image/homeImageDev.avif';
import img3 from '../../assets/image/homeImageHobbie.jpg';
import img4 from '../../assets/image/homeImageMain.png';
import bgvideo from '../../assets/videos/backgroundHome.mp4';
import Intersect from '../../component/Intersect'
import { useState } from 'react';

const imagesHome = [
    {
        id: 1,
        title: 'School',
        img: img1,
        text: 'I am currently studying at Hanoi University of Industry, majoring in Information Technology (Intake 2022–2026). My current GPA is 3.34/4.0, which reflects my consistent effort and commitment to learning throughout my academic journey.'
    },
    {
        id: 2,
        title: 'Web developer',
        img: img2,
        text: 'I aspire to become a web developer to create user-friendly, flexible and innovative websites. My goal is to continuously improve my skills, contribute to meaningful projects and build solutions that bring real value to users'
    },
    {
        id: 3,
        title: 'Hobbies',
        img: img3,
        text: 'I am a sports enthusiast. I like playing soccer, volleyball and shuttlecock. Besides, I also like listening to music while working, cooking or playing games, of course the type of music depends on the situation. Sometimes it is rock music, sometimes it is movie music or remix music. And sometimes I also like to go out alone.'
    },
    {
        id: 4,
        title: 'Nguyễn Văn Quý',
        img: img4,
        text: 'Welcome to my personal portfolio. This is a website full of information that I have written to introduce myself. Please select the corresponding photos to see an overview of me.'
    },

]


function Home () {
    const [imgActive, setImgActive] = useState(4);

    return (
        <div id='home' className= { styleHome.homeContain}>
            <div className='l-6'>
                {
                imagesHome.map((image) => {
                    return (
                        <div 
                            key={image.id}
                            style={{backgroundImage: `url(${image.img})`}}
                            // style={{backgroundColor: 'red'}}
                            className= {`${styleHome.homeContainImg} ${imgActive === image.id ? styleHome.homeContainImgActive : ''}`}
                            onClick={() => setImgActive(image.id)}
                        >
                            
                        </div>
                    )
                })  
            }
            </div>
            <div className={ `${styleHome.homeText} l-6` }>
                { imagesHome.map((image, id) => {
                    return (
                        <div key={id} className={ `${image.id === imgActive ? styleHome.homeTextItem : 'hide'} ${ styleHome.fadeIn }`} >   
                            <h2 className={ styleHome.homeTitle }>{image.id === imgActive ? image.title : ''}</h2>
                            <p 
                                className={ styleHome.homeTextDetail }
                            >
                                {image.id === imgActive ? image.text : ''}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


function BackgroundHome () {


    return (
        <div className={ styleHome.homeBackground}>
            <Intersect />
            <video className={styleHome.homeBackgroundVideo} autoPlay muted loop playsInline >
                <source src={bgvideo} type='video/mp4'/>
            </video>
            <Home />
        </div>
    )
}

export default BackgroundHome;