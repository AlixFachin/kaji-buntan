import AppHeader from 'components/header.jsx'
import AppFooter from 'components/footer.jsx'
// import Sidebar from 'components/sidebar.jsx';
import { AuthProvider } from 'src/authContext';

export default function Layout({ children }) {

    return (
        <AuthProvider>
            <AppHeader />
                <div className="app-container">                
                    {/* <Sidebar />                     */}
                    <main>
                        { children }
                    </main>
                </div>
            <AppFooter />
        </AuthProvider>
    )
}