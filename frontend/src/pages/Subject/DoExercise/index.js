import { Link, useParams } from 'react-router-dom';
import style from './DoExercise.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAnglesRight,
    faCircleExclamation,
    faDownload,
    faFilePen,
    faLightbulb,
    faPenToSquare,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function DoExercise() {
    const { course } = useParams();
    const { subject } = useParams();
    return (
        <div className={cx('container-fluid  p-4', 'container-wrap-lam-bai-tap')}>
            <div className={cx('row container')}>
                <div className={cx('bg-white mb-4 rounded col-10', 'wrap-content-lam-bai-tap')}>
                    <div>
                        <div className={cx('d-flex justify-content-between pt-3')}>
                            <span className={cx('span-nhan-biet')}>Câu 1</span>
                            <div className={cx('div-nhan-biet')}>Nhận biết</div>
                        </div>
                        <div className={cx('pt-2')}>
                            <span className={cx('span-cau-hoi')}>Cho abc</span>
                        </div>
                        <div className={cx('pt-3 pb-5')}>
                            <div className={cx('row')}>
                                <div className={cx('col-6')}>A. 123</div>
                                <div className={cx('col-6')}>B. 456</div>
                                <div className={cx('col-6')}>C. 789</div>
                                <div className={cx('col-6')}>D. 101112</div>
                            </div>
                        </div>
                        <div
                            className={cx('d-flex justify-content-center pb-4 pt-4', 'wrap-suggest-and-next-question')}
                        >
                            <div className={cx('wrap-button-suggest')}>
                                <FontAwesomeIcon icon={faLightbulb} className={cx('icon-suggest')} />
                                Gợi ý
                            </div>
                            <div className={cx('wrap-button-next-question')}>
                                Câu hỏi tiếp theo{' '}
                                <FontAwesomeIcon icon={faAnglesRight} className={cx('icon-next-question')} />
                            </div>
                        </div>
                        <div className={cx('d-flex justify-content-between', 'wrap-infomation-icon')}>
                            <div className={cx('d-flex')}>
                                <div>
                                    <FontAwesomeIcon icon={faFilePen} className={cx('icon-next-answered')} />
                                    4723 lượt trả lời
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faXmark} className={cx('icon-next-wrong-answered')} />
                                    12% trả lời sai
                                </div>
                            </div>
                            <div className={cx('d-flex')}>
                                <div>
                                    <FontAwesomeIcon icon={faDownload} className={cx('icon-next-save')} />
                                    Lưu bài
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faPenToSquare} className={cx('icon-next-note')} />
                                    Note
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faCircleExclamation} className={cx('icon-next-error')} />
                                    Báo lỗi
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('col-2', 'wrap-point')}>
                    <div>
                        <div className={cx('wrap-zone-point')}>
                            <span className={cx('h-100 p-1 text-center text-light', 'content-pointed')}>
                                Số điểm đạt được
                            </span>
                            <span className={cx('h-100 text-center p-3')}>0/100</span>
                        </div>
                    </div>
                    <div>
                        <div className={cx('wrap-zone-point', 'mt-3')}>
                            <span className={cx('h-100 p-1 text-center', 'content-time')}>Thời gian làm bài</span>
                            <span className={cx('h-100 text-center p-3')}>00:00:47</span>
                        </div>
                    </div>
                    <div>
                        <div className={cx('wrap-zone-point', 'mt-3')}>
                            <span className={cx('h-100 p-1 text-center', 'content-point-answered')}>Số câu đã làm</span>
                            <span className={cx('h-100 text-center p-3')}>1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoExercise;
