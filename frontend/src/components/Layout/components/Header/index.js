import style from './Header.module.scss';
import classNames from 'classnames/bind';
import image from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

// bind giúp bind cái object này vào cx
// Giúp viết được classNames dùng -, vd post-item
const cx = classNames.bind(style);
console.log(image.logo);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="abc">
                        <img className={cx('img-logo')} src={image.logo} alt="Logo" />
                    </a>
                </div>
                <div className={cx('nav')}>
                    <nav>
                        <ul className={cx('list-style-menu')}>
                            <li className={cx('list-style-content')}>
                                <a className={cx('list-style-a')} href="abc">
                                    BackEnd <FontAwesomeIcon icon={faCaretDown} />
                                </a>
                                <ul className={cx('list-style-subject')}>
                                    <li className={cx('list-style-subject-li')}>
                                        <a className={cx('list-style-subject-a')} href="abc">
                                            Python
                                        </a>
                                    </li>
                                    <li className={cx('list-style-subject-li')}>
                                        <a className={cx('list-style-subject-a')} href="abc">
                                            Javascript
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className={cx('list-style-content')}>
                                <a className={cx('list-style-a')} href="abc">
                                    FrontEnd
                                </a>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </li>
                            <li className={cx('list-style-content')}>
                                <a className={cx('list-style-a')} href="abc">
                                    AI
                                </a>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={cx('header-not-login')}>
                    <div className={cx('dang-nhap')}>
                        <FontAwesomeIcon icon={faUser} />
                        <a className={cx('header-not-login-a')} href="abc">
                            Đăng nhập
                        </a>
                    </div>
                    <div>
                        <div className={cx('divider')}></div>
                    </div>
                    <div className={cx('dang-ky')}>
                        <FontAwesomeIcon icon={faSquareCheck} />
                        <a className={cx('header-not-login-a')} href="bcd">
                            Đăng ký
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
