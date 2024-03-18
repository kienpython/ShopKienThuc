import style from './Subject.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import axios from 'axios';

const cx = classNames.bind(style);

function PythonSubject() {
    // const [subject, setSubject] = useState([]);

    // useEffect(() => {
    //     axios
    //         .get('http://127.0.0.1:8000/api/subject/')
    //         .then((res) => {
    //             setSubject(res.data);
    //         })
    //         .catch(() => {});
    // }, []);

    return <div className={cx('container')}></div>;
}

export default PythonSubject;
