export = class create_profile_view {
    data: any;
    constructor() {
      this.data = {
        "metadata": {
            "version": "2.0"
        },
        "contentContainerWidth": "narrow",
        "content": [
            {
                "elementType": "blockHeading",
                "heading": "My Profile",
                "headingTextAlignment": "center",
                "headingLevel": 1
            },
            {
                "elementType": "divider",
                "borderStyle": "solid",
                "borderWidth": "3px",
                "borderColor": "black"
            },
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            {
                "elementType": "list",
                "id": "profileList",
                "itemSize": "medium",
                "listStyle": "separated",
                "titleFontSize": "xlarge",
                "titleTextColor": "white",
                "accessoryColor": "white",
                "backgroundColor": "navy",
                "borderRadius": "none",
                "items": [
                    {
                        "title": "Check Out Device",
                        "link": {
                            "relativePath": ""
                        },
                        "image": {
                            "url": "https://i.ibb.co/TMpxVGP/shopping.png",
                            "alt": "Shopping Cart Image"
                        },
                        "imageWidth": "5rem",
                        "imageHeight": "5rem"
                    },
                    {
                        "title": "Lost / Broken Device Form",
                        "link": {
                            "external": "https://docs.google.com/forms/d/e/1FAIpQLSdFzMoX9i8MR0JEOgp5eddefcTxZQgZZC3ud1T25LkNeE1c3A/viewform?usp=sf_link"
                        },
                        "image": {
                            "url": "https://i.ibb.co/NrHQq0s/brokendevice.png",
                            "alt": "Broken Device Image"
                        },
                        "imageWidth": "5rem",
                        "imageHeight": "5rem"
                    }
                ]
            },
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            {
                "elementType": "collapsible",
                "disclosureIcon": "chevron",
                "disclosureIconColor": "white",
                "title": "My Appointments",
                "titleTextColor": "white",
                "headingBackgroundColor": "navy",
                "borderTopStyle": "solid",
                "borderTopColor": "navy",
                "borderTopWidth": "1px",
                "borderBottomStyle": "solid",
                "borderBottomColor": "navy",
                "borderBottomWidth": "2px",
                "titleLineHeight": "55px",
                "image": {
                    "url": "https://i.ibb.co/J3Bq14d/appoint.png",
                    "alt": "Appointments Image"
                },
                "imageWidth": "5rem",
                "imageHeight": "4rem",
                "content": [
                    {
                        "elementType": "table",
                        "id": "appointmentsTable",
                        "columnHeaders": true,
                        "outerBorderWidth": "2px",
                        "rowBorderWidth": "2px",
                        "columnBorderWidth": "2px",
                        "outerBorderColor": "navy",
                        "rowBorderColor": "navy",
                        "columnBorderColor": "navy",
                        "paddingTop": "none",
                        "paddingBottom": "xtight",
                        "columnOptions": [
                            {
                                "horizontalAlign": "center",
                                "verticalAlign": "middle"
                            },
                            {
                                "horizontalAlign": "center",
                                "verticalAlign": "middle"
                            },
                            {
                                "horizontalAlign": "center",
                                "verticalAlign": "middle"
                            }
                        ],
                        "rows": [
                          {
                            "cells": [
                              {
                                "title": "#"
                              },
                              {
                                "title": "Name"
                              },
                              {
                                "title": "Date Time"
                              }
                            ]
                          },
                        ]
                    }
                ]
            },
            {
                "elementType": "divider",
                "borderColor": "transparent"
            },
            {
                "elementType": "collapsible",
                "disclosureIcon": "chevron",
                "disclosureIconColor": "white",
                "title": "My Devices",
                "titleTextColor": "white",
                "headingBackgroundColor": "navy",
                "borderTopStyle": "solid",
                "borderTopColor": "navy",
                "borderTopWidth": "1px",
                "borderBottomStyle": "solid",
                "borderBottomColor": "navy",
                "borderBottomWidth": "2px",
                "titleLineHeight": "55px",
                "image": {
                    "url": "https://i.ibb.co/tXbJwXL/devices.png",
                    "alt": "Devices Image"
                },
                "imageWidth": "4rem",
                "imageHeight": "4rem",
                "content": [
                    {
                        "elementType": "cardSet",
                        "id": "imageStyle_thumbnailSmall",
                        "marginTop": "medium",
                        "borderColor": "navy",
                        "borderWidth": "2px",
                        "marginBottom": "medium",
                        "items": []
                    }
                ]
            }
        ]
    }
    }
  
    getData() {
      return this.data;
    }
  
    addDivider() {
      this.data.content[1].content.push({
        elementType: "divider",
      });
    }

    addTableRow(
      university_id: string,
      checkout_date: Date
    ) {
      this.data.content[1].content.push({
        cells: [
          {
            title: "Number goes here"
          },
          {
            title: `${university_id}`
          },
          {
            title: `${checkout_date}`
          }
        ]
      });
    }

    addCardItem(
      brand: string,
      model: string,
      code_name: string,
      return_date: string
    ) {
      this.data.content[1].content.push({
        elementType: "contentCard",
        size: "small",
        imageStyle: "thumbnailSmall",
        image: {
          url: "https://i.ibb.co/G9LC6hK/devices.png",
          alt: `${brand} ${model} `
        },
        title: `${brand} ${model}`,
        description: `Return on ${return_date} <br> ${code_name}`
      });
    }
};
  