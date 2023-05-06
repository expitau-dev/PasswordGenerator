javascript: (function () {
    async function computeHash(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    function verifyAndExecuteScript(scriptContent, expectedHash) {
        computeHash(scriptContent)
            .then(hash => {
                if (hash === expectedHash) {
                    eval(scriptContent);
                } else {
                    alert(`The downloaded script has an incorrect hash. Refusing to execute.`);
                }
            })
    }

    const scriptUrl = 'https://raw.githubusercontent.com/expitau-dev/Passbirb/main/dist/bookmarklet/bookmarklet.umd.cjs';
    const scriptHash = '301e798b6732d3586566d5f622a6f8bba081e4725c8db7538e89da0d58fbe0fc';

    fetch(scriptUrl)
        .then(response => {
            if (!response.ok) {
                alert(`ResponseError when fetching the script: ${response.statusText}`);
            }
            return response.text();
        })
        .then(scriptContent => {
            verifyAndExecuteScript(scriptContent, scriptHash);
        })
        .catch(error => {
            alert(`FetchError when fetching the script: ${error}`);
        })
})();
