import styles from './styles.module.scss'

const IconoGraphy = ({ iconClass, iconColor, fontSize = 'f_24', customClass = '', title = '', onClickHandler }) => (
  <i
    title={title}
    className={`iconwasalt ${iconClass} ${styles[iconColor]} ${styles[customClass]} ${styles[fontSize]}`}
    onClick={onClickHandler}
  ></i>
)

export default IconoGraphy
