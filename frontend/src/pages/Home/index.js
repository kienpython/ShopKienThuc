import style from './Home.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function Home() {
    const [subject, setSubject] = useState([]);

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/subject/')
            .then((res) => {
                setSubject(res.data);
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
        <div className={cx('container')}>
            <div>
                <span>Luyện bài tập trắc nghiệm</span>
                <p>Lựa chọn lớp mà bạn muốn luyện tập</p>
            </div>

            {subject.map((subject) => (
                <div key={subject.idSubject} className={cx('list-subject')}>
                    <div className={cx('image')}>
                        <img src={objSubject[subject.nameSubject]} alt="Illustration" />
                    </div>
                    <div className={cx('contain')}>
                        <span>{subject.nameSubject}</span>
                        <p>{subject.describeSubject}</p>
                    </div>
                    <div className={cx('detail')}>Xem chi tiết</div>
                </div>
            ))}
        </div>
    );
}

export default Home;
