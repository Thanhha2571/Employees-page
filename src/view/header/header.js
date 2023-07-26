import "./header.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../../redux/slices/sidebarSlice"
const Header = () => {
    const [ userMenu, setUserMenu ] = useState(false)

    const dispatch = useDispatch()
    const { isOpenSidebar } = useSelector((state) => state.sidebar)

    const handleUserMenu = () => {
        setUserMenu(!userMenu)
    }

    const handleOpenSidebar = () => {
        dispatch(toggleSidebar())
    }
    
    return (
        <div className={`header ${isOpenSidebar ? "" : "header-hide-side-bar"}`}>
            <div onClick={handleOpenSidebar} className="header-hide-menu">
                <svg class="Header_hide-menu-icon__a76tw" width="19" height="14" viewBox="0 0 19 14" fill="#fff" xmlns="http://www.w3.org/2000/svg"><line y1="1.25" x2="19" y2="1.25" stroke="#fff" stroke-width="1.5"></line><line y1="7.25" x2="19" y2="7.25" stroke="#fff" stroke-width="1.5"></line><line x1="8" y1="13.25" x2="19" y2="13.25" stroke="#fff" stroke-width="1.5"></line></svg>
                <span className="header-title">Skills Management</span>
            </div>
            <div className="header-user-menu">
                <div className="header-search-bar">
                    <div className="search-form">
                        <input type="text" className="search-input" placeholder="Seacrh here" />
                        <div className="search-icon">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                        </div>
                    </div>
                </div>
                <div onClick={handleUserMenu} className="header-user-account">
                    <div className="user-account">
                        <svg class="Header_user-ava__TIqzE" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="17" cy="17" r="16.5" stroke="#E4DFDE"></circle><path d="M22 22C20.5186 20.7256 18.8139 20 17 20C15.1861 20 13.4814 20.7256 12 22" stroke="#E4DFDE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="3" cy="3" r="3" transform="matrix(1 0 0 -1 14 17)" stroke="#E4DFDE" stroke-width="1.5" stroke-linejoin="round"></circle></svg>
                        <div className="user-account-detail">
                            <span className="detail-user">AhtAdmin</span>
                            <span className="detail-user">Admin</span>
                        </div>
                        {userMenu && (<div className="dropdown-user-account">
                            <ul className="dropdown-user-menu">
                                <li>
                                    <a className="user-menu-item" href="/my-profile">My profile</a>
                                </li>
                                <li>
                                    <a className="user-menu-item" href="/setting">Setting</a>
                                </li>
                                <li >
                                    <a className="user-menu-item" href="/login">Logout</a>
                                </li>
                            </ul>
                        </div>)}
                    </div>
                    <div className={`user-account-dropdown-icon ${userMenu ? "rotate-icon-dropdown" : ""}`}>
                        <svg class="MenuItem_menu-icon__ebns1" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header