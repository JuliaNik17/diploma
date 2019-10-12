

import "./index.css";
import Glide from '@glidejs/glide'

new Glide('.glide').mount()

var glide = new Glide('#intro', {
    // type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
        800: {
            perView: 2
        },
        480: {
            perView: 1
        }
    }
})

glide.mount()