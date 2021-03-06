// Mock API: 'http://localhost:3001/'
// Real API: '/'
// export default function getBaseUrl() {
//     const inDevelopment = window.location.hostname === 'localhost';
//     return inDevelopment ? "http://localhost:3001/" : '/';
// }


// To use Mock API, add to URL in searchbar: ?useMockApi=true
export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name, url) {
    if (!url)
        url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
