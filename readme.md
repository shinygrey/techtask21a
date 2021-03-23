# Greg Hurlock tech task

### Layout and Style
I first created a basic HTML layout which can be seen in `/mockup`.
I then used sass to apply the styles I wanted to match the task layout.

Styles have been kept independent of Vue and Wordpress and used the following commands to build in place.
* `sass sass/index.scss mockup/styles.css`
* `sass sass/index.scss vue-app/src/assets/styles.css`
* `sass sass/indexwp.scss wptheme/style.css --style compressed`

### Vue
Vue app was started using Vue CLI.  To create components I cut up the layout from `/mockup/index.html` and added some additional basic pages.
The Vue app can be launched from the `/vue-app` directory using `npm run serve`.
I had used Redux before but not Vuex so it took some time to familiarise myself.
To demonstrate use of Vuex I used it to hold state from the "How can we help you?" form.  The choices can be seen in the footer at the bottom.

For a real production site I'd have cut up the layout in to further components.

### WordPress
I created an additional sass file to hold theme meta data.  I then used this in underscores.  It's a basic effort and for a real site I'd probably be more likely to create an appropriate child theme as I've done with projects for clients.
