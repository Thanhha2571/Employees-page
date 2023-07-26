import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenSidebar: true,
    employeeMenu: false,
    settingsMenu: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isOpenSidebar = !state.isOpenSidebar
        },

        toggleEmployeeMenu: (state) => {
            state.employeeMenu = !state.employeeMenu
            state.settingsMenu = false
        },

        toggleSettingsMenu: (state) => {
            state.settingsMenu = !state.settingsMenu
            state.employeeMenu = false
        },
    }
})

export default sidebarSlice.reducer
export const { toggleSidebar, toggleEmployeeMenu, toggleSettingsMenu } = sidebarSlice.actions