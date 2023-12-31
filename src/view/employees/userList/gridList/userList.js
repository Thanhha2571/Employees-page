import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../../../redux/slices/userSlice";
import UserItem from "./userItem";
import "./userList.css";
const UserList = (props) => {
    const { input } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers(input));
    }, [dispatch, input]);

    const userList = useSelector((state) => state.users?.users);
    // console.log(userList);

    return (
        userList.length === 0 ? (
            <div className="no-result-text">NO RESULT</div>
        ) : (
            <div className="all-users-field">
                {userList.map(({ image_slug, fullname, email, uuid, roleObj }) => (
                    <UserItem
                        key={uuid}
                        roleObj={roleObj}
                        img={image_slug}
                        fullname={fullname}
                        email={email}
                        uuid={uuid}
                    />
                ))}
            </div>
        )
    );
};

export default UserList;