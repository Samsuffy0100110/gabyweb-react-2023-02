import SideBar from "@components/admin/SideBar"
import Main from "@components/admin/Main"

export default function Admin() {
    return (
        <div className="admin">
            <h1>Admin</h1>
            <div className="admin__container">
                <SideBar />
                <Main />
            </div>
        </div>
    )
}