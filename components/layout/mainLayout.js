import AppHeader from 'components/header.jsx'
import { AuthProvider } from 'src/authContext';

export default function Layout({ children }) {

    return (
        <AuthProvider>
            <AppHeader />
                <div className="app-container">
                    <main>
                        { children }
                    </main>
                </div>
        </AuthProvider>
    )
}