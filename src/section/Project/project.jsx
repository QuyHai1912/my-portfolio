import { useState } from "react";
import styleProject from './project.module.scss';
import { myProject } from './dataProject';

const language = ['Việt Nam', 'English'];

function Project () {
    const [projectActive, setProjectActive] = useState(1);
    const [textlanguage, setTextLanguage] = useState(language[1]);

    function handleTranfer() {
        return setTextLanguage((prev) => (prev === language[0] ? language[1] : language[0]))
    }

    return (
        <div id="project" className={ styleProject.projectMain }>
            <div className={styleProject.projectGradient }></div>
            <nav className={ styleProject.projectList }>
                {myProject.map((project, index) => {

                    if(project.id === projectActive ) {
                        return (
                            <li 
                                className={ projectActive === project.id ? styleProject.projectItem : 'hide'}    
                                key={ index }
                            >
                                <div 
                                    className={ styleProject.projectItemBg}
                                    style={{ backgroundImage: `url(${project.background})` }}
                                ></div>
                                <div className={ `${styleProject.projectItemInfor} l-5`}>
                                    <h2 className={ styleProject.projectInforName }>{ project.name }</h2>
                                    <p className={styleProject.projectInforLang}>{`Language: ${project.language}`}</p>
                                    <p className={ styleProject.projectInforText}>{ textlanguage === 'Việt Nam' ? project.textVN : project.textEL }</p>
                                    <button className={ styleProject.projectInforTranfer} onClick={handleTranfer}> 
                                        <i className={`fa-solid fa-arrow-right ${styleProject.iconTranfer}`}></i>
                                        {textlanguage === 'Việt Nam' ? 'English' : 'Việt Nam'}
                                    </button>
                                    <span className={ styleProject.projectInforDate}>{ `Date: ${ project.date } ` }</span>
                                    <a className={ styleProject.projectInforLink} href={ project.link }>Project <i class="fa-solid fa-arrow-up-from-bracket"></i> </a>
                                </div>
                                <nav className={ `${styleProject.projectItems} l-7`}>
                                    {myProject.map((project) => {
                                        return (
                                            <li 
                                                key={ project.id }
                                                className={ `${styleProject.projectItemImg} ${projectActive === project.id ? styleProject.projectItemImgActive : ''}`}
                                                style={{backgroundImage: `url(${project.img})`}}
                                                onClick={() => setProjectActive(project.id)}
                                            ></li>
                                        )
                                    })}
                                </nav>
                            </li>
                    )}
                    
                })}
            </nav>
        </div>
    )
}

export default Project;