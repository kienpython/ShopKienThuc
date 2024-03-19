// import { HeaderOnly } from '~/components/Layout';
import HomePage from '~/pages/Home';
import LoginPage from '~/pages/Login';
import RegisterPage from '~/pages/Register';
import PythonSubject from '~/pages/Subject/Python';
import ContentCourse from '~/pages/Courses';
import TracNghiemSubject from '~/pages/Subject/TracNghiem';

// Khong can dang nhap van vao dc
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/subject/python', component: PythonSubject, layout: 'VerticalSidebar' },
    { path: '/courses/:course', component: ContentCourse, layout: 'VerticalSidebar' },
    { path: '/courses/:course/:subject', component: ContentCourse, layout: 'VerticalSidebar' },
    { path: '/courses/:course/:subject/:choose', component: TracNghiemSubject, layout: 'HorizontalSidebar' },
];
// Phai dang nhap moi vao duoc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
