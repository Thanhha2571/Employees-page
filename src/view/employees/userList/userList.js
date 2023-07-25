import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../../redux/slices/userSlice";
import UserItem from "./userItem";
import "./userList.css";
const UserList = () => {
    //   const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const userList = useSelector((state) => state.users?.users);
    // const navigate = useNavigate();
    console.log(userList);

    return (
        <div className="all-users-field">
            {userList?.map(({ image_slug, fullname, email, uuid, roleObj }) => (
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
    );
};

export default UserList;