# sel.js
Minimal querySelector and querySelectorAll shorter

Inspired by `$()` and `$$()` from Browser DevTools. The main difference of my implementation is that the browser implementation of functions gets parameters from right to left, while my implementation processes parameters from left to right.

## Usage

Example element structure

    <div class="block1">
      <ul>
        <li>item11</li>
        <li>item12</li>
        <li>item13</li>
      </ul>
    </div>
    <div class="block2">
      <ul>
        <li>item21</li>
        <li>item22</li>
        <li>item23</li>
      </ul>
    </div>

Code returns

    $('ul')                    // => first <ul>
    $(document,'ul')           // => first <ul>
    $$('ul')                   // => all <ul> collection
    $$('ul','li')              // => all <li> in first <ul> collection
    $$($('ul'),'li')           // => all <li> in first <ul> collection
    $$($('div'),'ul','li')     // => all <li> in first <ul> collection
