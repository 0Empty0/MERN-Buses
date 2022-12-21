import { FC, Fragment } from 'react'

import OrderItem from '@/components/AccountSubpage/Orders/OrderItem/OrderItem'

import styles from '../AccountSubpage.module.scss'

const Orders: FC = () => {
  return (
    <Fragment>
      <h1 className={`heading-bold-h3 ${styles.title}`}>My Orders</h1>
      <nav className={styles.nav}>
        <h6 className="heading-bold-h6">
          You have <span>10</span> orders
        </h6>
        <button className="button">Create New</button>
      </nav>
      <div>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </Fragment>
  )
}

export default Orders
