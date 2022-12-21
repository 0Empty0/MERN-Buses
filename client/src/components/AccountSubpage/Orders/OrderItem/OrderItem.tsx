import { FC } from 'react'

import styles from './OrderItem.module.scss'

const OrderItem: FC = () => {
  return (
    <div className={styles.item}>
      <h2 className={`heading-bold-h5 ${styles.title}`}>Martina Anderson</h2>
      <div className={`${styles.section}`}>
        <p className="paragraph-medium-caption">Phoneeeeeeeeeee</p>
        <p className="paragraph-medium-caption">specialRequestttttttttttttt</p>
      </div>
      <div className={`${styles.section}`}>
        <p className="paragraph-medium-caption">departureDateeeeeeeee</p>
        <p className="paragraph-medium-caption">arrivalTimeeeeeeeeeeeee</p>
      </div>
      <div className={`${styles.section} ${styles.counter}`}>
        <h4 className="heading-bold-h6">Seat:</h4>
        <p className="paragraph-semibold-body">0</p>
      </div>
    </div>
  )
}

export default OrderItem
