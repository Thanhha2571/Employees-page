import "./employee.css"
import UserList from "./userList/gridList/userList";
import UserListTable from "./userList/tableList/userListTable";
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal"
import { positionMenuList, departmentMenuList, skillMenuList } from "../../common/data"
import { createUser, fetchUsers } from "../../redux/slices/userSlice";
import { showGridView, showTableView } from "../../redux/slices/userSlice";
import { Link } from "react-router-dom";

const Employee = () => {

    const [positionMenu, setPositionMenu] = useState(false)
    const [departmentMenu, setDepartmentMenu] = useState(false)
    const [skillMenu, setSkillMenu] = useState(false)
    const [searchLabelActive, setSearchLabelActive] = useState(false)

    const [boxAdd, setBoxAdd] = useState(false)

    const [selectedPosition, setSelectedPosition] = useState("Select Position")
    const [selectedDepartment, setSelectedDepartment] = useState("Select Department")
    const [selectedSkill, setSelectedSkill] = useState("Select Skill")

    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageSlug, setImageSlug] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [inputSearchDepartment, setInputSearchDepartment] = useState("");
    const [inputSearchSkill, setInputSearchSkill] = useState("");

    const searchBlockRef = useRef(null);

    const [inputSearch, setInputSearch] = useState("");
    const dispatch = useDispatch()

    const { gridView, tableView } = useSelector((state) => state.users)
    const handlePositionMenu = () => {
        setPositionMenu(!positionMenu)
        setDepartmentMenu(false)
        setSkillMenu(false)
    }

    const handleChangeSelectedPosition = (item) => {
        setSelectedPosition(item)
    }

    const handleDepartmentMenu = () => {
        setDepartmentMenu(!departmentMenu)
        setPositionMenu(false)
        setSkillMenu(false)
    }

    const handleChangeSelectedDepartment = (item) => {
        setSelectedDepartment(item)
        setDepartmentMenu(false)
    }

    const handleSkillMenu = () => {
        setSkillMenu(!skillMenu)
        setDepartmentMenu(false)
        setPositionMenu(false)
    }

    const handleChangeSelectedSkill = (item) => {
        setSelectedSkill(item)
        setSkillMenu(false)
    }

    const handleSearchLabelClick = () => {
        setSearchLabelActive(true);
    }

    const handleOpenAddForm = () => {
        setBoxAdd(true)
    }

    const handleShowGridView = () => {
        dispatch(showGridView())
    }

    const handleShowTableView = () => {
        dispatch(showTableView())
    }

    const handleCreateUser = async () => {
        try {
            const userData = {
                fullname,
                username,
                email,
                password,
                confirm_password: confirmPassword,
                image_slug: imageSlug,
            }

            await dispatch(createUser(userData))


            setFullname("");
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setImageSlug("");
            setErrorMessage("");
        } catch (error) {
            console.error("Failed:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An error occurred. Please try again later.");
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullname || !username || !email || !password || !confirmPassword) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        handleCreateUser();
        setBoxAdd(false)
    };


    useEffect(() => {
        const handleClickOutsideSearchBlock = (event) => {
            if (searchBlockRef.current && !searchBlockRef.current.contains(event.target)) {
                setSearchLabelActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideSearchBlock);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideSearchBlock);
        };
    }, []);

    const [filteredDepartmentMenuList, setFilteredDepartmentMenuList] = useState(
        departmentMenuList
    );

    useEffect(() => {
        const filteredDepartmentList = departmentMenuList.filter(({ item }) =>
            item.toLowerCase().includes(inputSearchDepartment.toLowerCase())
        );
        setFilteredDepartmentMenuList(filteredDepartmentList);
    }, [inputSearchDepartment]);

    const [filteredSkillMenuList, setFilteredSkillMenuList] = useState(
        skillMenuList
    );

    useEffect(() => {
        const filteredSkillList = skillMenuList.filter(({ item }) =>
            item.toLowerCase().includes(inputSearchSkill.toLowerCase())
        );
        setFilteredSkillMenuList(filteredSkillList);
    }, [inputSearchSkill]);
    return (
        <div className="employee-page">
            <div className="employee-header">
                <div className="employee-header-heading">
                    <h3 className="employee-header-heading-title">Employees</h3>
                    <div className="employee-header-heading-subtitle">
                        <Link className="employee-header-heading-subtitle-tags" to="/dashboard">Dashboard</Link>
                        <span className="employee-header-heading-subtitle-text">/ Employee</span>
                    </div>
                </div>
                <div className="employee-header-right">
                    <div className="view-list-employee">
                        <div onClick={handleShowTableView} type="button" className="table-view">
                            <svg style={{ width: '18px', height: '18px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
                        </div>
                        <div onClick={handleShowGridView} type="button" className="grid-view">
                            <svg style={{ width: '18px', height: '18px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="table-cells" class="svg-inline--fa fa-table-cells " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z"></path></svg>
                        </div>
                    </div>
                    <button className="add-btn" onClick={handleOpenAddForm}>
                        <svg style={{ width: '14px', height: '16px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                        Add Employee
                    </button>
                    <button className="import-file-btn">
                        <svg style={{ width: '14px', height: '16px' }} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" class="svg-inline--fa fa-plus " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                        Import File
                    </button>
                </div>
            </div>
            <div className="employee-form">
                <div className="search-field">
                    <div
                        className={`search-block ${searchLabelActive ? "active" : ""}`}
                        onClick={handleSearchLabelClick}
                        value={inputSearch}
                        ref={searchBlockRef}
                        onChange={(e) => setInputSearch(e.target.value)}
                    >
                        <input
                            type="text"
                            className="employee-search-input" />
                        <label className={`employee-search-label ${searchLabelActive || inputSearch !== "" ? "active" : ""}`}>Search by Name, Employee's Role</label>
                    </div>
                </div>
                <div onClick={handlePositionMenu} className="select-position-field">
                    <div className="select-position">
                        <div className="select-position-block">
                            <div className="select-block-main">
                                <div className="select-block-title">{selectedPosition}</div>
                                <div className={`employee-form-dropdown-icon ${positionMenu ? "rotate-icon-dropdown" : ""}`}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-rotate-180 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ color: "rgb(220, 220, 220)" }}><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>

                            {positionMenu && (<div className="select-position-option">
                                {positionMenuList.map(({ index, item }) => {
                                    return <div onClick={() => handleChangeSelectedPosition(item)} className="select-position-item">{item}</div>
                                })}
                            </div>)}
                        </div>
                        <label className="employee-position-label">Position</label>
                    </div>
                </div>
                <div className="select-position-field">
                    <div className="select-position">
                        <div className="select-position-block">
                            <div onClick={handleDepartmentMenu} className="select-block-main">
                                <div className="select-block-title">{selectedDepartment}</div>
                                <div className={`employee-form-dropdown-icon ${departmentMenu ? "rotate-icon-dropdown" : ""}`}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-rotate-180 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ color: "rgb(220, 220, 220)" }}><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>

                            {departmentMenu && (<div className="select-position-option">
                                <div className="search-department-field">
                                    <input
                                        type="text"
                                        className="search-department-input"
                                        value={inputSearchDepartment}
                                        onChange={(e) => setInputSearchDepartment(e.target.value)}
                                        placeholder="Search ..."
                                    />
                                </div>
                                {filteredDepartmentMenuList.map(({ index, item }) => {
                                    return <div onClick={() => handleChangeSelectedDepartment(item)} className="select-position-item">{item}</div>
                                })}
                            </div>)}
                        </div>
                        <label className="employee-position-label">Department</label>
                    </div>
                </div>
                <div className="select-position-field">
                    <div className="select-position">
                        <div className="select-position-block">
                            <div onClick={handleSkillMenu} className="select-block-main">
                                <div className="select-block-title">{selectedSkill}</div>
                                <div className={`employee-form-dropdown-icon ${skillMenu ? "rotate-icon-dropdown" : ""}`}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-rotate-180 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ color: "rgb(220, 220, 220)" }}><path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg>
                                </div>
                            </div>

                            {skillMenu && (<div className="select-position-option">
                                <div className="search-department-field">
                                    <input
                                        type="text"
                                        className="search-department-input"
                                        placeholder="Search ..."
                                        value={inputSearchSkill}
                                        onChange={(e) => setInputSearchSkill(e.target.value)}
                                    />
                                </div>
                                {filteredSkillMenuList.map(({ index, item }) => {
                                    return <div onClick={() => handleChangeSelectedSkill(item)} className="select-position-item">{item}</div>
                                })}
                            </div>)}
                        </div>
                        <label className="employee-position-label">Skils</label>
                    </div>
                </div>
                <div className="search-btn-field">
                    <button className="search-btn">Seacrh</button>
                </div>

                {/* Create a new employee */}
                <Modal
                    isOpen={boxAdd}
                    onRequestClose={() => setBoxAdd(false)}
                    overlayClassName="popup-overlay"
                    className="popup-content"
                >
                    <div className="box-form-add">
                        <button className="off-add-box" onClick={() => setBoxAdd(null)}>x</button>
                        <div className="form-add">
                            <h1 className="form-add-heading">PERSONAL DETAILS</h1>
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <form className="form"
                                onSubmit={handleSubmit}
                            >
                                <label className="label">
                                    <div className="add-title">
                                        <span className="add-title-text">Fullname</span>
                                        <span className="add-danger-icon">*</span>
                                    </div>
                                    <input
                                        className="input"
                                        type="text"
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        required
                                    />
                                </label>
                                <br />
                                <label className="label">
                                    <div className="add-title">
                                        <span className="add-title-text">Username</span>
                                        <span className="add-danger-icon">*</span>
                                    </div>
                                    <input
                                        className="input"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </label>
                                <br />
                                <label className="label">
                                    <div className="add-title">
                                        <span className="add-title-text">Email</span>
                                        <span className="add-danger-icon">*</span>
                                    </div>
                                    <input
                                        className="input"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>
                                <br />
                                <label className="label">
                                    <div className="add-title">
                                        <span className="add-title-text">Password</span>
                                        <span className="add-danger-icon">*</span>
                                    </div>
                                    <input
                                        className="input"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </label>
                                <br />
                                <label className="label">
                                    <div className="add-title">
                                        <span className="add-title-text">Confirm Password</span>
                                        <span className="add-danger-icon">*</span>
                                    </div>

                                    <input
                                        className="input"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </label>
                                <br />
                                <label className="label">
                                    <div className="add-title">
                                        <span className="add-title-text">Link Image</span>
                                        <span className="add-danger-icon">*</span>
                                    </div>
                                    <input
                                        className="input"
                                        type="text"
                                        value={imageSlug}
                                        onChange={(e) => setImageSlug(e.target.value)}
                                    />
                                </label>
                                <br />
                                <button className="submit-add-btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
            {gridView && (<UserList input={inputSearch}  />)}
            {tableView && (<UserListTable input={inputSearch} />)}
        </div>
    )
}

export default Employee