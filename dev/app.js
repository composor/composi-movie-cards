import {h, Component} from 'composi'
import {title} from './components/title'
import Movies from './components/movie/movies'

// Set state on component.
// Will cause component to render.
title.setState('Movie Cards')

new Movies()
