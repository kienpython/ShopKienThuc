import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import style from './SidebarHorizontalRight.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function SidebarHorizontalRight() {
    const [subjects, setSubjects] = useState([]);
    // const [course, setCourse] = useState([]);
    const { subject } = useParams();
    const [isHidden, setIsHidden] = useState(Array(7).fill(false));

    const handleToggle = (index) => {
        const newIsHidden = [...isHidden];
        newIsHidden[index - 1] = !newIsHidden[index - 1];
        setIsHidden(newIsHidden);
    };
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/subject/')
            .then((res) => {
                setSubjects(res.data);
            })
            .catch((error) => {
                console.error('Error fetching subjects:', error);
            });
    }, []);

    // useEffect(() => {
    //     if (subjects.length > 0) {
    //         const foundSubject = subjects.find((item) => item.nameSubject === subject);
    //         if (foundSubject) {
    //             axios
    //                 .get(`http://127.0.0.1:8000/api/course/?idCourse=${foundSubject.idCourse}`)
    //                 .then((res) => {
    //                     setCourse(res.data);
    //                 })
    //                 .catch((error) => {
    //                     console.error('Error fetching courses:', error);
    //                 });
    //         }
    //     }
    // }, [subjects, subject]);

    return (
        <div className={cx('d-flex justify-content-center flex-column', 'container-menu-subject-ly-thuyet')}>
            {subjects.map((subjectItem) => (
                <div key={subjectItem.idSubject}>
                    <div
                        className={cx('container-subject-ly-thuyet', 'mb-1')}
                        onClick={() => handleToggle(subjectItem.idSubject)}
                    >
                        <div className={cx('d-flex w-100 p-2')}>
                            <span className={cx('span-sidebar')}>
                                {subjectItem.nameSubject} CHƯƠNG 1: ỨNG DỤNG ĐẠO HÀM ĐỂ KHẢO SÁT VÀ VẼ ĐỒ THỊ HÀM SỐ
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faCircleChevronRight} />
                            </span>
                        </div>
                    </div>
                    {isHidden[subjectItem.idSubject - 1] && (
                        <div className={cx('wrap-menu-ly-thuyet', 'container')}>
                            <NavLink className={cx('abc')} to="#" alt="...">
                                1bcdassssssssssssssssssssssssssssssss
                            </NavLink>
                            <NavLink className={cx('abc')} to="#" alt="...">
                                2bcdassssssssssssssssssssssssssssssss
                            </NavLink>
                            <NavLink className={cx('abc')} to="#" alt="...">
                                3bcdassssssssssssssssssssssssssssssss
                            </NavLink>
                            <NavLink className={cx('abc')} to="#" alt="...">
                                4bcdassssssssssssssssssssssssssssssss
                            </NavLink>
                            <NavLink className={cx('abc')} to="#" alt="...">
                                6bcdassssssssssssssssssssssssssssssss
                            </NavLink>
                            <NavLink className={cx('abc')} to="#" alt="...">
                                6bcdassssssssssssssssssssssssssssssss
                            </NavLink>
                            <NavLink className={cx('abc')} to="#" alt="...">
                                7bcdassssssssssssssssssssssssssssssss
                            </NavLink>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default SidebarHorizontalRight;
