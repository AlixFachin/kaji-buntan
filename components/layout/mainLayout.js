import AppHeader from 'components/header.jsx'

export default function Layout({ children }) {

    return (
        <>
        <AppHeader />
        <div className="app-container">
            <main>
                { children }
            </main>
        </div>        
        </>

    )
}