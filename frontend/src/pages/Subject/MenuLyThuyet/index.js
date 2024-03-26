import axios from 'axios';
import style from './MenuLyThuyet.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const cx = classNames.bind(style);
function TracNghiem() {
    const [contentSubjectAndTitleSubjects, setContentSubjectAndTitleSubjects] = useState([]);
    const { subject, course } = useParams();
    let total = 0;
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/contentSubjectAndTitleSubject/')
            .then((res) => {
                setContentSubjectAndTitleSubjects(res.data);
            })
            .catch(() => {});
    }, []);
    return (
        <div>
            <div className={cx('container')}>
                <h5 className={cx('pt-4')}>Ôn lý thuyết môn {subject}</h5>
            </div>
            <div className={cx('d-flex row container align-center', 'container-wrap')}>
                {contentSubjectAndTitleSubjects &&
                    contentSubjectAndTitleSubjects.title_contents &&
                    contentSubjectAndTitleSubjects.title_contents.map((title_content) => (
                        <div className={cx('col-4 ')}>
                            <div className={cx('bg-white mb-4 rounded')}>
                                <span className={cx('title-trac-nghiem')}>
                                    Phần {title_content.idTitleContent}: {title_content.titleContent}
                                </span>
                                <div className={cx('d-flex flex-column')}>
                                    <div className={cx('d-none')}>{(total = 0)}</div>
                                    {contentSubjectAndTitleSubjects &&
                                        contentSubjectAndTitleSubjects.content_subjects &&
                                        contentSubjectAndTitleSubjects.content_subjects.map(
                                            (content_subject, index) =>
                                                content_subject.idTitleContent === title_content.idTitleContent &&
                                                ((total += 1),
                                                (
                                                    <Link
                                                        to={`/courses/${course}/${subject}/LyThuyet`}
                                                        className={cx('title-trac-nghiem-a')}
                                                    >
                                                        {total}. {content_subject.nameContent}
                                                    </Link>
                                                )),
                                        )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default TracNghiem;
