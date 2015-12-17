# riot-animation-context riot tag (animation-context)

[![Build Status](https://travis-ci.org/any-code/riot-animation-context.svg?branch=master)](https://travis-ci.org/any-code/riot-animation-context)

> Riot JS Tag animation context for dealing with css transitions and animated addition and removal of riot tags or just dynamically ineracting with css animations

Includes animate.css for base animations, these can be overridden or added to in external css.

## Why not just use animate.css

You can still use animate.css. This tag helps when dynamically mounting riotjs tags and causing some animation effects to occur. Because
the animation can be controlled through opts, the effects themselves can be dynamically changed and played. 

The other benefit is that it handles animation on `unmount` of riot tags nicely.

## Getting Started

### 1. Installation

``` bash
npm install riot-animation-context
```

### 2. Examples

``` javascript
   
   require('riot-animation-context')
   
```

``` html

<animation-context
    animate-on-mount="true" 
    animate-delay-ms="0" 
    animate-infinitely="true" 
    animate-in="rubberBand" 
    animate-out="lightSpeedOut"
    >
    <p>Lizards are a widespread group of squamate reptiles, with approximately over 6,000 species ranging across all continents except Antarctica.</p>
</animation-context>

<script>
    riot.mount('animation-context');
</script>
```

### 3. Riot Tag

#### animation-context Tag Attributes

- **animate-in="{{class}}" eg. "lightSpeedIn", "fadeIn"**
The css animation to play when the tag's `in()` method is called
```html
    <animation-context animate-in="rotateIn">...</animation-context>
```

- **animate-infinitely="{{true|false}}" eg. "true", "false"**
Play the `animate-in` animation infinitely when it is called
```html
    <animation-context animate-infinitely="true">...</animation-context>
```

- **animate-out="{{class}}" eg. "lightSpeedOut", "rotateOut"**
The css animation to play when the tag's `out()` method is called
```html
    <animation-context animate-out="fadeOut">...</animation-context>
```

- **animate-on-mount="{{true|false}}" eg. "true", "false"**
Start the `animate-in` animation as soon as the tag is mounted 
```html
    <animation-context animate-on-mount="false">...</animation-context>
```

- **animate-auto-in-delay="{{milliseconds}}" eg. "0", "1000"**
Wait x number of milliseconds before `animate-in` **when `animate-on-mount` is true**
```html
    <animation-context animate-auto-in-delay="500">...</animation-context>
```

- **animate-auto-out-delay="{{milliseconds}}" eg. "0", "1000"**
Wait x number of milliseconds after `animate-in` has finished to start playing `animate-out`
```html
    <animation-context animate-auto-out-delay="2000" animate-out="hinge">...</animation-context>
```

## Copyright and license
Copyright (c) 2015 any-code qrb <lee@anycode.io>

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.
