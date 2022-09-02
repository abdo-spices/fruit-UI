<div align="center">
  <img src="./fruitUI.png"/>
</div>

# FruitUI a moduler styling framework 

when you use bootstarp for just the grid system or use the responsive navbar component ,
if you want to use the grid system you have to load about **15k** lines of css code and if you loaded the full bootstarp bundle or if you use the bootstarp grid preset it contains {padding ,margin, etc...} it's about **6k** lines of code I don't want all this stuff so I create this library with it. 

So you can import just one component like just the navbar or import just the grid system 
## Getting Started

```bash
npm i spices-fruitui 
# or 
yarn add spices-fruitui
# or 
pnpm add spices-fruitui
```

fruitUI still on development step there is a lot of stuff to do 

# Components

### base components

- [x] checkers 99%
- [x] buttons  90%
- [x] navbar   50% - 70%
- [x] forms 30% - 60%
- [x] card 80%

### other components

- [x] badge 60%
- [x] table 30%
- [ ] alert 0%
- [ ] modal 0%
- [ ] accordion 0%
- [ ] slider 0%
- [ ] pagination 0%
- [ ] spinners 0%
- [ ] dropdown 0%
- [ ] group 0%


### awesome components

- [ ] prototype 0%


# experimental

- [x] css mixin 10%

```scss 
div {
  @include css((
    bg: #fff,
    p: (
      xs: 10px,
      md: 8px,
      lg: 6px,
    ),
    items: center,
    justify: center,    
  ));
}
```

output 
```css
div {
  background-color: #fff;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 0px) {
  div {
    padding: 10px;
  }
}
@media screen and (min-width: 720px) {
  div {
    padding: 8px;
  }
}
@media screen and (min-width: 960px) {
  div {
    padding: 6px;
  }
}
```

- [x] util-handler 50%

  it removes the duplicated porprties from components and let you to add the repeated components utilities and save some code
  specialy when you have a lot of components in your porject

- [ ] compress 0%

  it takes every property in any class have it and combines them into a single property extender

- [ ] apply mixin 0%

  it takes class utilities names and returns a list of properties

  ```scss
  div {
    @include apply("p-6 w-10 mt-3")
  }
  ```
  output
  ```css
  div {
    padding: 1.25rem;
    width:   26.25rem;
    margin-top: 0.5rem;
  }
  ```

# plugins 

- [x] anim 60%
  
  is built in animation libarray 

- [x] debug 30%
  
  is built in debuging and minimal unit testing  libarray