/** Type declaration for ambient System. */
declare var System: any;

const map: any = {
    'app': 'app',
    '@angular': 'npmLibs/@angular',
    'angular2-in-memory-web-api': 'npmLibs/angular2-in-memory-web-api',
    'rxjs': 'npmLibs/rxjs',
    'jaydata/core': 'npmLibs/jaydata/jaydata.js',
    'jaydata/odata': 'npmLibs/jaydata/jaydataproviders/oDataProvider.js',
    './db.odata.context':'app/contexts/db.odata.context.js'
}

const packages: any = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' }
}

const angularPkgs: string[] = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade'
];


//Individual files (~300 requests):
function ngPackIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
}
// Bundled (~40 requests):
function ngPackUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
}
// Most environments should use UMD; some (Karma) need the individual index files
var ngPackageConfig = System.packageWithIndex ? ngPackIndex : ngPackUmd;
// Add package entries for angular packages
angularPkgs.forEach(ngPackageConfig);

var config = {
    map: map,
    packages: packages,
    meta: {
        'jaydata/core': {
            format: 'cjs'
        },
        'jaydata/odata': {
            format: 'cjs',
            deps: ['jaydata/core']
        },
        './db.odata.context': {
            deps: ['jaydata/core', 'jaydata/odata']
        }
    }
};

System.config(config);