import styles from  './Attributecolor.module.css'
type AttributeItemType = {
    className?: string,
    label : string
}
function AttributeItem({className,label}:AttributeItemType) {
    const classStyle = className && className !== '' ? `${styles.attr_item} ${className}` : styles.attr_item ; 
    console.log(classStyle)
    return (
        <span className = {classStyle}>{label}</span>
    )
}
function AttributeColor () {
    return <div className={styles.block}>
        <span className={styles.attr_name}>Màu sắc</span>
        <AttributeItem className={styles.curent} label='Đen'/>
        <AttributeItem  label='Hồng'/>
        <AttributeItem  label='Xanh'/>
    </div>
}
export default AttributeColor