import AppHeader from '../header'
import AppFooter from '../footer'
import Sidebar from '../sidebar';
import { AuthProvider } from '../../context/authContext';

export default function Layout({ children }) {

    return (
        <AuthProvider>
            <AppHeader />
                <div className="app-container">                
                    <Sidebar />
                    { children }
                </div>
            <AppFooter />
        </AuthProvider>
    )
}