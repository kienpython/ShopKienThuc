import classNames from 'classnames/bind';
import style from './HorizontalSidebar.scss';
import { Link, useParams } from 'react-router-dom';
import Header from '~/components/Layout/components/Header';
import Footer from '~/components/Layout/DefaultLayout/components/Footer';
import SidebarHorizontal from '../../components/SidebarHorizontal';
import images from '~/assets/images';

const cx = classNames.bind(style);

function HorizontalSidebar() {
    const { subject } = useParams();
    const { course } = useParams();

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container-content-wrap')}>
                <div className={cx('container')}>
                    <SidebarHorizontal></SidebarHorizontal>
                </div>
                <div className={cx('container')}>
                    <h3 className={cx('pt-4')}>Luyện BTTN {subject}</h3>
                </div>
                <div className={cx('d-flex row container', 'container-menu-course')}>
                    <div className={cx('m-4 col-3')}>
                        <ul>
                            <li className={cx('')}>
                                <Link
                                    className={cx(
                                        'd-flex flex-column align-items-center justify-content-center text-center',
                                        'a-course',
                                    )}
                                    to={`/courses/${course}/${subject}/TracNghiem`}
                                >
                                    <img src={images.tracNghiem} alt="Trắc nghiệm" />
                                    <span className={cx('text-dark', 'span-course')}>Luyện bài tập trắc nghiệm</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('m-4 col-3')}>
                        <ul>
                            <li className={cx('')}>
                                <Link
                                    className={cx(
                                        'd-flex flex-column align-items-center justify-content-center text-center',
                                        'a-course',
                                    )}
                                    href="abc"
                                >
                                    <img src={images.lyThuyet} alt="Lý thuyết" />
                                    <span className={cx('text-dark', 'span-course')}>Ôn lý thuyết</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('m-4 col-3')}>
                        <ul>
                            <li className={cx('')}>
                                <Link
                                    className={cx(
                                        'd-flex flex-column align-items-center justify-content-center text-center',
                                        'a-course',
                                    )}
                                    href="abc"
                                >
                                    <img src={images.lamDeThi} alt="Đề thi" />
                                    <span className={cx('text-dark', 'span-course')}>Làm đề thi</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('m-4 col-3')}>
                        <ul>
                            <li className={cx('')}>
                                <Link
                                    className={cx(
                                        'd-flex flex-column align-items-center justify-content-center text-center',
                                        'a-course',
                                    )}
                                    href="abc"
                                >
                                    <img src={images.cacCauSai} alt="Các câu làm sai" />
                                    <span className={cx('text-dark', 'span-course')}>Các câu làm sai</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('m-4 col-3')}>
                        <ul>
                            <li className={cx('')}>
                                <Link
                                    className={cx(
                                        'd-flex flex-column align-items-center justify-content-center text-center',
                                        'a-course',
                                    )}
                                    href="abc"
                                >
                                    <img src={images.thiDau} alt="Thi đấu" />
                                    <span className={cx('text-dark', 'span-course')}>Thi đấu</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HorizontalSidebar;
