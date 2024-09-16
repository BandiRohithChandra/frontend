
const DashboardPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('username')
        window.location.href = '/'
    }

    return (
        <div>
            <h1>Welcome to the Admin Panel</h1>
            <button onClick = {handleLogout}>Logout</button>
        </div>
    )
}

export default DashboardPage