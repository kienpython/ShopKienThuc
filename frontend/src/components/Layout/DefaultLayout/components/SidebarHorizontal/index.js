import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import style from './SidebarHorizontal.module.scss';
import images from '~/assets/images';
const cx = classNames.bind(style);

function SidebarHorizontal() {
    const [subjects, setSubjects] = useState([]);
    const { course } = useParams();
    var idCourse = 1;
    var nameCourse = '';
    switch (course) {
        case 'BackEnd':
            idCourse = 1;
            nameCourse = 'BackEnd';
            break;
        case 'FrontEnd':
            idCourse = 2;
            nameCourse = 'FrontEnd';
            break;
        case 'AI':
            idCourse = 3;
            nameCourse = 'AI';
            break;
        default:
            console.log('Default action');
    }
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/subject/')
            .then((res) => {
                setSubjects(res.data);
            })
            .catch(() => {});
    }, []);

    const objSubject = {
        Python: images.logoPython,
        Javascript: images.logoJS,
        HTML: images.logoHTML,
        CSS: images.logoCSS,
        'Data Analyst': images.logoDA,
        'Computer Vision': images.logoCV,
    };
    return (
        <div className={cx('d-flex justify-content-center', "container-menu-subject")}>
            {subjects.map((subject) => (
                <>
                    <div className={cx('container-subject')} key={subject.idSubject}>
                        <NavLink
                            className={(nav) =>
                                cx('container-fluid d-flex justify-content-between align-items-center', 'sidebar', {
                                    active: nav.isActive,
                                })
                            }
                            to={`/courses/${nameCourse}/${subject.nameSubject}`}
                        >
                            <img className={cx('logoSubject')} src={objSubject[subject.nameSubject]} alt="logo"></img>
                            <span className={cx('span-sidebar')}>{subject.nameSubject}</span>
                        </NavLink>
                    </div>
                </>
            ))}
        </div>
    );
}

export default SidebarHorizontal;
