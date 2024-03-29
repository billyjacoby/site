---
title: "Building a GatsbyJS Theme - Part Three"
slug: "/blog/building-a-gatsbyjs-theme-part-three"
date: "2019-11-21"
featuredImage: "./gatsby-theme-3.jpeg"
---
Making our existing theme composable
------------------------------------

This is part three in a multi-part tutorial series on building your own Gatsby theme from scratch.

Please checkout the [Introduction](https://billyjacoby.dev/intro-to-gatsby-themes), [Part One](https://billyjacoby.dev/building-a-gatsbyjs-theme-part-one), and [Part Two](https://billyjacoby.dev/building-a-gatsbyjs-theme-part-two) of this series if you haven't yet, as we will be picking up right where we left off at the end of part Two.

The finished code for this portion of the tutorial can be found on my github repo [here.](https://github.com/billyjacoby/gabsty-theme-tutorial/tree/part-three)

The end goal of this tutorial is to break down some common website functions into their own respective themes in order to allow us to use them as _basically_ their own components. That means that we need to make sure that each component plays nicely with each other. We'll have to change a few things in our theme to do this.

Here's what we'll be tackling in this part of the tutorial:

*   Change existing theme name
*   Update our project's dependencies
*   Add the ability to take options into our theme
*   Pass options in to our theme
*   Export components from our theme to be used in our site

### Change existing theme name

The theme we have been working on this far we have named `gatsby-theme-tutorial`. the first thing that we'll do here is change this name to reflect the goal of this theme. We'll change this directory name to `gatsby-theme-style` for now. After doing this our folder structure will look like this:

    gatsby-theme-tutorial-development/
    --packages/
      |--gatsby-theme-style/
        |--package.json
        ...
    --site/
      |--package.json
    --package.json

We'll also need to update our `packages/gatsby-theme-style/package.json` and `site/package.json` file to change the name of our theme from `gatsby-theme-tutorial` to `gatsby-theme-style`.

We're also going to move the `index.js` file from our theme's pages folder into our site's pages folder.

Before we can continue with this build and run our development site again, we have to do a few other things.

### Update our dependencies

Next, we will need to update out gatsby-config.js in our site directory, but before we do this lets go ahead and update all of our packages by running `yarn upgrade` in our root project directory.

We're doing this mainly because it's been a while since we've done any work on this tutorial and we want to be sure we're using the most up to date packages.

After everything has been updated, lets import our theme as a plugin rather than using the `__experimental` tag that we've been using.

#### site/gatsby-config.js

    module.exports = {
      siteMetadata: {
        title: `New Gatsby Site`,
        description: `A website using our Gatsby theme!`,
      },
      plugins: [
        {
          resolve: "gatsby-theme-style",
          options: {
            // blank for now, but we;ll be coming back to this
          },
        },
      ],
    }

Now if we run `yarn workspace site develop` you should see that our site works the exact same way that it did at the end of our last tutorial. Now about that empty options object…

### Passing options into our theme

We can pass any number of options to our theme using the options object from the `gatsby-config.js` of our site. This can be anything from color schemes, to navigation items, and much more. We're going to start by passing an option that tells our theme if we would like our `Layout` component to continue to wrap the root element - what it's currently doing.

#### site/gatsby-config.js

    module.exports = {
      siteMetadata: {
        title: `New Gatsby Site`,
        description: `A website using our Gatsby theme!`,
      },
      plugins: [
        {
          resolve: "gatsby-theme-style",
          options: {
            wrapRootElement: false,
          },
        },
      ],
    }

Now in order to be able to access this options object in our theme we must make a change to our theme's `gatbsy-config.js`

#### packages/gatsby-theme-style/gatsby-config.js

    module.exports = themeOptions => ({
      siteMetadata: {
        title: `Gatsby Theme Tutorial`,
        description: `A tutorial for building a GatsbyJS theme from scratch!`,
      },
      plugins: [
        {
          resolve: `gatsby-plugin-page-creator`,
          options: {
            path: `${__dirname}/src/pages`,
          },
        },
      ],
    })

This will enable us to access the `themeOptions` object just about anywhere in our theme to make decisions based on the options passed in. Now lets utilize this object in both our `packages/gatsby-theme-style/gatsby-browser.js` and `packages/gatsby-theme-style/gatsby-ssr.js` files to determine whether or not we should wrap our root element in our theme's styles or not.

#### packages/gatsby-theme-style/gatsby-browser.js

AND

#### packages/gatsby-theme-style/gatsby-ssr.js

    import React from "react"
    import Layout from "./src/components/layout"
    
    export const wrapPageElement = ({ element, props }, themeOptions) => {
      // props provide same data to Layout as Page element will get
      // including location, data, etc - you don't need to pass it
      if (themeOptions.wrapRootElement) {
        return <Layout {...props}>{element}</Layout>
      } else {
        return
      }
    }

After we make this change we see that our website no longer has any styles applied! Now if we toggle the `wrapRootElement` option to true in our `site/gatsby-config.js` file, we'll see all of our styles get applied again.

**_Note that you may have to stop and restart your development server for this to take effect_**

Before we do anything else lets add a quick navbar component to our theme so that we can change between pages.

#### packages/gatsby-theme-style/src/components/navbar.js

    import React from "react"
    import { Link } from "gatsby"
    
    import "../styles/navbar.css"
    
    const Navbar = () => {
      return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      )
    }
    
    export default Navbar

#### packages/gatsby-theme-style/src/style/navbar.css

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }
    
    li {
      float: left;
    }
    
    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    
    li a:hover {
      background-color: #111;
    }

