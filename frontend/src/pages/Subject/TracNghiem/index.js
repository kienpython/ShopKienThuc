import style from './TracNghiem.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Link, useParams } from 'react-router-dom';
const cx = classNames.bind(style);

function TracNghiem() {
    const { subject } = useParams();
    const { course } = useParams();

    return (
        <div>
            <div className={cx('container')}>
                <h5 className={cx('pt-4')}>Luyện BTTN môn {subject}</h5>
            </div>
            <div className={cx('d-flex row container align-center', 'container-wrap')}>
                <div className={cx('col-4 ')}>
                    <div className={cx('bg-white mb-4 rounded')}>
                        <span className={cx('title-trac-nghiem')}>Phần 1: Python cơ bản</span>
                        <div className={cx('d-flex flex-column')}>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                        </div>
                    </div>

                    <div className={cx('bg-white mb-4 rounded')}>
                        <span className={cx('title-trac-nghiem')}>Phần 1: Python cơ bản</span>
                        <div className={cx('d-flex flex-column')}>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                        </div>
                    </div>

                    <div className={cx('bg-white mb-4 rounded')}>
                        <span className={cx('title-trac-nghiem')}>Phần 1: Python cơ bản</span>
                        <div className={cx('d-flex flex-column')}>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('col-4')}>
                    <div className={cx('bg-white mb-4 rounded')}>
                        <span className={cx('title-trac-nghiem')}>Phần 1: Python cơ bản</span>
                        <div className={cx('d-flex flex-column')}>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                        </div>
                    </div>
                    <div className={cx('bg-white mb-4 rounded')}>
                        <span className={cx('title-trac-nghiem')}>Phần 1: Python cơ bản</span>
                        <div className={cx('d-flex flex-column')}>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                        </div>
                    </div>
                    <div className={cx('bg-white mb-4 rounded')}>
                        <span className={cx('title-trac-nghiem')}>Phần 1: Python cơ bản</span>
                        <div className={cx('d-flex flex-column')}>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                            <Link
                                to={`/courses/${course}/${subject}/BaiTap`}
                                className={cx('title-trac-nghiem-a')}
                                href="abc"
                                alt="abc"
                            >
                                Bài 1: Giới thiệu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={cx('col-4')}>
                    <div className={cx('bg-white mb-4 rounded', 'wrap-ranking')}>
                        <div className={cx('d-flex rounded', 'wrap-icon-title-ranking')}>
                            <img className={cx('img-ranking')} src={images.icon_ranking} alt="icon-ranking" />
                            <span className={cx('title-ranking')}>Bảng xếp hạng môn: {subject}</span>
                        </div>
                        <div className={cx('d-flex justify-content-center align-items-center pb-4')}>
                            <div className={cx('item-rank')}>
                                <div class={cx('icon-avata')}>
                                    <img src={images.download} alt="avata" />
                                    <span class={cx('rank-user')}>1</span>
                                </div>
                            </div>
                            <div
                                className={cx(
                                    'name-user flex-grow-1 d-flex justify-content-center text-center align-items-center',
                                )}
                            >
                                <span className={cx(' text-dark')}>Phạm Ngọc Kiên</span>
                            </div>
                            <div className={cx('point', ' flex-grow-1')}>
                                <span>10000</span>
                                <img src={images.logo} alt="logo" />
                            </div>
                        </div>
                        <div className={cx('d-flex justify-content-center align-items-center pb-4')}>
                            <div className={cx('item-rank')}>
                                <div class={cx('icon-avata')}>
                                    <img src={images.download} alt="avata" />
                                    <span class={cx('rank-user')}>1</span>
                                </div>
                            </div>
                            <div
                                className={cx(
                                    'name-user flex-grow-1 d-flex justify-content-center text-center align-items-center',
                                )}
                            >
                                <span className={cx(' text-dark')}>Phạm Ngọc Kiên</span>
                            </div>
                            <div className={cx('point', ' flex-grow-1')}>
                                <span>10000</span>
                                <img src={images.logo} alt="logo" />
                            </div>
                        </div>
                        <div className={cx('d-flex justify-content-center align-items-center pb-4')}>
                            <div className={cx('item-rank')}>
                                <div class={cx('icon-avata')}>
                                    <img src={images.download} alt="avata" />
                                    <span class={cx('rank-user')}>1</span>
                                </div>
                            </div>
                            <div
                                className={cx(
                                    'name-user flex-grow-1 d-flex justify-content-center text-center align-items-center',
                                )}
                            >
                                <span className={cx(' text-dark')}>Phạm Ngọc Kiên</span>
                            </div>
                            <div className={cx('point', ' flex-grow-1')}>
                                <span>10000</span>
                                <img src={images.logo} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TracNghiem;
