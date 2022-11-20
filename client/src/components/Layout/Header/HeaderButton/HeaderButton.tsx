import { FC, Fragment, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import styles from './HeaderButton.module.scss'
import { useAppDispatch } from '@/hooks/use-redux'
import { logout } from '@/store/features/user/userSlice'

const HeaderButton: FC<
  PropsWithChildren<{ isAuth: boolean; openModal: () => void }>
> = ({ isAuth, openModal }) => {
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logout())

    localStorage.removeItem('token')
  }

  return (
    <Fragment>
      {isAuth ? (
        <div className={`${styles.dropdown__wrapper} button`}>
          <Link to="/account">My Account</Link>
          <div className={`${styles.dropdown} paragraph-medium-body`}>
            <button onClick={logoutHandler}>Log Out</button>
          </div>
        </div>
      ) : (
        <button onClick={openModal} className="button">
          Login
        </button>
      )}
    </Fragment>
  )
}

export default HeaderButton
