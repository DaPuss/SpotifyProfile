export const getHashParams = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce(function (initial: { [key: string]: any }, item) {
            if (item) {
                var parts = item.split('=')
                initial[parts[0]] = decodeURIComponent(parts[1])
            }
            return initial
        }, {})
}

export const removeHashParamsFromUrl = () => {
    window.history.pushState(
        '',
        document.title,
        window.location.pathname + window.location.search
    )
}

export const buildQueryString = (queryParams: any) => {
    return Object.keys(queryParams)
        .filter((key) => {
            const value = queryParams[key]

            return typeof value !== 'undefined' && value !== null
        })
        .map((key) => {
            const value = queryParams[key]

            if (Array.isArray(value)) {
                return value
                    .map(
                        (valueItem) => `${key}=${encodeURIComponent(valueItem)}`
                    )
                    .join('&')
            }

            return `${key}=${encodeURIComponent(value)}`
        })
        .join('&')
}
