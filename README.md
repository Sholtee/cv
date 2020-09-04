# CV [![Build Status](https://travis-ci.org/Sholtee/cv.svg?branch=master)](https://travis-ci.org/Sholtee/cv)

## How to use
1. Fork [this](https://github.com/sholtee/cv.git ) repo
2. Enable [CI](https://travis-ci.com )
3. Customize the `src/assets/content.json` file:
    - Every property defines a version of your CV in a specific language
    - Keys are [alpha-2 codes](https://www.iso.org/obp/ui/#search ) that specify the language
    - Values are relative URLs to the contents (e.g.: `contents/content-hu.json`). Note that during development content files are placed in the `public/contents` folder.  
4. Choose an avatar you want to use and copy to the `public/assets/` folder (by default it should be named `avatar.jpg`)
5. Define the `content-xx.json` files. The layout of them looks like:
    ```json
    {
      "title": "...",
      "subtitle": "...",
      "avatar": "assets/avatar.jpg",
      "headings": {
        "heading_1": {
          "key_1": "value1",
          "key_2": "value2",
          "key_3": {  // secret
            placeholder: "...",
            text: "..."
          } 
        },
        "heading_2": {
          ...
        }
      }
    }
    ```
6. Commit your changes
7. Tag the commit with "deploy" (after successful publish you can remove the tag)
8. After the CI succeeded your CV will be available at `YourName.github.io/cv`