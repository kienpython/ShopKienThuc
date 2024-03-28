import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import style from './SidebarHorizontalRight.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function SidebarHorizontalRight() {
    const [contentSubjectAndTitleSubjects, setContentSubjectAndTitleSubjects] = useState([]);
    const [isHidden, setIsHidden] = useState(Array(7).fill(false));
    const { course, subject } = useParams();
    let total = 0;
    const handleToggle = (index) => {
        const newIsHidden = [...isHidden];
        newIsHidden[index - 1] = !newIsHidden[index - 1];
        setIsHidden(newIsHidden);
    };

    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/contentSubjectAndTitleSubject/')
            .then((res) => {
                setContentSubjectAndTitleSubjects(res.data);
            })
            .catch((error) => {
                console.error('Error fetching subjects:', error);
            });
    }, []);

    return (
        <div className={cx('d-flex justify-content-center flex-column', 'container-menu-subject-ly-thuyet')}>
            {contentSubjectAndTitleSubjects &&
                contentSubjectAndTitleSubjects.content_subjects &&
                contentSubjectAndTitleSubjects.title_contents.map((title_content) => (
                    <div key={title_content.idContentSubject}>
                        <div
                            className={cx('container-subject-ly-thuyet', 'mb-1')}
                            onClick={() => handleToggle(title_content.idTitleContent)}
                        >
                            <div className={cx('d-flex w-100 p-2')}>
                                <span className={cx('span-sidebar')}>
                                    CHƯƠNG {title_content.idTitleContent}: {title_content.titleContent}
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faCircleChevronRight} />
                                </span>
                            </div>
                        </div>
                        <div className={cx('d-none')}>{(total = 1)}</div>
                        {isHidden[title_content.idTitleContent - 1] && (
                            <div className={cx('wrap-menu-ly-thuyet', 'container')}>
                                {contentSubjectAndTitleSubjects.content_subjects.map(
                                    (content_subject) =>
                                        content_subject.idTitleContent === title_content.idTitleContent && (
                                            <NavLink
                                                className={cx('abc')}
                                                to={`/courses/${course}/${subject}/LyThuyet/${content_subject.idContentSubject}/${total}`}
                                                alt="..."
                                            >
                                                {total}. {content_subject.nameContent}
                                                <div className={cx('d-none')}>{(total += 1)}</div>
                                            </NavLink>
                                        ),
                                )}
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
}

export default SidebarHorizontalRight;
