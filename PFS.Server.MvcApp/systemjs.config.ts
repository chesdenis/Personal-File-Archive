/** Type declaration for ambient System. */
declare var System: any;

const map: any = {
    'app': 'app',
    '@angular': 'npmLibs/@angular',
    'angular2-in-memory-web-api': 'npmLibs/angular2-in-memory-web-api',
    'rxjs': 'npmLibs/rxjs'
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

const materialPkgs: string[] = [
    'core',
    'button'
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

materialPkgs.forEach((pkgName: string) => {
    packages[`@angular2-material/${pkgName}`] = { main: `${pkgName}.js`, defaultExtension: 'js' };
});


System.config({ map, packages });