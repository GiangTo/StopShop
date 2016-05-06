{
  "manifest_version":2,
  "name": "StopShop",
  "description": "This extension helps you with impulse online shopping.",
  "version": "1.0",

  "browser_action":
  {
	"default_icon" : "extension-icon.png"
  },

  "background":
  {
    "scripts": ["popup.js"]
  },

  "permissions":
  [
	"activeTab",
    "background"
  ]
}
