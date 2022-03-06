# cses-random

A chrome plugin to randomly choose a cses problem.  You can solve cses problem
set in order to learn concepts.  But, sometimes it forces you to think in the
same heading, i.e. if you already know that it is a tree problem, you tend to
easily find the solution.  You start missing out the important area of problem
identification.  It will become difficult in interviews to spot the type of
problem.

This addon randomly chooses a problem from cses set and hides the details on
which section it is under.

# install

```
$ npm  install
$ npm run chrome:build
```

You will have your plugin ready in dist folder.  You can then go to Chrome ->
Extensions, enable developer mode. Then, you can click on "Load unpacked" button
and select the dist folder. An icon will appear next to the address bar with
name `date-swiss`. You can edit preferred date formates by right-clicking on the
icon and choose "options".

# develop

```
$ npm install
$ npm run watch:plugin
```

This watches for any source changes and builds the plugin in dist folder
