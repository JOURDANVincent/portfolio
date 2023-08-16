import { writable } from "svelte/store"

// META pour head
export const reactiveMeta = writable({
    pathname: "",
    title: "",
    desc: "",
    image: "",
})
