import styles from './ListItem.module.css'
import React from 'react'
type ListType = {
    title : string,
    desc : string,
    icon?: React.ReactNode
}
function ListItem({title,desc,icon}:ListType) {
    return (
        <li className={styles.list_item}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>
                <p>{title}</p>
            </div>
            <div className={styles.content}>
                <p>{desc}</p> 
            </div>
        </li>
    )
    
}
export default ListItem