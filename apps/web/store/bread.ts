import { defineStore } from "pinia";

export interface breadColor {
    background: string;
    border: string;
    text: string;
}

export interface BreadNormal {
    colorOverride: false;
    id: number;
    icon: string;
    title: string;
    content: string;
    color: string;
    duration: number;
}

export interface BreadCustom {
    colorOverride: true;
    id: number;
    icon: string;
    title: string;
    content: string;
    color: breadColor;
    duration: number;
}

export type Bread = BreadNormal | BreadCustom;

/**
 * Defines a Pinia store for managing bread notifications.
 * 
 * This store includes functionality to create, push, and manage different types of bread notifications
 * with customizable icons, titles, contents, colors, and durations. It also provides computed properties
 * to access the list of bread notifications.
 */
export const useBreadStore = defineStore("breadStore", () => {
    const breadList = ref<Bread[]>([]);

    const list = computed(() => breadList.value);

    const warningIcon = "fluent:info-12-filled";

    const createBread = ({
        icon = warningIcon,
        title,
        content,
        color,
        duration = 2000,
    }:
        | {
              icon?: string;
              title: string;
              content: string;
              color: string;
              duration?: number;
          }
        | {
              icon?: string;
              title: string;
              content: string;
              color: breadColor;
              duration?: number;
          }) => {
        if (typeof color === "string") {
            const bread = {
                id: Math.random() * 1000,
                icon: icon,
                title: title,
                content: content,
                color: color,
                duration: duration,
            } as BreadNormal;
            push(bread);
        } else {
            const bread = {
                id: Math.random() * 1000,
                icon: icon,
                title: title,
                content: content,
                color: color,
                duration: duration,
            } as BreadCustom;
            push(bread);
        }
    };

    const push = (payload: Bread) => {
        breadList.value.push(payload);
        setTimeout(() => {
            breadList.value = breadList.value.filter(
                (t) => t.id !== payload.id
            );
        }, payload.duration);
    };

    const alert = ({
        title,
        content,
        duration = 2000,
    }: {
        title: string;
        content: string;
        duration?: number;
    }) => {
        createBread({
            title: title,
            content: content,
            color: "red",
            duration: duration,
        });
    };

    const info = ({
        title,
        content,
        duration = 2000,
    }: {
        title: string;
        content: string;
        duration?: number;
    }) => {
        createBread({
            title: title,
            content: content,
            color: "blue",
            duration: duration,
        });
    };

    const warning = ({
        title,
        content,
        duration = 2000,
    }: {
        title: string;
        content: string;
        duration?: number;
    }) => {
        createBread({
            title: title,
            content: content,
            color: "orange",
            duration: duration,
        });
    };

    const success = ({
        title,
        content,
        duration = 2000,
    }: {
        title: string;
        content: string;
        duration?: number;
    }) => {
        createBread({
            title: title,
            content: content,
            color: "green",
            duration: duration,
        });
    };

    return {
        breadList,
        push,
        createBread,
        alert,
        info,
        warning,
        success,
        list,
    };
});
