# Building PFS

This document describes how to set up your development environment to build and test PFS.
It also explains the basic mechanics of using `git`, `node`, and `npm`.

* [Solution structure](#solution-structure)
* [Prerequisite Software](#prerequisite-software)
* [Getting the Sources](#getting-the-sources)
* [How to build backend](#how-to-build-backend)
* [How to build frontend](#how-to-build-frontend)
* [Building](#building)
* [Continious integration](#continious-integration)

See the [contribution guidelines](/CONTRIBUTING.md)
if you'd like to contribute to PFS.

## Solution Structure
Our solution consists of two parts: Backend, Frontend:
* PFS.WindowsOnly - backend. This part should be used in windows-based operation systems. It contains all server operations which could be called from UI. Consists of the PFS.Server, and PFS.Server.Admin projects.

* PFS.AnyOS - backend. This part is intended for any major OS (i.e. Windows, Linux, Mac).  It contains all server operations which could be called from UI. It also consists of the PFS.Server, and PFS.Server.Admin projects. But for now we work more aggressive on the WinOnly part, because we have several runtime errors in the AnyOS. We hope, that this situation will be changed as soon as possible.

* PFS.Server.UI - frontend. This solution contains only UI components, which use Angular2 as template engine.

* PFS.Server.JasmineTests - BDD tests, which help us to check and test our solution for correct working. 

* PFS.Server.Core - shared project, which contains bussines logic of our solution. It is used in both WinOnly and AnyOS parts, so it contains conditional compilation operators. 


## Prerequisite Software

Before you start building PFS, you must install and configure the
following products on your development machine:

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

* [Node.js](http://nodejs.org), (version `>=5.4.1 <6`) to generate distributable files. We also use Node's Package Manager, `npm`
  (version `>=3.5.3 <4.0`), which comes with Node. Depending on your system, you can install Node either from
  source or as a pre-packaged bundle.

* [Asp.Net Core](https://www.asp.net/core) which is used to run PFS server.

* [SQLite](https://www.sqlite.org/) which is used as database engine for AnyOS modification.
* [MS SQL](https://www.microsoft.com/en-us/sql-server/sql-server-editions-express) which is used as database server for WinOnly modification.

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

## How to build backend
Choose part, which you want to run: WinOnly or AnyOS:
### WinOnly:
We advice you to use Visual Studio Community 2015. This is a faster option to start WinOnly backend:
* PFS.WinOnly uses MS SQL server as database engine. So you need to install and configure it.
* Open Visual Studio.
* Navigate to .\PFS.WindowsOnly folder.
* Click PFS.WindowsOnly.sln, so Visual Studio loads backend solution.
* Open Package Manager Console and restore NuGet packages for PFS.Server and PFS.Server.Admin.
* Configure startup mode, select 'Multiple startup projects' option and switch Action to 'Start without debugging' or 'Start' for PFS.Server/PFS.Server.Admin.
* Click run in Visual Studio.
* Build PFS.Server.UI. See [How to build frontend](#how-to-build-frontend)
* Navigate to http://localhost:5000 - you will see startup page of your PFS Server. OR navigate to http://localhost:5030 - you will see startup page of your PFS.Server.Admin

### AnyOS:
We advice you to use Visual Studio Community 2015. This is a faster option to start AnyOS backend:
* PFS.AnyOS uses SQLite as database engine. So you need to install SQLite and create database also. This shell helps you to create database:
```shell
cd <path to .\PFS.AnyOS\PFS.Server>
dotnet restore
dotnet ef database drop -f
dotnet ef migrations remove -f
dotnet ef migrations add "PfsDbMigration"
dotnet ef database update
```
* Navigate to .\PFS.AnyOS folder.
* Click PFS.AnyOS.sln, so Visual Studio loads backend solution.
* Wait until Visual Studio restores all dependencies.
* Configure startup mode, select 'Multiple startup projects' option and switch Action to 'Start without debugging' or 'Start' for PFS.Server/PFS.Server.Admin.
* Click run in Visual Studio.
* Build PFS.Server.UI. See [How to build frontend](#how-to-build-frontend)
* Navigate to http://localhost:5000 - you will see startup page of your PFS Server. OR navigate to http://localhost:5030 - you will see startup page of your PFS.Server.Admin


If you want to use Visual Studio code, then you should:

* Navigate to .\PFS.AnyOS folder.
* Open PFS.Server or PFS.Server.Admin folder in VS Code and choose View->Integrated Terminal.
* Inside integrated terminal:
* Type 'dotnet restore' and press Enter.
* Type 'dotnet run' and press Enter.
* Build PFS.Server.UI. See [How to build frontend](#how-to-build-frontend)
* Navigate to http://localhost:5000 - you will see startup page of your PFS Server. OR navigate to http://localhost:5030 - you will see startup page of your PFS.Server.Admin

## How to build frontend

To build frontend you can choose any editor, but it would be better if you choose VS Code or Visual Studio:

If you want to use Visual Studio code, then you should:
* Open ./PFS.Server.UI folder in VSCode and choose View->Integrated Terminal.
* Inside integrated terminal:
* Type 'npm install' and press Enter.
* Type 'gulp clean-wwwroot' and press Enter. You should see that wwwroot was cleared.
* Type 'gulp packages-apply' and press Enter. This action copies packages to the wwwroot of PFS.Server and PFS.Server.Admin projects.
* Type 'gulp ui-apply' and press Enter. This action applies UI to the PFS.Server and PFS.Server.Admin.
* Also you can investigate tasks for fast UI building. Type 'gulp --tasks' and you will see all available tasks. Consider to use watch tasks for incremental components compilation.

If you prefer to use Visual Studio - you need:
* Open Visual Studio.
* Click on PFS.Shared.sln. It loads all PFS.Server.UI project in Visual Studio.
* Wait until Visual Studio restores all dependencies and node packages.
* Open Task Runner Explorer:
* Double click on 'clean-wwwroot'. You should see that wwwroot was cleared.
* Double click on 'gulp packages-apply'. This action copies packages to the wwwroot of PFS.Server and PFS.Server.Admin projects.
* Double click on 'gulp ui-apply'. This action applies UI to the PFS.Server and PFS.Server.Admin.
* Also you can investigate tasks for fast UI building. Consider to use watch tasks for incremental components compilation.

## Continious integration

We use [TeamCity](https://www.jetbrains.com/teamcity/) for continuous integration, . 
For using TeamCity you should:
* Installation and configuration TeamCity follow this [official instruction](https://confluence.jetbrains.com/display/TCD8/Installing+and+Configuring+the+TeamCity+Server#InstallingandConfiguringtheTeamCityServer-InstallingTeamCityServer).

* Create [teamcity project](https://confluence.jetbrains.com/display/TCD10/Creating+and+Editing+Projects#CreatingandEditingProjects-CreatingProject).

* Install [TeamCity Node plugin](https://github.com/jonnyzzz/TeamCity.Node), because we use node.js and gulp for building front end part of our app.

* Create trigger. Now we are using standart simple trigger, which was created with project. It reacts for any commit to git. In the future, we will create our trigger with special behaviour...

* Create build configuration. This is the most important part of all configuration. Build consists of four steps.
  
Step 1: Gulp install:
```shell
Runner type: Node.js NPM (Starts NPM)
Execute: If all previous steps finished successfully
Run targets: view
NPM: <default>
Working directory: same as checkout directory
Additional command line arguments: <empty>
```
Step 2: Gulp task runner
```shell
Runner type: Gulp (Executes Gulp tasks)
Execute: If all previous steps finished successfully
Execution mode: npm
File: view
Run targets: view
Working directory: same as checkout directory
Additional command line arguments: <empty>
```
Step 3: Install nuget packages
```shell
Runner type: NuGet Installer (Installs and updates missing NuGet packages)
Execute: If all previous steps finished successfully
Path to NuGet.exe:
Package Sources: Use nuget default package source
Path to .sln: PFS.Solution.sln
Exclude Version: OFF
Restore Mode: Restore packages (requires NuGet 2.7+)
Use local machine packages cache: OFF
Restore / install command custom command line:
Update packages: OFF
Update mode: Update via solution file
Use safe packages update: OFF
Include PreRelease packages: OFF
Update command custom command line:
```
Step 4: Application build
```shell
Runner type: MSBuild (Runner for MSBuild files)
Execute: If all previous steps finished successfully
Build file path: PFS.Solution.sln
Working directory: same as checkout directory
MSBuild version: Microsoft Build Tools 2015
MSBuild ToolsVersion: 14.0
Run platform: x86
Targets: none specified
Command line parameters to MSBuild.exe: none specified
Reduce test failure feedback time: OFF
.NET Code Coverage: disabled
```
* Add environment variable, for enable NuGet Package Restore function. Do this, you can in parameters section.
Variable parameters:
```shell
Name: env.EnableNuGetPackageRestore
Kind: Environment variable (env.)
Value: true
```
or you can enable this function in Visual Studio