Then lets make a few changes to our `Header.css` and add the component to our header as well.

#### packages/gatsby-theme-style/src/style/header.css

    .header {
      margin: -8px;
      // CHANGED
      padding: 1.5rem 0 0 0;
      // DELETED WIDTH PROPERTY
      align-self: center;
      text-align: center;
      background-color: purple;
      font-family: Arial, Helvetica, sans-serif;
      border-bottom: solid black;
    }
    ...

#### packages/gatsby-theme-style/src/components/header.js

    import React from "react"
    import { useStaticQuery, graphql, Link } from "gatsby"
    import Navbar from "./navbar"
    
    import "../styles/header.css"
    
    const Header = () => {
      const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `)
    
      return (
        <div className="header">
          <Link to="/" className="no-style">
            <h1 className="site-heading">{data.site.siteMetadata.title}</h1>
            <h4>{data.site.siteMetadata.description}</h4>
          </Link>
          <Navbar />
        </div>
      )
    }
    
    export default Header

Now when we go to our home page we see the navbar with a link to the home page. This is where things can get a little more complicated.

We have more than just the home page in our site's pages directory, but how do we tell our theme to add those to the navbar? One way to do this is to update the options object with all of our page info.

### Pass options in to our theme

Lets add a `navigationPages` object to our options object that will be passed in to our theme.

#### site/gatsby-config.js

    ...
      plugins: [
        {
          resolve: "gatsby-theme-style",
          options: {
            wrapRootElement: true,
            // NEW OBJECT
            navigationPages: [
              {
                name: "About",
                title: "About Us Page",
                path: "/about"
              }
            ]
          }
        }
      ]
    ...

Now in our theme, lets make this object accessible to our siteMetadata object.

#### packages/gatsby-theme-style/gatsby-config.js

    module.exports = themeOptions => ({
      siteMetadata: {
        title: `Gatsby Theme Tutorial`,
        description: `A tutorial for building a GatsbyJS theme from scratch!`,
        // NEW
        navigationPages: themeOptions.navigationPages
          ? [...themeOptions.navigationPages]
          : "null",
      },
      plugins: [
        {
          resolve: `gatsby-plugin-page-creator`,
          options: {
            path: `${__dirname}/src/pages`,
          },
        },
      ],
    })

I'm not sure if there is a better way, but in order to allow the graphql query to fail silently we need to use a ternary operator here in order to check if this option was passed into our theme. This way if a user does not pass additional pages in to our theme package we can still query the rest of the siteMetadata without getting an error from graphql.

Lets update the static query in our header component, and then pass that data down to our navbar component.

#### packages/gatsby-theme-style/src/components/header.js

    ...
      const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
              description
              navigationPages {
                name
                title
                path
              }
            }
          }
        }
      `);
    
      return (
        <div className="header">
          <Link to="/" className="no-style">
            <h1 className="site-heading">{data.site.siteMetadata.title}</h1>
            <h4>{data.site.siteMetadata.description}</h4>
          </Link>
          <Navbar navigationPages={data.site.siteMetadata.navigationPages} />
        </div>
      );
    };
    ...

And finally lets access this new data in our navbar component and add the page to our navbar!

#### packages/gatsby-theme-style/components/navbar.js

    ...
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {navigationPages.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
    ...

Now we can navigate between all of the pages in our site's directory from our theme's navbar component!

This all works great if we want every page of our site to be styled by our theme, but what if we don't? How would we use the theme's style only on specific pages?

### Export components from our theme to be used in our site

In order to choose to use specific components from our theme, we need to export those components from our theme package. This is done simply from inside our package's `index.js` file.

Currently the only line of code in this file is a comment that reads `//no-op`. All we have to do to allow our site to import components from our theme is add some export statements to this file.

#### packages/gatsby-theme-style/index.js

    export { default as Layout } from "./src/components/layout"
    export { default as Header } from "./src/components/header"
    export { default as Navbar } from "./src/components/navbar"

Now lets change the wrapRootElement option in out `site/gatsby-config.js` file to false so that we can selectively choose which page will be styled with out Layout component.

#### site/gatsby-config.js

    ...
          wrapRootElement: false,
    ...

After restarting our development server we will see that our theme's styles are no longer applied to any of our site's pages. Lets manually apply them to our index page.

#### site/src/pages/index.js

    import React from "react"
    import { Layout } from "gatsby-theme-style"
    
    export default () => (
      <Layout>
        <h1>Hello World!</h1>
      </Layout>
    )

Just like that all of the components from our theme are now importable and able to be used by any site that is using them!

### Wrapping Up

So in this part of the tutorial we changed and updated some things on our existing theme to enable our theme to play nicely with other themes that might be composed together to make up a website.

One of the things that makes Gatsby themes so appealing is the ability to compose multiple themes together. Breaking down website functionality into separate themes will allow us, as developers, to simply require a gatsby theme to add all of the functionality of a blog, or a store, or just about anything you can think of.

I'm already using a lot of these features on a regular basis, and I can say for certain that it has drastically improved my development workflow.

Thanks for reading!