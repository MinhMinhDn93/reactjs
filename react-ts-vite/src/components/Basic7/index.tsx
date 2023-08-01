import styles from './NobelList.module.css'
type NobelListType = {
    desc_1: string,
    desc_2: string,
    desc_3: string,
    name: string,
    thumb: string
}
function NobelList({ name, thumb, desc_1, desc_2, desc_3 }: NobelListType) {
    return (
        <div>
            <div className={styles.frame} >
                <div>
                    <h3>{name}</h3>
                </div>
                <div className={styles.thumb}>
                    <img src={thumb} alt="" />
                </div>
                <div>
                    <ul>
                        <li>
                            <span className={styles.title}>Profession:</span><span>{desc_1}</span>
                        </li>
                        <li>
                            <span  className={styles.title}>Awards:</span><span>{desc_2}</span>
                        </li>
                        <li>
                            <span  className={styles.title}>Discovered:</span><span>{desc_3}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default NobelList