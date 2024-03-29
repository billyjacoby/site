---
title: "Building a GatsbyJS Theme - Part Two"
slug: "/blog/building-a-gatsbyjs-theme-part-two"
date: "2019-05-25"
featuredImage: "./gatsby-theme-2.jpeg"
---
Designing and configuring our Layout
------------------------------------

This is part two in a multi-part tutorial series on building your own Gatsby theme from scratch.

Please checkout the [Introduction](https://billyjacoby.dev/intro-to-gatsby-themes) and [Part One](https://billyjacoby.dev/building-a-gatsbyjs-theme-part-one) of this series if you haven't yet, as we will be picking up right where we left off at the end of part one.

The finished code for this portion of the tutorial can be found on my github repo [here.](https://github.com/billyjacoby/gabsty-theme-tutorial/tree/part-two)

Here's what we'll be tackling in this part of the tutorial:

*   Create a layout component
*   Enable our Layout component to work across all pages
*   Create a Header component that gets site metadata
*   Put our Header in our Layout component to be shown on all pages

### Create a layout component

So the first step in styling our theme is going to be building a main Layout component. We'll do this the same way you would build any other Layout component in Gatsby. We'll be building our styles in their own folders and importing them into our components. You can do the same, or use CSS in JS as well.

In your theme directory create a file named `layout.js` in a `gatsby-theme-tutorial/src/components/` directory.

Layout components in Gatsby take in a `{children}` object, build their layout around this object, and render the children passed into the Layout component. This is how you would do some basic styling in a Layout component in gatsby:

**_All of styles are only to show how this works, we will clean all of these up in a later tutorial_**

**`/packages/gatsby-theme-tutorial/src/styles/layout.css`**

    .container {
      margin: -8px;
      padding: 8px;
      background-color: tomato;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      width: 100%;
    }
    
    main {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
    }

**`/packages/gatsby-theme-tutorial/src/components/layout.js`**

    import React from "react";
    import "../styles/layout.css";
    
    const Layout = ({ children }) => {
      return (
        <div className="container">
          <main>{children}</main>
        </div>
      );
    };
    
    export default Layout;

Now the main difference in using a layout component in a normal Gatsby project, and a theme is that we want to make this layout available for all of the pages that may be built and not just the pages that come with our theme. To demonstrate this idea let's start by importing this layout file into our index.js file in our theme directory.

**`/packages/gatsby-theme-tutorial/src/pages/index.js`**

    import React from "react";
    import Layout from "../components/layout";
    
    export default () => (
      <Layout>
        <h1>Hello World!</h1>
      </Layout>
    );

Now lets add an About page to our site directory.

**`/site/src/pages/about.js`**

    import React from "react";
    
    const AboutPage = () => {
      return (
        <div>
          <h2>About page!</h2>
        </div>
      );
    };
    
    export default AboutPage;

Now lets start up our development server and see how our pages look.

`yarn workspace site develop`

After we navigate to `localhost:8000` you should see that our layout has taken effect!

However, if we navigate to `localhost:8000/about` you'll notice that the layout isn't rendered. This is because we haven't imported the Layout component into this page.

### Configuring our Layout to work across all pages

Now its possible to add our Layout component as an export to our theme package, which would enable users to import our Layout into all of the necessary pages. But we want to build a Gatsby theme to make development as easy as possible!

What we can do instead is wrap the root element of every page that gets rendered in our layout component using Gatsby's `wrapRootElement`. This will add our Layout component to every page created without having to import it into our page files.

Go ahead and revert your `index.js` back to just an H1 tag.

**`/packages/gatsby-theme-tutorial/src/pages/index.js`**

    import React from "react";
    
    export default () => <h1>Hello World!</h1>;

Next we'll create two more files in out root theme directory.

    touch packages/gatsby-theme-tutorial/gatsby-browser.js
    touch packages/gatsby-theme-tutorial/gatsby-ssr.js

Though it seems a little repetitive we will need to place the same code in both of these files. The reason for this is because this code will run either on the server side, or in the browser itself and regardless of where they run we still want our root element wrapped.

So both our `gatsby-browser.js` and `gatsby-ssr.js` files should contain the following code:

**`/packages/gatsby-theme-tutorial/gatsby-browser.js`**

And

**`/packages/gatsby-theme-tutorial/gatsby-ssr.js`**

    import React from "react";
    import Layout from "./src/components/layout";
    
    export const wrapPageElement = ({ element, props }) => {
      // props provide same data to Layout as Page element will get
      // including location, data, etc - you don't need to pass it
      console.log(props);
      return <Layout {...props}>{element}</Layout>;
    };

Now if we check both our index and about pages we should see that our layouts have rendered!

We can now begin building a site-wide header and navigation that will show up on every page, without having to import the layout component into each and every page.

### Create a Header component that uses site metadata

Lets create a simple site header that displays the site name and a link to the home page.

TO do this lets add some site information to the `gatsby-config.js` for our theme.

**`/packages/gatsby-theme-tutorial/gatsby-config.js`**

    module.exports = {
      siteMetadata: {
        title: `Gatsby Theme Tutorial`,
        description: `A tutorial for building a GatsbyJS theme from scratch!`
      },
      plugins: [
        {
          resolve: `gatsby-plugin-page-creator`,
          options: {
            path: `${__dirname}/src/pages`
          }
        }
      ]
    };

Now in our Header component we need to query for our site title. We'll do this using the `useStaticQuery` hook that Gatsby provides. We can then take that info and use it in our component.

**`/packages/gatsby-theme-tutorial/src/components/header.js`**

    import React from "react";
    import { useStaticQuery, graphql, Link } from "gatsby";
    
    import "../styles/header.css";
    
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
      `);
    
      return (
        <div className="header">
          <Link to="/" className="no-style">
            <h1 className="site-heading">{data.site.siteMetadata.title}</h1>
            <h4>{data.site.siteMetadata.description}</h4>
          </Link>
        </div>
      );
    };
    
    export default Header;

**`/packages/gatsby-theme-tutorial/src/styles/header.css`**

    .header {
      margin: -8px;
      padding: 1.5rem;
      width: 100%;
      align-self: center;
      text-align: center;
      background-color: purple;
      font-family: Arial, Helvetica, sans-serif;
      border-bottom: solid black;
    }
    
    .site-heading {
      font-size: 3rem;
    }
    
    .no-style {
      color: inherit;
      text-decoration: inherit;
    }

This is great! Noe we can access our site metadata from our `gatbsy-config.js` file in our header component. The real magic happens when we add and change this file in our site folder.

**`/site/gatsby-config.js`**

    module.exports = {
      siteMetadata: {
        title: `New Gatsby Site`,
        description: `A website using our Gatsby theme!`
      },
      __experimentalThemes: ["gatsby-theme-tutorial"]
    };

And now the header will contain the data configured in our site folder instead of the theme folder!

Now lets add our Header to our Layout component.

### Adding our Header to our Layout

All we have to do is import our `header.js` file into our `layout.js` component and place it accordingly.

**`/packages/gatsby-theme-tutorial/components/layout.js`**

    import React from "react";
    import "../styles/layout.css";
    
    import Header from "./header";
    
    const Layout = ({ children }) => {
      return (
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
      );
    };
    
    export default Layout;

Our header will now be displayed on every page created either in the site folder or the theme folder.

### Wrapping Up

Building components in our Gatsby theme allows us to build fully styled components while giving the consumers of the theme control over the content with ease.

We're just scratching the surface on building this Gatsby theme, but you can already see the potential for complete customization!

If something isn't working as you would expect feel free to compare your code against the code in the repo for this part of the tutorial [here.](https://github.com/billyjacoby/gabsty-theme-tutorial/tree/part-two)

Feel free to comment or tweet at me with any questions you might have, or with suggestions for what to cover in a future tutorial.

### What's Next

In part three of this tutorial we will begin building different styles for different sections of our theme (blog, store, etc…), as well as how we can override styles and whole components from the site that is using our theme.

The possibilities are endless when it comes to end-user customization with Gatsby themes. We'll also see how little boilerplate code we need to build full websites on a Gatsby theme!