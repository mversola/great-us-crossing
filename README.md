# Boiler Room

It's a static site generator written in React.

## Get started

```
 $ git clone git@github.com:everydayhero/boiler-room.git
 $ cd boiler-room
 $ npm i
 $ npm run dev
```

The site will be visible at: http://lvh.me:8080

## Scripts

* `npm run dev`: Builds the app in development mode into `./.dev`, watches changes and rebuilds, serves `./.dev` at http://lvh.me:8080.
* `npm test`: Runs all test files matching `**/__tests__/*-test.js` using mocha.
* `npm run deploy:staging` builds the app in staging mode into `./dist` and deploys the contents of that directory to github pages.

## How do I add a new route / page?

There are a couple of ways to add a new route (you can think of routes as pages) to your site. The currently defined routes can be found in `source/Routes/index.js`.

We're using [react-router](https://github.com/rackt/react-router) for routing so if you want to learn more about how routes are matched and params are passed to components you can refer to [the docs](https://github.com/rackt/react-router/tree/master/docs).

The first `Route` component is used to define the base path for the rest of our routes. You'll find the `basePath` config option defined in `config/environment.json`. You'll often have this option set to `""`, as your site will be served from `http://the-domain.com/`, however if you need it to be served from `http://the-domain.com/a-directory` you can set `bathPath` to `a-directory`.

You'll see that there are only two routes defined so far. One is the index route and the other is a catch-all route. That is to say that anything other than the base-path will be handled by that second `Route`.

```
// ...
    <IndexRoute
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
    // This one here catches all paths other than the base path
    <Route
      path="*"
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
// ...
```

The catch-all path is often used for a "Not found" page. Here however we're loading the content for pages dynamically based on any path we can, this will be explained in more detail shortly.

Let's say you want to add a new simple page. No bells or whistles, no params from the URL. You just need to add a new Route before the catch-all with a path of your choosing:

```
// ...
    <IndexRoute
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
    <Route
      path="hello"
      component={ () => <div>Hello!</div> }
    />
    <Route
      path="*"
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
// ...
```

Then add a link to the path in your nav menu: `source/layouts/Header/index.js`

```
<NavLink to="/hello">Hello!</NavLink>
```

You should be able to go to http://lvh.me:8080, click your link, and see "Hello!" proudly rendered (and nothing else!).

If you want some information from the path you can use [params](https://github.com/rackt/react-router/blob/master/docs/guides/basics/RouteMatching.md#path-syntax).

```
// ...
    <Route
      path="hello/:name"
      component={ ({ params }) => <div>Hello, { params.name }!</div> }
    />
// ...
```

Here the `params` prop being passed to your component is provided by react-router.

Change the link you added to your nav menu in `source/layouts/Header/index.js`

```
<NavLink to="/hello/there">Hello, there!</NavLink>
                   ^^^^^^
```

Save and visit http://lvh.me:8080, click your link, and you should see "Hello, there!" rendered as the content.

### Route component organisation

Create a new file: `source/Routes/Hello/index.js` and:

```
import React from 'react'

export default ({ params }) => <div>Hello, { params.name }!</div>
```

In `source/Routes/index.js` add:

```
import Hello from './Hello'
```

To the top in order to import your component. Now you can use it as the component for your hello route:

```
// ...
    <Route
      path="hello/:name"
      component={ Hello }
    />
// ...
```

Your `source/Routes/index.js` file should look like this:

```
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { context } from '../config'

import SimpleContent, { fetchContent } from './SimpleContent'
import Hello from './Hello'

export default (
  <Route
    path={ `${ context.basePath }/` }
    component={ ({ children }) => children }>
    <IndexRoute
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
    <Route
      path="hello/:name"
      component={ Hello }
    />
    <Route
      path="*"
      component={ SimpleContent }
      onEnter={ fetchContent }
    />
  </Route>
)
```

If you look at `source/components/SimplePage/index.js` you'll notice that the `Main` layout is wrapping the component. To see what `Main` is up to have a look at `source/layouts/Main/index.js`. You'll see that it's rendering the header, children (the content), and footer. You can import and wrap your component in order for it to get the same layout.

`source/Routes/Hello/index.js`

```
import React from 'react'
import Main from '../../layouts/Main'

export default ({ params }) => (
  <Main title="A page!">
    <div>Hello, { params.name }!</div>
  </Main>
)
```

So that's how you can add simple pages / route-handling components to your site.

### What's up with these `source/content/**/index.md` files?

Now let's look at `SimpleContent`.

`SimpleContent` relies on there being any number and arrangement of `**/index.md` files in the `source/content` directory. There's a little magic here so bear with me.

If you create a new markdown file in `source/content/a-new-page/index.md` with the content:

```
---
title: Horay
---

Yep, that's **markdown**
```

Then add a link to the path in your nav menu: `source/layouts/Header/index.js`

```
<NavLink to="/a-new-page">A new page</NavLink>
```

Then you should be able to visit http://lvh.me:8080, click on your link and be taken to a page displaying your markdown content as HTML.

#### Need to know how it works?

Read on if you want to know the ins and outs of this process.

* When the development build runs `source/content/a-new-page/index.md` becomes `.dev/content/a-new-page/index.json`.
* `./dev` is being served at http://lvh.me:8080 during development so all `.dev/content/**/index.json` files are available at `http://lvh.me:8080/content/**/index.json`.
* When the router attempts to transition to `/a-new-page` it sees that neither `/` (the IndexRoute) nor `hello/:name` match and so goes to use the route with `path="*"`, the catch-all path. Whatever path we have is now available on the `params` object provided by react router as `splat`. So in this case the params object will have: `{ splat: 'a-new-page' }`
* This route has an `onEnter` function so that get's called before the router transitions.
* This route's `onEnter`, `fetchContent` will make a request to get the file available at `http://lvh.me:8080/content/<THE SPLAT PARAM>/index.json`. So: `http://lvh.me:8080/content/a-new-page/index.json`
* When the request succeeds, the component is rendered with the content of that json file.

To learn more detail about exactly how data is fetched and provided to the `SimpleContent` component, read up a little on Redux and have a look at the `fetchContent` function in `source/Routes/SimpleContent/index.js`.

**To review**

When you want to add a new page you can either add a new Route to `source/Route/index.js` and a new route-handling component + transition-handling function, or you can add a new `index.md` file in `source/content/<THE NEW PATH>/`.
