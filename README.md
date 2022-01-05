# CV [![Build status](https://ci.appveyor.com/api/projects/status/f6ql44aafkfv3rh8/branch/master?svg=true)](https://ci.appveyor.com/project/Sholtee/cv/branch/master)

## How to use
1. Fork [this](https://github.com/sholtee/cv.git ) repo
2. Create an [access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token ) for the forked repo
3. Enable [CI](https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci-using-github ) and [define a variable](https://docs.travis-ci.com/user/environment-variables/#defining-variables-in-repository-settings ) (named `GITHUB_TOKEN`) for the previously created token 
4. Customize the `src/assets/content.json` file:
    - Every property defines a version of your CV in a specific language
    - Keys are [alpha-2 codes](https://www.iso.org/obp/ui/#search ) that specify the language
    - Values are relative URLs to the contents (e.g.: `contents/content-hu.json`). Note that during development content files are placed in the `public/contents` folder.  
5. Choose an avatar you want to use and copy to the `public/assets/` folder (by default it should be named `avatar.jpg`)
6. Create the `content-xx.json` files. The layout of them looks like:
    ```json
    {
      "locale": "en",
      "header": {
        "title": "...",
        "subtitle": "...",
        "avatar": "assets/avatar.jpg"
      },
      "body": {
        "heading_1": {
          "key_1": "text",
          "key_2": "<b>bold</b> text",
          "key_3": {
            "type": "secret",
            "placeholder": "...",
            "text": "..."
          },
          "key_3": {
            "type": "indicator",
            "max": 5,
            "current": 4
          }
        },
        "heading_2": {
     
        }
      },
      "footer": {
        "title": "...",
        "text": "<i>italic</i> text"
      }
    }
    ```
7. Commit your changes
8. Tag the commit with "deploy" (after successful publish you can remove the tag)
9. After the CI succeeded your CV is available at `YourName.github.io/cv` and will look like [this](https://sholtee.github.io/cv )
