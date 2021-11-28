const settings = {
  "name": "brystlic-rebuild",
  "state": {
    "frontity": {
      "url": "https://brystolic.nyc-test.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "brystolic-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://brystolic.nyc-test.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
