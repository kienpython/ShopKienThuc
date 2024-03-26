import style from './LyThuyet.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const cx = classNames.bind(style);

function LyThuyet() {
    const [contentSubjectAndTitleSubjects, setContentSubjectAndTitleSubjects] = useState({});
    const { subject } = useParams();
    const { course } = useParams();
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/contentSubjectAndTitleSubject/')
            .then((res) => {
                setContentSubjectAndTitleSubjects(res.data);
            })
            .catch(() => {});
    }, []);
    console.log(contentSubjectAndTitleSubjects);
    return (
        <div className={cx('d-flex row container align-center w-100', 'container-wrap-ly-thuyet')}>
            <div className={cx('bg-white mb-4 rounded w-100')}>
                <span className={cx('title-ly-thuyet', 'text-center')}>Phần 1: Python cơ bản</span>
                <div class={cx('wrap-link-bai-tap')}>
                    <div>
                        <Link className={cx('link-bai-tap')} to={`/courses/${course}/${subject}/BaiTap`}>
                            Bài tập vận dụng
                        </Link>
                    </div>
                </div>
                <div className={cx('d-flex flex-column w-100')}>
                    <a className={cx('title-ly-thuyet-a')} href="abc" alt="abc">
                        Bài 1: Giới thiệu
                    </a>
                    <a className={cx('title-ly-thuyet-a')} href="abc" alt="abc">
                        Bài 1: Giới thiệu
                    </a>
                    <a className={cx('title-ly-thuyet-a')} href="abc" alt="abc">
                        Bài 1: Giới thiệu
                    </a>
                </div>
                <div class={cx('wrap-link-bai-tap-end')}>
                    <div>
                        <Link className={cx('link-bai-tap-end')} to={`/courses/${course}/${subject}/BaiTap`}>
                            Bài tập vận dụng
                            <FontAwesomeIcon className={cx('icon-link-bai-tap')} icon={faAnglesRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LyThuyet;
