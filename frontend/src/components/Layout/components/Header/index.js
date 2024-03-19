import axios from 'axios';
import style from './Header.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

// bind giúp bind cái object này vào cx
// Giúp viết được classNames dùng -, vd post-item
const cx = classNames.bind(style);
function Header() {
    const [course, setCourse] = useState([]);
    const [subject, setSubject] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/course/')
            .then((res) => {
                setCourse(res.data);
            })
            .catch(() => {});
    }, []);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/subject/')
            .then((res) => {
                setSubject(res.data);
            })
            .catch(() => {});
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to="/">
                        <img className={cx('img-logo')} src={image.logo} alt="Logo" />
                    </Link>
                </div>
                <div className={cx('nav')}>
                    <nav>
                        <ul className={cx('list-style-menu')}>
                            {course.map((item) => (
                                <>
                                    <li key={item.nameCourse} className={cx('list-style-content')}>
                                        <Link className={cx('list-style-a')} to={`/courses/${item.nameCourse}`}>
                                            {item.nameCourse} <FontAwesomeIcon icon={faCaretDown} />
                                        </Link>
                                        <ul className={cx('list-style-subject', 'w-100')}>
                                            {subject.map(
                                                (subject) =>
                                                    subject.idCourse === item.idCourse && (
                                                        <li
                                                            key={subject.nameSubject}
                                                            className={cx('list-style-subject-li')}
                                                        >
                                                            <Link
                                                                className={cx('list-style-subject-a')}
                                                                to={`/courses/${item.nameCourse}/${subject.nameSubject}`}
                                                            >
                                                                {subject.nameSubject}
                                                            </Link>
                                                        </li>
                                                    ),
                                            )}
                                        </ul>
                                    </li>
                                </>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className={cx('header-not-login')}>
                    <div className={cx('dang-nhap')}>
                        <FontAwesomeIcon icon={faUser} />
                        <Link className={cx('header-not-login-a')} to="/login">
                            Đăng nhập
                        </Link>
                    </div>
                    <div>
                        <div className={cx('divider')}></div>
                    </div>
                    <div className={cx('dang-ky')}>
                        <FontAwesomeIcon icon={faSquareCheck} />
                        <Link className={cx('header-not-login-a')} to="/register">
                            Đăng ký
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
