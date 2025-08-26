import headerStyle from '../style/Header.module.scss';
import MyCV from '../../src/assets/image/MyCV.pdf';


const navlist = [
    {
        label: 'Home',
        id: 'home'
    },
    {
        label: 'Skills',
        id: 'skill'
    },
    {
        label: 'Project',
        id: 'project'
    },
    {
        label: 'Contact',
        id: 'contact'
    },
]


function Header () {

    const handleGo = (id) => {
        const el = document.getElementById(id);
        if(!el) return;
        el.scrollIntoView({behavior: 'smooth', block: 'start'})
    }

    return (
        <div className={ headerStyle.header }>
            <a 
                href={ MyCV }
                download
                className={ headerStyle.myCV }
                aria-label="Download my CV (PDF)"
            >
                My CV  
                <i class="fa-solid fa-download"></i>
            </a>

            <ul className={ headerStyle.navList } >
                {
                    navlist.map((item, index) => {
                        return (
                            <li 
                                key={index}
                                className={ headerStyle.navItem }
                                onClick={() => handleGo(item.id)}
                                >
                                    {item.label}
                            </li>
                            )
                    })
                }
            </ul>
        </div>
    )
}

export default Header;