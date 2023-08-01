import styles from './VideoItem.module.css'
import React from 'react'
type VideoItemType = {
    thumb : string,
    title : string,
    desc : string,
    icon?: React.ReactNode
}
function VideoItem({thumb,title,desc,icon}:VideoItemType) {
    return (
        <li className={styles.video_item}>
            <div className="thumb">
                <img src={thumb} alt={title} />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>  
            </div>
            <div className="icon">
                {icon}
            </div>
        </li>
    )
    
}
export default VideoItem