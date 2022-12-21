import { FC } from 'react'

import logo from '@/assets/images/blankAgencyLogo.svg'

import styles from './AgencyItem.module.scss'

const AgencyItem: FC = () => {
  return (
    <div className={styles.item}>
      <img src={logo} alt="Logo" />
      <h2 className={`heading-bold-h5 ${styles.title}`}>Title Semigarda</h2>
      <div className={`${styles.section}`}>
        <p className="paragraph-medium-caption">Addresssssssssssssssssssssss</p>
        <p className="paragraph-medium-caption">Emailllllllllllllllll</p>
        <p className="paragraph-medium-caption">Phoneeeeeeeeeee</p>
      </div>
      <div className={`${styles.section} ${styles.counter}`}>
        <h4 className="heading-bold-h6">Buses:</h4>
        <p className="paragraph-semibold-body">0</p>
      </div>
      <div className={`${styles.section} ${styles.counter}`}>
        <h4 className="heading-bold-h6">Orders:</h4>
        <p className="paragraph-semibold-body">0</p>
      </div>
    </div>
  )
}

export default AgencyItem
