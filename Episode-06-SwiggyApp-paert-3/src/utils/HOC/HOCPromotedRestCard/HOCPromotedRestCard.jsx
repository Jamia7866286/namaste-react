 import styles from './style.module.scss'
 
 const HOCPromotedRestCard = (Component)=>{
    return (props)=>{
      return (
        <div className={styles.promotWrapper}>
          <p className={styles.label_text}>Promoted</p>
          <Component {...props} />
        </div>
      )
    }
  }

  export default HOCPromotedRestCard