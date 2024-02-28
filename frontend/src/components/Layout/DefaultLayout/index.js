import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import Header from '~/components/Layout/components/Header';
import Footer from './Footer';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
