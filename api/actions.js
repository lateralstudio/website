export const actions = {
    SET_CURRENT_VIEW: "SET_CURRENT_VIEW",
    SET_SCROLL_TARGET: "SET_SCROLL_TARGET",
    CLEAR_SCROLL: "CLEAR_SCROLL",
    TOGGLE_MAIN_MENU: "TOGGLE_MAIN_MENU",
}

export function setCurrentView(view) {
    return {
        type: actions.SET_CURRENT_VIEW,
        view,
    }
}

export function setScrollTarget(scrollTarget) {
    return {
        type: actions.SET_SCROLL_TARGET,
        scrollTarget,
    }
}

export function clearScroll() {
    return {
        type: actions.CLEAR_SCROLL,
    }
}

export function toggleMainMenu() {
    return {
        type: actions.TOGGLE_MAIN_MENU,
    }
}
