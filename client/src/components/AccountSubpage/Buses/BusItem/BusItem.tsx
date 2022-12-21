import { FC } from 'react'

import styles from './BusItem.module.scss'

const BusItem: FC = () => {
  return (
    <div className={styles.item}>
      <h2 className={`heading-bold-h5 ${styles.title}`}>Title Semigarda</h2>
      <h5 className={`paragraph-medium-caption ${styles.price}`}>
        400 <span>$</span>
      </h5>
      <div className={styles.places}>
        <p className="paragraph-medium-caption">
          From: <span>ADASDDSFSD</span>
        </p>
        <p className="paragraph-medium-caption">
          To: <span>SDADDFFDRE</span>
        </p>{' '}
      </div>
      <div className={styles.times}>
        <p className="paragraph-medium-caption">
          Departure date: <span>{new Date().getHours().toString()}</span>
        </p>
        <p className="paragraph-medium-caption">
          Arrival date:
          <span>{new Date(Date.now() + 3600000).getHours().toString()}</span>
        </p>
      </div>
      <p className={`paragraph-medium-caption ${styles.stops}`}>
        Stops: <span>Antonivks, Petrivka, Antonivks, Petrivka</span>
      </p>
      <div className={`${styles.seats} ${styles.counter}`}>
        <h4 className="heading-bold-h6">Seats:</h4>
        <p className="paragraph-semibold-body">0</p>
      </div>
      <div className={`${styles.reviews} ${styles.counter}`}>
        <h4 className="heading-bold-h6">Reviews:</h4>
        <p className="paragraph-semibold-body">0</p>
      </div>
    </div>
  )
}

export default BusItem
