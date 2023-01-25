import Main from "@components/admin/main/Main"
import style from "./admin.module.scss"

export default function Admin() {
    return (
        <div className={style.container}>
            <h1>Admin</h1>
            <div className={style.admin__container}>
                <Main />
            </div>
        </div>
    )
}