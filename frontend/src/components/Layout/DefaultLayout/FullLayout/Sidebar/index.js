import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);

function Sidebar() {
    const [subjects, setSubjects] = useState([]);
    const { course } = useParams();
    var idCourse = 1;
    switch (course) {
        case 'BackEnd':
            idCourse = 1;
            break;
        case 'FrontEnd':
            idCourse = 2;
            break;
        case 'AI':
            idCourse = 3;
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
    return (
        <div>
            {subjects.map((subject) => (
                <>
                    {subject.idCourse === idCourse ? (
                        <div
                            key={subject.idSubject}
                            className={cx(
                                'container-fluid mt-2 d-flex justify-content-between align-items-center',
                                'sidebar',
                            )}
                        >
                            <span className={cx('span-sidebar')}>{subject.nameSubject}</span>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    ) : null}
                </>
            ))}
        </div>
    );
}

export default Sidebar;
