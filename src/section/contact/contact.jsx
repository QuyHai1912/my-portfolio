import styleContact from './contact.module.scss';
import { mySocials, inforContacts } from './dataContact';
import contactImg from '../../assets/image/contact.png';



function Contact () {


    return (
    <div id='contact' className={` ${ styleContact.contact } `}>
        <div className={`${styleContact.contactContain}`}>
            <div className={ styleContact.contactSocial}>
                <form className={ styleContact.contactFormSocial}>
                    <div className={ styleContact.contactYourInfor}>
                        <input className={ styleContact.contactYourName } placeholder='Last Name'/>
                        <input className={ styleContact.contactYourName } placeholder='First Name'/>
                    </div>
                    <input className={ styleContact.contactYourEmail} placeholder='Email'/>
                    <textarea className={styleContact.contactYourMess } placeholder='Your message... '/>
                    <button type='button' className={ styleContact.contactBtnSubmit }>Send Message</button>
                </form>
            </div>

            <div className={ styleContact.contactMysocial}>
                <img className={styleContact.contactMysocialImg} src={ contactImg }></img>
                <h2 className={ styleContact.contactMysocialHead }>Contact me</h2>
                <p className={ styleContact.contactMysocialText }>Feel free to reach out to me anytime. I am here to answer your questions, listen to your feedback, and provide the support you need. Your satisfaction is my priority, and I am always ready to help.</p>
                <nav className={ styleContact.contactMysocialList }>
                    {inforContacts.map((inforContact) => {
                        return (
                        <li 
                            key={inforContact.id}
                            className={ styleContact.contactMysocialItem }
                        >
                            <i className={`${inforContact.icon} ${styleContact.contactMysocialIcon}`}></i>
                            {inforContact.infor}
                        </li>
                        )
                    })}
                </nav>
                <nav className={ styleContact.contactMysocialIcons }>
                    {mySocials.map((mySocial) => {

                        return (
                            <li
                                className={ styleContact.contactMysocialIconsItem }
                                key={mySocial.id}
                            >
                                <a 
                                    className={ styleContact.contactMysocialIconLink}
                                    href={mySocial.link}
                                >
                                    <i className={`${mySocial.icon} ${styleContact.contactMysocialLinkicon}`}></i>
                                </a>
                            </li>
                        )
                    })}
                </nav>
            </div>
        </div>
    </div>)
}

export default Contact