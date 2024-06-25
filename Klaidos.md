notes@DESKTOP-SCH6TCU MINGW64 ~/Documents/GitHub/OraiDemo/AXIOS/my-app (main)
$ npm install axios

added 3 packages, and audited 1548 packages in 5s

262 packages are looking for funding
  run `npm fund` for details

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

// 9 eilute

Kaip taisau?

$ npm audit
{
    # npm audit report

nth-check  <2.0.1
Severity: high
Inefficient Regular Expression Complexity in nth-check - https://github.com/advisories/GHSA-rp65-9cf3-cjxr
fix available via `npm audit fix --force`
Will install react-scripts@3.0.1, which is a breaking change
node_modules/svgo/node_modules/nth-check
  css-select  <=3.1.0
  Depends on vulnerable versions of nth-check
  node_modules/svgo/node_modules/css-select
    svgo  1.0.0 - 1.3.2
    Depends on vulnerable versions of css-select
    node_modules/svgo
      @svgr/plugin-svgo  <=5.5.0
      Depends on vulnerable versions of svgo
      node_modules/@svgr/plugin-svgo
        @svgr/webpack  4.0.0 - 5.5.0
        Depends on vulnerable versions of @svgr/plugin-svgo
        node_modules/@svgr/webpack
          react-scripts  >=2.1.4
          Depends on vulnerable versions of @svgr/webpack
          Depends on vulnerable versions of resolve-url-loader
          node_modules/react-scripts

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix --force`
Will install react-scripts@3.0.1, which is a breaking change
node_modules/resolve-url-loader/node_modules/postcss
  resolve-url-loader  0.0.1-experiment-postcss || 3.0.0-alpha.1 - 4.0.0
  Depends on vulnerable versions of postcss
  node_modules/resolve-url-loader

8 vulnerabilities (2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force
}



//parode pokycius:

{
    There is a Regular Expression Denial of Service (ReDoS) vulnerability in nth-check that causes a denial of service when parsing crafted invalid CSS nth-checks.

The ReDoS vulnerabilities of the regex are mainly due to the sub-pattern \s*(?:([+-]?)\s*(\d+))? with quantified overlapping adjacency and can be exploited with the following code.

Proof of Concept

// PoC.js
var nthCheck = require("nth-check")
for(var i = 1; i <= 50000; i++) {
    var time = Date.now();
    var attack_str = '2n' + ' '.repeat(i*10000)+"!";
    try {
        nthCheck.parse(attack_str) 
    }
    catch(err) {
        var time_cost = Date.now() - time;
        console.log("attack_str.length: " + attack_str.length + ": " + time_cost+" ms")
    }
}
The Output

attack_str.length: 10003: 174 ms
attack_str.length: 20003: 1427 ms
attack_str.length: 30003: 2602 ms
attack_str.length: 40003: 4378 ms
attack_str.length: 50003: 7473 ms
References
https://nvd.nist.gov/vuln/detail/CVE-2021-3803
fb55/nth-check@9894c1d
https://huntr.dev/bounties/8cf8cc06-d2cf-4b4e-b42c-99fafb0b04d0
https://lists.debian.org/debian-lts-announce/2023/05/msg00023.html
}

Siulymas:
fix available via `npm audit fix --force`

//buvo 8 vulnerabilities (2 moderate, 6 high)
o, po npm audit fix  --force 
//163 vulnerabilities (1 low, 91 moderate, 68 high, 3 critical)
po dar vieno npm audit fix --force
8 vulnerabilities (2 moderate, 6 high)
tada uzluzo react app

We suggest that you begin by typing:
Failed to compile.

Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
LOG from webpack.FileSystemInfo
<w> Managed item C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\babel-loader isn't a directory or doesn't contain a package.json (see snapshot.managedPaths option)
+ 17 hidden lines

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in main
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\babel-loader\lib\index.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack-dev-server\client\index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=none&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\hot\dev-server.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Child compilation failed:
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
ModuleNotFoundError: Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\Compilation.js:2100:28
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:904:13
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:10:1)     
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:341:22
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:9:1)      
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:518:22
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:151:11
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:738:23
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\neo-async\async.js:2830:7
Failed to compile.

Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in main
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\babel-loader\lib\index.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack-dev-server\client\index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=none&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\hot\dev-server.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Child compilation failed:
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
ModuleNotFoundError: Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\Compilation.js:2100:28
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:904:13
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:10:1)
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:341:22
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:9:1)
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:518:22
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:151:11
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:738:23
Failed to compile.

Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in main
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\source-map-loader\dist\cjs.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack-dev-server\client\index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=none&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\hot\dev-server.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Child compilation failed:
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
ModuleNotFoundError: Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\Compilation.js:2100:28
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:904:13
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:10:1)
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:341:22
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:9:1)
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:518:22
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:151:11
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:738:23
Failed to compile.

Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactRefreshEntry.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in main
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\source-map-loader\dist\cjs.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\source-map-loader\dist\cjs.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack-dev-server\client\index.js?protocol=ws%3A&hostname=0.0.0.0&port=3000&pathname=%2Fws&logging=none&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'

ERROR in Child compilation failed:
Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
ModuleNotFoundError: Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\html-webpack-plugin\lib\loader.js' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app'
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\Compilation.js:2100:28
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:904:13
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:10:1)
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:341:22
    at eval (eval at create (C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\tapable\lib\HookCodeFactory.js:33:10), <anonymous>:9:1)
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:518:22
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:151:11
    at C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\lib\NormalModuleFactory.js:738:23
Failed to compile.

Module not found: Error: Can't resolve 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\@pmmmwh\react-refresh-webpack-plugin\client\ReactR
Failed to compile.

Module not found: Error: Can't resolve '../internals/is-callable' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'
LOG from webpack.FileSystemInfo
<w> Managed item C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure isn't a directory or doesn't contain a package.json (see snapshot.managedPaths option)
+ 13 hidden lines

ERROR in ./node_modules/core-js-pure/internals/a-callable.js 3:17-52
Module not found: Error: Can't resolve '../internals/is-callable' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'

ERROR in ./node_modules/core-js-pure/internals/a-callable.js 4:18-55
Module not found: Error: Can't resolve '../internals/try-to-string' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'

ERROR in ./node_modules/core-js-pure/internals/create-non-enumerable-property.js 4:27-73
Module not found: Error: Can't resolve '../internals/object-define-property' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'

ERROR in ./node_modules/core-js-pure/internals/export.js 6:17-52
Module not found: Error: Can't resolve '../internals/is-callable' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'

ERROR in ./node_modules/core-js-pure/internals/export.js 7:31-91
Module not found: Error: Can't resolve '../internals/object-get-own-property-descriptor' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'

ERROR in ./node_modules/core-js-pure/internals/export.js 8:15-48
Failed to compile.

Module not found: Error: Can't resolve '../internals/try-to-string' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'
LOG from webpack.FileSystemInfo
<w> Managed item C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure isn't a directory or doesn't contain a package.json (see snapshot.managedPaths option)
+ 15 hidden lines

ERROR in ./node_modules/core-js-pure/internals/a-callable.js 4:18-55
Module not found: Error: Can't resolve '../internals/try-to-string' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'

ERROR in ./node_modules/core-js-pure/internals/create-non-enumerable-property.js 4:27-73
Module not found: Error: Can't resolve '../internals/object-define-property' in 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\core-js-pure\internals'

ERROR in ./node_modules/core-js-pure/internals/export.js 7:31-91
Failed to compile.

Error: ENOENT: no such file or directory, open 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\hot\dev-server.js'
LOG from webpack.FileSystemInfo
<w> Managed item C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack isn't a directory or doesn't contain a package.json (see snapshot.managedPaths option)
+ 13 hidden lines

ERROR in ./node_modules/webpack/hot/dev-server.js
Module build failed (from ./node_modules/source-map-loader/dist/cjs.js):
Error: ENOENT: no such file or directory, open 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\hot\dev-server.js'

ERROR in ./node_modules/webpack/hot/emitter.js
Module build failed (from ./node_modules/source-map-loader/dist/cjs.js):
Error: ENOENT: no such file or directory, open 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\hot\emitter.js'

ERROR in ./node_modules/webpack/hot/log.js
Module build failed (from ./node_modules/source-map-loader/dist/cjs.js):
Error: ENOENT: no such file or directory, open 'C:\Users\notes\Documents\GitHub\OraiDemo\AXIOS\my-app\node_modules\webpack\hot\log.js'

webpack compiled with 3 errors

na ir zinoma sustabdziau react comanda  CRTL + C konsoleje ir paleidau is naujo su npm start
Pasileido, vadinasi galima siuo metu ignoruoti keleta ismestu klaidu iki sekancio karto