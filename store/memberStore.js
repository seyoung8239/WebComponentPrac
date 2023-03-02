import { createStore } from "./createStore.js";

const initialStore = {
    state: [
        { name: "seyoung", age: "26", role: "pm" },
        { name: "hyun", age: "26", role: "fe" },
        { name: "gc", age: "26", role: "fe" },
        { name: "mw", age: "25", role: "be" },
        { name: "th", age: "26", role: "ai" },
        { name: "jh", age: "26", role: "data" },
    ],
};

export const memberEvent = "memberStore";
export const memberStore = createStore(memberEvent, initialStore);
