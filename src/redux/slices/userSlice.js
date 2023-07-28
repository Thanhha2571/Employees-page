import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../services/api";
import { axiosInstance } from "../services/httpServices";
const initialState = {
  tableView: true,
  gridView: false,
  status: "Active",
  user: {},
  users: [],
  loading: false,
  openMenu: null,
};

//get all users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (input, thunkAPI) => {
    try {
      const response = await userApi.getUsers(input);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//get a user
export const getDetailUser = createAsyncThunk(
  "users/getDetailUser",
  async (uuid, thunkAPI) => {
    try {
      const response = await userApi.getDetailUser(uuid);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
//create a new user
export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData, thunkAPI) => {
    try {
      const response = await userApi.createUser(userData);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

//edit user
export const editUser = createAsyncThunk(
  "users/editUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("api/user/update", userData);
      return response
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
)
//delete user

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (uuid, thunkAPI) => {
    try {
      const response = await axiosInstance.delete("api/user/delete", {
        data: { uuid },
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    showTableView: (state) => {
      state.tableView = true;
      state.gridView = false;
    },

    showGridView: (state) => {
      state.gridView = true;
      state.tableView = false
    },
    setStatus: (state, action) => {
      // const uuid = action.payload;
      state.status = "Inactive"
    },
    showMenu: (state, action) => {
      const uuid = action.payload;
      state.openMenu = state.openMenu === uuid ? null : uuid;
    },
  },
  extraReducers: (builder) => {
    builder
      // get all users
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users.rows;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
      })

      //create user
      .addCase(createUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = true;
      })
  }
});

export default userSlice.reducer;
export const { showGridView, showTableView, showMenu, setStatus } = userSlice.actions;