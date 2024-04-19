import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/authcontext';
import { publicRoutes } from '~/routes';
import {
    HeaderAndFooter,
    VerticalSidebar,
    HorizontalSidebar,
    HorizontalSidebarRight,
    HeaderOnly,
} from '~/components/Layout';
import { Fragment } from 'react';
function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App" color="--primary">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            // eslint-disable-next-line no-lone-blocks
                            {
                                /* route.layout === null ? Fragment : DefaultLayout; nếu route có thuộc tính layout bằng null => bỏ header và footer */
                            }
                            const Layout =
                                route.layout === 'VerticalSidebar'
                                    ? VerticalSidebar
                                    : route.layout === 'HorizontalSidebar'
                                    ? HorizontalSidebar
                                    : route.layout === 'HorizontalSidebarRight'
                                    ? HorizontalSidebarRight
                                    : route.layout === 'OnlyHeader'
                                    ? HeaderOnly
                                    : route.layout === 'Admin'
                                    ? Fragment
                                    : HeaderAndFooter;
                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
