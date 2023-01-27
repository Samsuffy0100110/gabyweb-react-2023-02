import { Main } from "@pages/admin/main/Main";
import style from "./admin.module.scss";

export function Admin() {
    return (
        <div className={style.container}>
            <div className={style.admin__container}>
                <Main />
            </div>
        </div>
    )
}