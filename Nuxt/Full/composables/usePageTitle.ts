import {appTitle} from "~/helpers";

export const usePageTitle = (pageTitle: string) => {
    useHead({
        title: `${pageTitle} | ${appTitle}`
    })

    useSeoMeta({
        title: `${pageTitle} | ${appTitle}`,
    })
}