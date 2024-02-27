// import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
// Khong can dang nhap van vao dc
const publicRoutes = [{ path: '/', component: Home }];
// Phai dang nhap moi vao duoc
const privateRoutes = [];
export { publicRoutes, privateRoutes };
