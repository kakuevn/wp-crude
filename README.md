### WordPress Starter Theme with webpack
> Minimizing js and css files for already too overloaded wordpress themes.

## What does it have?

Nothing but Webpack ready to roll. All the other `.php` templates, styles, and etc. - those are up to you.

## What's up with all those `.scss` files?

Right. So...

1. `_basics.scss` file has some classes you can use to style your content a little. Nothing too big, but very handy. 
2. `_burger.scss` has some code for the menu icons. Comes from [here](http://joren.co/sass-burger/).
3. `_fonts.scss` helps with fonts. Instructions are [here](https://gist.github.com/jonathantneal/d0460e5c2d5d7f9bc5e6). 
4. `_normalize.scss` requires no introduction.
5. The rest of the SCSS files in the `style` folder are in [SMACSS](https://smacss.com/) style + `_media.scss` because I don't like putting it all in `_state.scss` + `_vars.scss` also just because.

## What do I do?

1. `yarn install`.
2. `yarn run dev` NOTE: make sure your theme is on wamp server or something. I haven't figured hot reloading just yet, so you'd need to do it manually.
3. When all's done - `yarn run build`.
4. Celebrate.