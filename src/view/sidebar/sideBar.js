import "./sideBar.css";
import { Link } from "react-router-dom"
import { useState } from "react"
const SideBar = () => {
    const [employeeMenu, setEmployeeMenu] = useState(false)
    const [settingMenu, setSettingMenu] = useState(false)

    const handleSubmenuEmployee = () => {
        setEmployeeMenu(!employeeMenu)
        if (settingMenu === true) {
            setSettingMenu(false)
        }
    }

    const handleSubmenuSetting = () => {
        setSettingMenu(!settingMenu)
        if (employeeMenu === true) {
            setEmployeeMenu(false)
        }
    }
    return (
        <div className="side-bar">
            <a href="/" className="side-bar-logo">
                <div className="logo"></div>
            </a>
            <div className="menu">
                <ul className="side-bar-menu">
                    <li>
                        <a className="tags" href="/dashboard">
                            <div className="item">
                                <div className="item-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#b7c0cd" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5" stroke="#b7c0cd" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 13H12" stroke="#b7c0cd" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 17H16" stroke="#b7c0cd" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className="item-title">Dashboard</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div onClick={handleSubmenuEmployee} className="item">
                            <div className="item-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#b7c0cd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#b7c0cd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                            <div className="item-title-sub-menu">Employee</div>
                            <div className={`dropdown-icon ${employeeMenu ? "rotate-icon" : ""}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#b7c0cd" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                        </div>
                        {/* Submenu Employee */}
                        {employeeMenu && (<ul className="sub-menu-employee">
                            <li>
                                <a className="tags" href="/employees">
                                    <div className="item-sub-menu">
                                        <div className="item-title">All employees</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="tags" href="/departments">
                                    <div className="item-sub-menu">
                                        <div className="item-title">Departments</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="tags" href="/position">
                                    <div className="item-sub-menu">
                                        <div className="item-title">Position</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="tags" href="/skill-type">
                                    <div className="item-sub-menu">
                                        <div className="item-title">Skill Type</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="tags" href="/employess">
                                    <div className="item-sub-menu">
                                        <div className="item-title">Skills</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="tags" href="/certifications">
                                    <div className="item-sub-menu">
                                        <div className="item-title">Certifications</div>
                                    </div>
                                </a>
                            </li>
                        </ul>)}
                    </li>
                    <li>
                        <a className="tags" href="/project-team">
                            <div className="item">
                                <div className="item-icon">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="people-group" class="svg-inline--fa fa-people-group " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ height: '26px', width: '26px', color: ' #b7c0cd' }}><path fill="currentColor" d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path></svg>
                                </div>
                                <div className="item-title">Project Team</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a className="tags" href="/my-profile">
                            <div className="item">
                                <div className="item-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#b7c0cd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#b7c0cd" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                                <div className="item-title">My Profile</div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <div onClick={handleSubmenuSetting} className="item">
                            <div className="item-icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gear" class="svg-inline--fa fa-gear " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ color: 'rgb(183, 192, 205)', width: '24px', height: '24px' }}><path fill="currentColor" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg>
                            </div>
                            <div className="item-title-sub-menu">Setting</div>
                            <div className={`dropdown-icon ${settingMenu ? "rotate-icon" : ""}`}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#b7c0cd" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                        </div>
                        {settingMenu && (<ul className="sub-menu-setting">
                            <li>
                                <a className="tags" href="/employess">
                                    <div className="item-sub-menu">
                                        <div className="item-title">Change Password</div>
                                    </div>
                                </a>
                            </li>
                        </ul>)}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;