// import { HeaderOnly } from '~/components/Layout';
import HomePage from '~/pages/Home';
import LoginPage from '~/pages/Login';
import RegisterPage from '~/pages/Register';
import ContentCourse from '~/pages/Courses';
import { TracNghiemSubject, LyThuyetSubject, Exercise, DoExercise, MenuLyThuyet } from '~/pages/Subject';

// Khong can dang nhap van vao dc
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/courses/:course', component: ContentCourse, layout: 'VerticalSidebar' },
    { path: '/courses/:course/:subject', component: ContentCourse, layout: 'VerticalSidebar' },
    { path: '/courses/:course/:subject/TracNghiem', component: TracNghiemSubject, layout: 'HorizontalSidebar' },
    { path: '/courses/:course/:subject/MenuLyThuyet', component: MenuLyThuyet, layout: 'HorizontalSidebar' },
    { path: '/courses/:course/:subject/LyThuyet', component: LyThuyetSubject, layout: 'HorizontalSidebarRight' },
    { path: '/courses/:course/:subject/BaiTap', component: Exercise },
    { path: '/courses/:course/:subject/LamBaiTap', component: DoExercise, layout: 'OnlyHeader' },
];
// Phai dang nhap moi vao duoc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
