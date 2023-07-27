import "./userListTable.css"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "../../../../redux/slices/userSlice"
import UserItemTable from "./userItemTable"

const UserListTable = (props) => {
    const { input } = props;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers(input));
    }, [dispatch, input]);

    const userList = useSelector((state) => state.users?.users);

    console.log(userList);

    return (
        <div className="user-list-table">
            <div className="view-table">
                <div className="view-table-field">
                    <div className="view-table-block">
                        <table className="table">
                            <thead className="thead">
                                <tr className="tr">
                                    <th className="th">
                                        <span className="table-title-name">Name</span>
                                    </th>
                                    <th className="th">
                                        <span className="table-title-id">Employee ID</span>
                                    </th>
                                    <th className="th">
                                        <span className="table-title-email">Email</span>
                                    </th>
                                    <th className="th">
                                        <span className="table-title-role">Role</span>
                                    </th>
                                    <th className="th">
                                        <span className="table-title-role">Join Date</span>
                                    </th>
                                    <th className="th">
                                        <span className="table-title-status">Status</span>
                                    </th>
                                    <th className="th-action">
                                        <span className="table-title-action">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            {userList.length === 0 ? (<div className="no-result-text">NO RESULT</div>)
                                : (
                                    <tbody className="tbody">
                                        {userList.map(({ image_slug, id, fullname, email, roleObj, uuid, index, createdAt }) =>
                                            <UserItemTable
                                                key={id}
                                                fullname={fullname}
                                                id={id}
                                                email={email}
                                                roleObj={roleObj}
                                                img={image_slug}
                                                uuid={uuid}
                                                index={index}
                                                createdAt={createdAt}
                                            />)}
                                    </tbody>
                                )}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserListTable