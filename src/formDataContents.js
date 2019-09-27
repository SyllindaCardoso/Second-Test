// constant file
function createData(id, title, state, url, created, updated) {
    return { id, title, state, url, created, updated };
}

// not a defaut export 
export const rows = [
    createData('123450943', 'docs: edit copy and docregions', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
    createData('497284810', 'CanActivate Issue?', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
    createData('497257718', 'fix(ivy): process nested animation metadata', 'open', 'https://api.github.com/repos/angular', '2019-09-23', '2019-09-23'),
    createData('497192578', 'docs: clarify http response type', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
    createData('497127777', 'HttpClient is not injected in nested service', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
    createData('496998241', 'build: update rxjs to 6.5.3', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
];
