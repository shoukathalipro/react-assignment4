import React from "react";
import BasicTable from "./BasicTable";
import styles from '../AppStyles.module.css';




const Students = () => {
    return(
        <div>
            <div className={styles.students_Header}>
                <div><h1 className={styles.students_Heading}>Students Details</h1></div>
                <div><button className={styles.students_Add_Btn}>Add New Student</button></div>
            </div>
            <div className={styles.students_Body}>
                <BasicTable/>
            </div>
        </div>
    )
}

export default Students;