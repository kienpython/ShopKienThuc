import classNames from 'classnames/bind';
import { useState } from 'react';
import axios from 'axios';
import style from './Login.module.scss';
const cx = classNames.bind(style);

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/studentsAccount/', {
                username: username,
                password: password,
            });

            console.log('Đăng nhập thành công:', response.data);
        } catch (error) {
            console.error('Đăng nhập thất bại:', error.response.data);
        }
    };

    return (
        <div className={cx('contain-login')}>
            <div className={cx('element-space')}>
                <div className={cx('text-center', 'login-title')}>Đăng nhập</div>
                <div className={cx('text-center', 'login-outside')}>
                    <button className={cx('btn-login-facebook')}>Đăng nhập bằng Facebook</button>
                    <button className={cx('btn-login-gmail')}>Đăng nhập bằng Google</button>
                </div>
                <div className={cx('text-center', 'login-or')}>Hoặc</div>
                <input
                    className={cx('login-input')}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Tên tài khoản"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className={cx('login-input')}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={cx('user-remember-forget')}>
                    <div>
                        <input type="checkbox" name="remember" id="remember" />
                        <label htmlFor="remember">Nhớ mật khẩu</label>
                    </div>
                    <div className={cx('user-forget')}>
                        <a href="/">
                            <button type="button">Quên mật khẩu</button>
                        </a>
                    </div>
                </div>
                <div className={cx('text-center', 'btn-login')}>
                    <button type="submit" onClick={handleLogin}>
                        Đăng nhập
                    </button>
                </div>
            </div>
            <div className={cx('text-center', 'container-hotline')}>
                <div>
                    <span>Chưa có tài khoản?</span>
                    <a href="/">Đăng ký</a>
                </div>
                <div>
                    <span>Hotline hỗ trợ: </span>
                    <a href="/">0836759850</a>
                </div>
            </div>
        </div>
    );
}
export default Login;
