import { Main } from "@pages/admin/main/Main";
import style from "./admin.module.scss";

export function Admin() {
    return (
        <div className={style.admin_container}>
            <Main />
        </div>
    )
}