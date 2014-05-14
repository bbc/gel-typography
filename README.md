# GEL Responsive Typography

*The GEL Responsive Typography scale has been established to work on all devices and is independent of device size and resolution.* 
The typographic scale has been optimised based on the size of the viewport and the input method being used. We take a 'Touch First' approach to typography, adjustments are then made if a primary input other than touch has been detected.

## Background

In order to typographically size elements on the page independently and replicate styles across a range of elements we've established a naming convention that inherits from traditional type measuring techniques. Type dimensions were originally measured from a piece of metal bearing that was cast for each character.

Type sizes were originally named - Catalogs with such names appeared as early as 1592. Some of the names came from the type of book produced in that size. Cicero was a size used for editions of classical authors; Primer was used for religious books ordered by Henry VIII.

In order to stay inline with the BBC brand and audience, each type specification is based on typically British names. The names refer to corresponding point sizes but there is no relationship between the names and other defined standards like the inch.

### Typographic Naming Scale

The following class names allow us to scale elements independently from one another whilst also providing a memorable and simple typographic scale.

- Trafalgar (`.trafalgar`) - typically used for the main page heading or article heading
- Double Pica (`.double-pica`) - generally used for sub-headings
- Great Primer (`.great-primer`) - third level headings typically used with a `<h3>` tag
- Pica (`.pica`) - Typical paragraph/body text is wrapped with `<p>` elements
- Long Primer (`.long-primer`) - Index page text and image captions are sized
- Brevier (`.brevier`) - Timestamps and bylines
- Minion (`.minion`) - Small header all capitals

The benefit of this is that it provides memorable context to what will be a scale of changeable, device independent sizes. The names can be used by developers as useful class names so that styling rules can be applied independently to any HTML element.

### Typography Hierarchies

GEL Typography proposes using four groups to apply a scale appropriately across a range of devices and input methods

- **Group A** - Default sizing (feature phones)
- **Group B** - Sizes applied at 320px (default & smart phone)
- **Group C** - Sizes applied at 600px (typically tablet devices)
- **Group D** - Sizes applied at 600px when touch is not available (typically desktop or laptop screens)

### Usage

1. Install the component: `bower install https://github.com/bbc-sport/gel-typography.git --save`. This will download the component into your project folder and the `--save` flag will add it to your `bower.json` file.
2. Import the component into your project's Sass file `@import "bower_components/gel-typography/typography";`
3. Override any of the configurable options defined at the top of the `_typography.scss` partial either directly before the component is included or in your projects own configuration file providing that file is included before this component. e.g.

```
$gel-namespace: 'sport-';
$gel-include-base-elements: true;
@import "bower_components/gel-typography/typography";
```

**Note:** if this is the first Bower component installed within your project you must first initialise Bower within your project: `bower init` and follow the instructions. This will create a `bower.json` file within your project.

### Credit

- [Shaun Bent](http://www.twitter.com/shaunbent)
- [Alexander Jones](https://twitter.com/itsaljones)
- [Rory Pickering] 
