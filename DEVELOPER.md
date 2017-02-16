# Building PFS

This document describes how to set up your development environment to build and test PFS.
It also explains the basic mechanics of using `git`, `node`, and `npm`.

* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [Installing NPM Modules](#installing-npm-modules)
* [Building](#building)

See the [contribution guidelines](/CONTRIBUTING.md)
if you'd like to contribute to PFS.

## Prerequisite Software

Before you can build PFS, you must install and configure the
following products on your development machine:

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

* [Node.js](http://nodejs.org), (version `>=5.4.1 <6`) to generate distributable files. We also use Node's Package Manager, `npm`
  (version `>=3.5.3 <4.0`), which comes with Node. Depending on your system, you can install Node either from
  source or as a pre-packaged bundle.

* [Asp.Net Core](https://www.asp.net/core) which is used to run PFS server.

## Getting the Sources

Fork and clone the PFS repository:

1. Login to your GitHub account or create one by following the instructions given
   [here](https://github.com/signup/free).
2. [Fork](http://help.github.com/forking) the [main PFS repository](https://github.com/chesdenis/Personal-File-Storage).
3. Clone your fork of the PFS repository and define an `upstream` remote pointing back to
   the PFS repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone git@github.com:<github username>/Personal-File-Storage.git

# Go to the Personal-File-Storage directory:
cd Personal-File-Storage

# Add the main PFS repository as an upstream remote to your repository:
git remote add upstream https://github.com/chesdenis/Personal-File-Storage
```
## Installing NPM Modules

Next, install the JavaScript modules needed to build PFS:

```shell
# Install PFS project dependencies (package.json)
cd <path to .\Personal-File-Storage\PFS.Server.MvcApp>
npm install
```

Next, install gulp package as follows (you might need to prefix this command with `sudo`):

```shell
cd <path to .\Personal-File-Storage\PFS.Server.MvcApp>
npm install -g gulp 
```

## Building

To build PFS run:

* For frontend, open new shell and run:
```shell
cd <path to .\Personal-File-Storage\PFS.Server.MvcApp>
gulp default
```
* For backend, open new shell and run:
```shell
cd <path to .\Personal-File-Storage\PFS.Server.MvcApp>
dotnet restore
dotnet run
```
* If you go to use SqLite as DBEngine, then open new shell and run:
```shell
cd <path to .\Personal-File-Storage\PFS.Server.DbProvider.EfCore.SqLiteOData>
dotnet restore
gulp default
dotnet run
```
* If you go to use MsSql as DBEngine, then open new shell and run
```shell
cd <path to .\Personal-File-Storage\PFS.Server.DbProvider.Ef.MsSqlOData>
dotnet restore
dotnet run
```

* Results are put in the dist folder.


