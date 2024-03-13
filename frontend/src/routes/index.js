// import { HeaderOnly } from '~/components/Layout';
import HomePage from '~/pages/Home';
import LoginPage from '~/pages/Login';
import RegisterPage from '~/pages/Register';
// Khong can dang nhap van vao dc
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
];
// Phai dang nhap moi vao duoc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
