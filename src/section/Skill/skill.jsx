    import { useState, useEffect, useRef } from "react";
    import { groupSkills, skills } from './dataSkill';
    import '../../style/grid.css';
    import styleSkill from './skill.module.scss';
    import Intersect from '../../component/Intersect';


    function Skill () {
        const [groupSkillActive, setGroupSkillActive] = useState('All');
        const titleText = useRef(null);

        useEffect(() => {
            const headText = titleText.current;
            console.log(headText);
            const headAnimation = setInterval(() => {

                headText.classList.toggle(styleSkill.skillTitleAni);
            }, 1000)

            return () => clearInterval(headAnimation);
        },[])


        return (
            <div id="skill" className={ styleSkill.skill }>
            <Intersect />
                <div className={ styleSkill.skillContain}>
                    <h2 
                        className={ styleSkill.skillTitle}
                        ref={titleText}
                    >Skills Developer</h2>
                    <p className={ styleSkill.titleText }>The essential skills I use to bring ideas to life through clean and creative web design.</p>
                    <nav className={ styleSkill.navGroup }>
                        {groupSkills.map((groupSkill, index) => {
                            return (
                            <li 
                                key={index}
                                onClick={() => setGroupSkillActive(groupSkill.name)}
                                className= {`${styleSkill.groupItem} ${groupSkillActive === groupSkill.name ? styleSkill.groupItemActive : ''}`}
                            >
                                {groupSkill.name}
                                <div className={groupSkillActive === groupSkill.name ? 'navBar' : 'hide'}></div>
                            </li>)
                        })}
                    </nav>
                    
                    <nav className={ `${ styleSkill.listSkill } row `}>
                        {skills.map((skill, index) => {
                            
                            return (
                                <li
                                    key={index}
                                    className={`${groupSkillActive === 'All' || groupSkillActive === skill.group ? styleSkill.listSkillItems : 'hide'} col l-2-4` }
                                >
                                    <div className={ styleSkill.listSkillItem }>
                                        <span className={ styleSkill.listSkillItemIcons }><i className={ `${skill.icon} ${styleSkill.listSkillItemIcon}` }></i></span>
                                        <p className={ styleSkill.listSkillItemName }>{skill.name}</p>
                                        <span className={ styleSkill.listSkillItemLevel }>{skill.level}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </nav>



                </div>
            </div>
        )
    }

    export default Skill;