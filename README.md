# GEL Typography

A flexible code implementation of the GEL Typography.

**This repository forms part of the the [GEL Foundations](https://github.com/bbc/gel-foundations).**

## What is this?

This is an implementation of our [GEL Typography Guidelines](http://www.bbc.co.uk/gel/guidelines/typography).
Providing typefaces, type sizes, weights, line-heights and tracking.
The GEL Typography scale has been established to work on all devices and is independent of device size and resolution.

The typographic scale has been optimised based on the size of the viewport and the input method being used. We take a 'touch first' approach to typography, adjustments are then made if a primary input other than touch has been detected.

It can used in two forms, using a Sass mixin:

```sass
.my-component {
    @include gel-typography('canon-bold');
}
```

Or by simply adding the relivant classes to your markup:

```html
<h1 class="gel-canon-bold">Global Experience Language</h1>
```

## Installation

The easiest way to get started with the GEL Typography component is to use the combined version of the typography included within this repository.

If you're a more advanced user and want to integrate the GEL Typography component within your codebase, use one of the following options:

### Install using Bower

```bash
$ bower install --save git+ssh://git@github.com/bbc/gel-typography.git
```

```sass
// your-app/main.scss
@import 'bower_components/gel-sass-tools/sass-tools';
@import 'bower_components/sass-mq/mq';
@import 'bower_components/gel-typography/typography';
```

### Install using NPM

```bash
$ npm install --save git+ssh://git@github.com/bbc/gel-typography.git
```

```sass
// your-app/main.scss
@import 'node_modules/gel-sass-tools/sass-tools';
@import 'node_modules/sass-mq/mq';
@import 'node_modules/gel-typography/typography';
```

### Install manually

You can install this component manually by downloading the content of this Git repo into your project and use a Sass @import to include it in your project.

> **Note:** you will manually need to manage the dependencies below, without these this component will fail to compile.

## Dependencies

In order to use the component you will need the following components available:

- [GEL Sass Tools](https://github.com/bbc/gel-sass-tools)
- [Sass MQ](https://github.com/sass-mq/sass-mq)

## Usage

By default the GEL Typography component does not output any markup but exposes a Sass Mixin which can be called within your Sass.

**Example**

```scss
.my-component {
    @include gel-typography('pica');
}

.my-component__title {
    @include gel-typography('canon');
}
```

A collection of typography classes can be output by defining `$gel-type-enable--markup-output: true;` before you `@import` the typography partial.

**Example:**

```scss
$gel-type-enable--markup-output: true;

@import "gel-typography/typography";
```

The following configurable options are available:

### General Configuration

- `$gel-type-namespace: 'gel-';` - the default namespace applied to all typography classes
- `$gel-type-touch-class: 'no-touch';` - the class exposed used by your touch detection script applied when a non-touch interface is detected

### Output Configuration

- `$gel-type-enable--markup-output: false;` - output a collection of classes for each type group
- `$gel-type-enable--font-family: false;` - output the correct font-family required by GEL Typography if ORB not available.
- `$gel-type-enable--base-elements: false;` - map the GEL Typography classes to the relevant HTML elements

### Custom Font Configuration

If you're using another font-face other than Arial and need to make adjustments to any of the type settings you can do this by defining in a custom `$gel-type-settings` map.

*For example:* [BBC News](http://www.bbc.com/burmese) support many languages, some of which do not use latin based character sets which require custom font scripts. It is often the case that these custom fonts will require bespoke font-sizes or line-heights.

For example, the configuration for Burmese may look like:

```scss
$gel-type-settings: (
    'trafalgar': (
        'group-a': (
          'font-size': 22px,
          'line-height': 30px,
        ),
        'group-b': (
          'font-size': 26px,
          'line-height': 36px
        ),
        'group-c': (
          'font-size': 38px,
          'line-height': 50px
        ),
        'group-d': (
          'font-size': 32px,
          'line-height': 32px
        )
    ),
    'trafalgar-bold': (
       ...
    )
);
```

## Touch Detection

We operate a [touch-first](http://www.bbc.co.uk/gel/guidelines/how-to-design-for-touch) approach to our Typography. Group C (touch) sizes are used from 600px by default and then detection should be used to get the Group D (non-touch) sizes.

We also understand that touch detection is not an absolute measure and does not guarantee a 'true or false' outcome - this is okay.

### Why not just have Group C and remove Group D?

Products such as News & Sport require more densely packed, legacy-like font sizes for their 'desktop' experience. Eventually we aim to remove this group altogether.

### How can you detect touch

There are a number of ways you can apply the touch detection. [Modernizr](https://modernizr.com), the common feature detection library offers some basic touch events detection. Alternatively, you could use your own bespoke detection script like this one used by [BBC Sport](https://github.com/bbc/onesport/blob/master/webapp/static-versioned/js/features.js#L5-L24).

## Who is using this?

The following teams are currently using this component: GEL, Sport, Live, Homepage, Search, BBC Food, CBBC, CBeebies, BBC Three, MyBBC, K&L, Taster & Weather

If your team is using this component, let us know and we'll add you to the list.

## Who to get in touch with?

Get in touch with Shaun Bent or Al Jones for more information about this project.

## License

> The MIT License (MIT)
>
> Copyright 2015 British Broadcasting Corporation
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
