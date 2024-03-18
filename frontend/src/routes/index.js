// import { HeaderOnly } from '~/components/Layout';
import HomePage from '~/pages/Home';
import LoginPage from '~/pages/Login';
import RegisterPage from '~/pages/Register';
import PythonSubject from '~/pages/Subject/Python';
import BackendCourse from '~/pages/Courses/Backend';

// Khong can dang nhap van vao dc
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/subject/python', component: PythonSubject, layout: 'full' },
    { path: '/courses/:course', component: BackendCourse, layout: 'full' },
];
// Phai dang nhap moi vao duoc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
