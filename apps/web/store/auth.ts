import { defineStore } from "pinia";

import fetch from "@guoj/server/client";
import { useBreadStore } from "./bread";

interface user {
    id: number;
    username: string;
    email: string;
}
/**
 * Defines the authentication store using Pinia.
 * 
 * This store manages user authentication state, including login, logout, and session refresh functionalities.
 * It interacts with a backend API to authenticate users and maintains their session state.
 * 
 * @module authStore
 * @property {Ref<boolean>} isAuthed - A reactive reference indicating whether the user is authenticated.
 * @property {Ref<string>} username - A reactive reference holding the username of the authenticated user.
 * @property {Ref<string>} email - A reactive reference holding the email of the authenticated user.
 * @property {Function} login - An asynchronous function to handle user login.
 * @property {Function} logout - An asynchronous function to handle user logout.
 * @property {Function} refresh - An asynchronous function to refresh the user's session state.
 * 
 * @example
 * // Usage example
 * const authStore = useAuthStore();
 * await authStore.login('user', 'password');
 * if (authStore.isAuthed) {
 *   console.log(`Logged in as ${authStore.username}`);
 * }
 */


export const useAuthStore = defineStore("authStore", () => {
    const isAuthed = ref(false);
    const username = ref("");
    const email = ref("");

    const breads = useBreadStore();

    const refresh = async () => {
        const session = useCookie("session");

        if (session === undefined) {
            username.value = "";
            email.value = "";
            isAuthed.value = false;
        } else {
            const { data, error } = await fetch("/backend-api/user/me", {
                method: "GET",
            });
            if (error) {
                username.value = "";
                email.value = "";
                isAuthed.value = false;
            } else {
                username.value = data?.username || "";
                email.value = data?.email || "";
                isAuthed.value = true;
            }
        }
    };

    const login = async (user: string, password: string) => {
        if (isAuthed.value === true) return false;
        const { data, error } = await fetch("/backend-api/user/auth/login", {
            method: "POST",
            body: {
                user: user,
                password: password,
            },
        });

        if (error) {
            breads.alert({
                title: "Login error",
                content: `${error.status} ${error.value}`,
            });
            return false;
        }
        username.value = data?.name || "";
        email.value = data?.email || "";
        isAuthed.value = true;
        breads.info({ title: "Login success!", content: "Redirecting..." });
        return true;
    };

    const logout = async () => {
        if (isAuthed.value === false)
            breads.warning({
                title: "Logout error",
                content: `You have already logout.`,
            });
        const { error } = await fetch("/backend-api/user/auth/logout", {
            method: "POST",
        });
        if (error) {
            breads.alert({
                title: "Logout error",
                content: `${error.status} ${error.value}`,
            });
        }
        username.value = "";
        email.value = "";
        isAuthed.value = false;
        breads.info({ title: "Successfully Logout!", content: "" });
    };

    return { isAuthed, username, email, login, logout, refresh };
});
