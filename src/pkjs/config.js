// Clay Config: see https://github.com/pebble/clay
module.exports = [
  {
    "type": "heading",
    "defaultValue": "Settings"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Theme settings"
      },
      {
        "type": "color",
        "messageKey": "Back1Color",
        "defaultValue": "0x000000",
        "label": "Background Colour"
      },
      {
        "type": "color",
        "messageKey": "FrameColor1",
        "defaultValue": "0x000000",
        "label": "Date Background Colour"
      },
      {
        "type": "color",
        "messageKey": "HourColor",
        "defaultValue": "0x00FFFF",
        "label": "Hour Text Colour"
      },
      {
        "type": "color",
        "messageKey": "MinColor",
        "defaultValue": "0xFFFFAA",
        "label": "Minute Text Colour"
      }, 
      {
        "type": "color",
        "messageKey": "Text3Color",
        "defaultValue": "0xFFFFFF",
        "label": "Day of the week Colour"
      }, 
      {
        "type": "color",
        "messageKey": "Text5Color",
        "defaultValue": "0xFFFFFF",
        "label": "Month Colour"
      }, 
      {
        "type": "color",
        "messageKey": "Text6Color",
        "defaultValue": "0xFFFFFF",
        "label": "Date Text Colour"
      },
       {
        "type": "color",
        "messageKey": "Text2Color",
        "defaultValue": "0xFFFFFF",
        "label": "Battery Colour"
      },
      {
        "type": "color",
        "messageKey": "Text1Color",
        "defaultValue": "0xFFFFFF",
        "label": "AM/PM text Colour"
      }, 
          {
        "type": "color",
        "messageKey": "Text4Color",
        "defaultValue": "0xFFFFFF",
        "label": "Quiet Time & BT icon colour"
      },
      ]
      },
       {"type": "section",
       "items": [
         {
           "type": "heading",
           "defaultValue": "Quiet Time",
           "size":4
         } ,
         {
           "type": "toggle",
           "messageKey": "QuietTime",
           "label": "Turn BT disconnect vibes off during times below?",
           "defaultValue": false,        
         },
         {
            "type": "slider",
            "messageKey": "QuietStart",
            "defaultValue": 22,
            "label": "BT disconnect vibes off start hour",
            "min": 0,
            "max": 23,
            "step": 1},
              {
            "type": "slider",
            "messageKey": "QuietEnd",
            "defaultValue": 7,
            "label": "BT disconnect vibes off end hour",
            "description": "if set the same as start hour, BT disconnect vibes will always be off",
            "min": 0,
            "max": 23,
            "step": 1},
          {
          "type": "submit",
          "defaultValue":"SAVE"
          },
          {
          "type": "heading",
          "defaultValue": "version v1.0",
          "size":6
          },
          {
          "type": "heading",
          "defaultValue": "Made in UK",
          "size":6
          }
       ]
      },
      ];