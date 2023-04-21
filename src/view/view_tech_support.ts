export = class create_tech_support_view {
  data: any;
  constructor() {
    this.data = {
      metadata: {
        version: "2.0",
      },
      header: [
        {
          height: "fluid",
          content: [
            {
              image: {
                alt: "Generic logo",
                url: "https://i.ibb.co/KW611xF/Logo.png",
              },
              imageSize: "4em",
              marginTop: "loose",
              elementType: "heroImage",
              marginBottom: "5%",
            },
          ],
          elementType: "hero",
          backgroundImage: {
            alt: "Image of office. Photo by https://unsplash.com/@kpzhnv",
            url: "https://i.ibb.co/qg9Fxq5/Banner-2.png",
            cropVerticalPosition: "center",
          },
          contentContainerWidth: "wide",
        },
      ],
      contentContainerWidth: "narrow",
      content: [
        {
          borderColor: "transparent",
          elementType: "divider",
        },
        {
          id: "dropdown",
          items: [
            {
              link: {
                relativePath: "../../profile",
              },
              title: "Profile",
            },
            {
              link: {
                relativePath: "../../application/appointments",
              },
              title: "Appointments",
            },
            {
              link: {
                relativePath: "../../inventory",
              },
              title: "Inventory",
            },
            {
              link: {
                relativePath: "/",
              },
              title: "Tech Support",
            },
          ],
          title: "Explore",
          elementType: "dropdown",
        },
        {
          elementType: "container",
          id: "wifiContainer",
          backgroundColor: "white",
          content: [
            {
              elementType: "blockHeading",
              heading: "Technology Support",
              headingTextAlignment: "center",
              marginBottom: "loose",
              headingLevel: 1,
            },
            {
              elementType: "collapsible",
              disclosureIcon: "chevron",
              disclosureIconColor: "white",
              title: "Connect to Eduroam Wi-Fi",
              titleTextColor: "white",
              headingBackgroundColor: "navy",
              borderTopStyle: "solid",
              borderTopColor: "black",
              borderTopWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "black",
              borderBottomWidth: "1px",
              image: {
                url: "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/09-512.png",
                alt: "Wi-Fi Logo",
              },
              content: [
                {
                  elementType: "container",
                  id: "wifiInnerContainer",
                  content: [
                    {
                      elementType: "collapsible",
                      disclosureIcon: "chevron",
                      title: "Apple Device",
                      borderTopStyle: "none",
                      borderBottomStyle: "none",
                      headingPaddingTop: "loose",
                      headingPaddingBottom: "loose",
                      image: {
                        url: "https://cdn.mos.cms.futurecdn.net/6bTF6C2QiWXvhi33fJi3AC-1920-80.jpg.webp",
                        alt: "Apple",
                      },
                      content: [
                        {
                          elementType: "table",
                          id: "appleTable",
                          outerBorderStyle: "none",
                          rowBorderStyle: "none",
                          columnBorderStyle: "none",
                          padding: "xtight",
                          columnOptions: [
                            {
                              horizontalAlign: "center",
                              verticalAlign: "middle",
                            },
                            {
                              horizontalAlign: "left",
                            },
                            [],
                            [],
                          ],
                          rows: [
                            {
                              cells: [
                                {
                                  title: "1.",
                                },
                                {
                                  title: "Click on Settings.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "2.",
                                },
                                {
                                  title: "Click on Wi-Fi.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "3.",
                                },
                                {
                                  title: "Select Eduroam.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "4.",
                                },
                                {
                                  title: "Open the Safari Browser.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "5.",
                                },
                                {
                                  title:
                                    'Select "If you need to configure your device for Eduroam - Click Here". If you are not redirected to the appropriate site, click on the direct install link: https://cloud.securew2.com/public/78509/eduroam/',
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "6.",
                                },
                                {
                                  title:
                                    "Enter your full email address. <br> (username@mail.fresnostate.edu)",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "7.",
                                },
                                {
                                  title:
                                    "Make sure your iOS is selected, then click on JoinNow.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "8.",
                                },
                                {
                                  title:
                                    "Click on Install when you are prompted to install the new profile.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "9.",
                                },
                                {
                                  title:
                                    "Enter your mobile device password and click on Install.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "10.",
                                },
                                {
                                  title:
                                    "Enter your email password and click on Next, then Done.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "11.",
                                },
                                {
                                  title:
                                    "You will get a window with instructions to select the Eduroam Wi-Fi network from the Settings app.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "12.",
                                },
                                {
                                  title:
                                    "The small check mark next to Eduroam indicates that you are connected.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      elementType: "collapsible",
                      disclosureIcon: "chevron",
                      title: "Android Device",
                      borderTopStyle: "none",
                      borderBottomStyle: "none",
                      headingPaddingTop: "loose",
                      headingPaddingBottom: "loose",
                      image: {
                        url: "https://1000logos.net/wp-content/uploads/2016/10/Android-Logo-2008.png",
                        alt: "Android",
                      },
                      content: [
                        {
                          elementType: "table",
                          id: "androidTable",
                          outerBorderStyle: "none",
                          rowBorderStyle: "none",
                          columnBorderStyle: "none",
                          padding: "xtight",
                          columnOptions: [
                            {
                              horizontalAlign: "center",
                              verticalAlign: "middle",
                            },
                            {
                              horizontalAlign: "left",
                            },
                            [],
                            [],
                          ],
                          rows: [
                            {
                              cells: [
                                {
                                  title: "1.",
                                },
                                {
                                  title: "Click on the Settings app.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "2.",
                                },
                                {
                                  title: "Click on Wi-Fi.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "3.",
                                },
                                {
                                  title: "Select Eduroam.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "4.",
                                },
                                {
                                  title: "Select Connect to Network.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "5.",
                                },
                                {
                                  title: "Select TTLS for the EAP Method.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "6.",
                                },
                                {
                                  title:
                                    "Select PAP for the Phase 2 Authentication.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "7.",
                                },
                                {
                                  title:
                                    "Enter your full email address in the Identity field. <br> (username@mail.fresnostate.edu)",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "8.",
                                },
                                {
                                  title:
                                    "Enter your email password in the password field.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "9.",
                                },
                                {
                                  title: "Click on Save.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "10.",
                                },
                                {
                                  title:
                                    "You will get a confirmation screen showing that you are connected to Eduroam.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      elementType: "collapsible",
                      disclosureIcon: "chevron",
                      title: "Windows Device",
                      borderTopStyle: "none",
                      borderBottomStyle: "none",
                      headingPaddingTop: "loose",
                      headingPaddingBottom: "loose",
                      image: {
                        url: "https://blogs.windows.com/wp-content/uploads/sites/2/2012/02/6874.5_5F00_01C91EBC.png",
                        alt: "Windows",
                      },
                      content: [
                        {
                          elementType: "table",
                          id: "windowsTable",
                          outerBorderStyle: "none",
                          rowBorderStyle: "none",
                          columnBorderStyle: "none",
                          padding: "xtight",
                          columnOptions: [
                            {
                              horizontalAlign: "center",
                              verticalAlign: "middle",
                            },
                            {
                              horizontalAlign: "left",
                            },
                            [],
                            [],
                          ],
                          rows: [
                            {
                              cells: [
                                {
                                  title: "1.",
                                },
                                {
                                  title: "Click on your device's network icon.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "2.",
                                },
                                {
                                  title: "Click on Connect.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "3.",
                                },
                                {
                                  title:
                                    "In the Username box enter your full Fresno State email. <br> (username@mail.fresnostate.edu)",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "4.",
                                },
                                {
                                  title:
                                    "In the Password box enter your Fresno State password.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "5.",
                                },
                                {
                                  title: "Click Enter.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "6.",
                                },
                                {
                                  title:
                                    "Wait and you may be prompted with a warning, skip and click connect anyways.",
                                },
                              ],
                            },
                            {
                              cells: [
                                {
                                  title: "7.",
                                },
                                {
                                  title: "You are now connected to Eduroam.",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          elementType: "divider",
          borderColor: "transparent",
        },
        {
          elementType: "container",
          id: "officeContainer",
          backgroundColor: "white",
          content: [
            {
              elementType: "collapsible",
              disclosureIcon: "chevron",
              disclosureIconColor: "white",
              title: "Microsoft Office 365",
              titleTextColor: "white",
              headingBackgroundColor: "navy",
              borderTopStyle: "solid",
              borderTopColor: "black",
              borderTopWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "black",
              borderBottomWidth: "1px",
              image: {
                url: "https://cdn-icons-png.flaticon.com/512/906/906309.png",
                alt: "Microsoft Logo",
              },
              content: [
                {
                  elementType: "container",
                  id: "officeInnerContainer",
                  content: [
                    {
                      elementType: "html",
                      html: "<h4>Available for Faculty, Staff, and Students!</h4>",
                    },
                    {
                      elementType: "html",
                      html: "<p>Microsoft is now offering their Office 365 product to students, faculty, and staff at Fresno State. Technology Services is providing access to this service and the Help Desk is collaborating with the DISCOVERe Hub to provide support. Office 365 provides students access to Microsoft software at no cost for academic work and faculty may choose to use this service with their students.</p><br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>Available programs of Fresno State's Office 365 Suite include:</h4><ul><li>Word</li><li>Excel</li><li>PowerPoint</li><li>Publisher</li><li>Access</li><li>OneNote</li><li>OneDrive</li></ul><br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>Office 365 Features:</h4> <ul> <li>Work from anywhere using your PC, Mac, or mobile device.</li> <li>Fast and simple access to files using OneDrive file sharing.</li> <li>Files in OneDrive are automatically backed up online.</li> <li>Access, edit, and share Word, Excel, and Powerpoint documents from your mobile device using Office mobile apps.</li> </ul> <br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>How to get Office 365:</h4> <p> To sign up for Office 365 using your mail.fresnostate.edu account, please <a href='https://www.microsoft.com/en-us/education/products/office'>click here</a> to access the Office Portal. Please note that you must use a mail.fresnostate.edu account, and not your csufresno.edu account to sign up for Office 365. </p> <p> Once you are signed up, you will use your mail.fresnostate.edu credentials (username@mail.fresnostate.edu) to access Office 365 at <a href='http://login.microsoftonline.com'>http://login.microsoftonline.com</a> </p> <br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>Please note:</h4> <ul> <li>Restricted and confidential data should not be stored in Office 365 OneDrive</li> <li>Google's Gmail will continue to be the primary service for faculty and staff email and calendaring.</li> <li>If you already have Office software, such as Word, installed on a state-owned computer, such as your faculty laptop or staff computer, please do not download and install the Office 365 versions of that software as this will interfere with the proper operation of your existing software.</li> <li>While you may install Office 365 software on up to five computers, all your installs of Office 365 will share the same @mail.fresnostate.edu cloud account.</li> </ul>",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          elementType: "divider",
          borderColor: "transparent",
        },
        {
          elementType: "container",
          id: "adobeContainer",
          backgroundColor: "white",
          content: [
            {
              elementType: "collapsible",
              disclosureIcon: "chevron",
              disclosureIconColor: "white",
              title: "Adobe Creative Cloud",
              titleTextColor: "white",
              headingBackgroundColor: "navy",
              borderTopStyle: "solid",
              borderTopColor: "black",
              borderTopWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "black",
              borderBottomWidth: "1px",
              image: {
                url: "https://iconape.com/wp-content/png_logo_vector/iconfinder-2.png",
                alt: "Adobe Logo",
              },
              content: [
                {
                  elementType: "container",
                  id: "adobeInnerContainer",
                  content: [
                    {
                      elementType: "html",
                      html: "<h4>Available for Faculty, Staff, and Students!</h4>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>Software Included:</h4> <ul> <li>Photoshop</li> <li>Illustrator</li> <li>InDesign</li> <li>Adobe Muse</li> <li>Dreamweaver</li> <li>Flash Professional</li> <li>Premiere Pro</li> <li>After Effects</li> <li>Adobe Audition</li> <li>InCopy, and more...</li> </ul> <br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>Prerequisites:</h4> <ul> <li>An internet connection is required to download and authenticate with Adobe Cloud.</li> <li>An account with Adobe Cloud is required, you will be able to sign up with your Fresno State email address.</li> <li>If you have already used your Fresno State email to register a personal, non-school related, Adobe subscription, please contact the Technology Service Desk prior to purchasing through the online portal. Service Desk - (559) 278-5000</li> </ul> <br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>How to get Adobe Creative Cloud:</h4> <p>To download and install a license please visit the following site: <a href='fresnostate.onthehub.com'>fresnostate.onthehub.com</a> </p> <p>The license allows the software to be installed on one personal device.</p>",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          elementType: "divider",
          borderColor: "transparent",
        },
        {
          elementType: "container",
          id: "hyflexContainer",
          backgroundColor: "white",
          content: [
            {
              elementType: "collapsible",
              disclosureIcon: "chevron",
              disclosureIconColor: "white",
              title: "Hyflex",
              titleTextColor: "white",
              headingBackgroundColor: "navy",
              borderTopStyle: "solid",
              borderTopColor: "black",
              borderTopWidth: "1px",
              borderBottomStyle: "solid",
              borderBottomColor: "black",
              borderBottomWidth: "1px",
              image: {
                url: "https://hyflex.commons.gc.cuny.edu/files/2022/09/Copy-of-HyFlex3.png",
                alt: "Hyflex Logo",
              },
              content: [
                {
                  elementType: "container",
                  id: "hyflexInnerContainer",
                  content: [
                    {
                      elementType: "html",
                      html: "<h4>What is HyFlex?</h4> <p>The Hybrid Flexible, or HyFlex, course format is an instructional approach that combines face-to-face (F2F) and online learning. Each class session and learning activity is offered in-person, synchronously online, and asynchronously online. Students can decide how to participate. The flexibility of the HyFlex model demonstrates a commitment to student success, and that flexibility can also enable institutions to maintain educational and research activities during a disruption.<p> <br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>What does HyFlex Look Like at Fresno State?</h4> <p>Up until COVID-19, the traditional modes of instruction on our campus have been face-to-face, blended, and fully online.</p> <ul> <li>Face-to-face: Curriculum is delivered in-person and synchronous student engagement is expected, although course materials and activities may exist online.</li> <li>Blended: Curriculum is delivered with both face-to-face and online components (blended I includes 20 - 66% online and blended II includes 67-99% online. There is a mix of synchronous and asynchronous instruction and interaction.</li> <li>Fully Online - Curriculum is delivered fully online and hence student synchronous and/or asynchronous engagement is expected.</li> </ul> <p>The HyFlex model will become a another mode of instruction at Fresno State, with students being able to participate in person, virtually, or a mix of both. There may be synchronous and/or asynchronous opportunities involved in the virtual aspect of the course.</p> <br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>What Technology is Required for a HyFlex Course?</h4> <p>A HyFlex classroom at Fresno State is equipped with a camera, microphone, computer, an audio/video control unit, video conferencing software, and recording software - this is in addition to the standard DISCOVERe classroom technology.</p> <p>A HyFlex Learning environment may include a suite of tools that allows for active engagement within the learning environment as well as on-demand offline/asynchronous access to course materials, including lectures.</p> <p>The Zoom video conferencing tool is the primary means to allow for synchronous teaching and learning to students who are either physically in the classroom or online.</p> <br>",
                    },
                    {
                      elementType: "html",
                      html: "<h4>Who Can Teach a HyFlex Course? Is there training?</h4> <p>Faculty that wish to teach a HyFlex course should be:</p> <ul> <li>comfortable with technology</li> <li>comfortable with juggling multiple audiences</li> <li>comfortable switching attention between the face-to-face classroom to the online environment</li> <li>organized and prepared in advance for lessons and activities</li> <li>comfortable with multiple styles of teaching/pedagogy</li> <li>able to keep students engaged both in the classroom and those online</li> </ul> <p>Faculty who should consider not teaching a HyFlex course:</p> <ul> <li>those who aren’t comfortable with technology</li> <li>those not comfortable with multiple audiences at once</li> <li>challenged to keep students engaged both in the classroom and online</li> <li>those who are not experienced and well-versed in online methods of instruction</li> <li>those who are uncomfortable with having three different audiences (F2F, synchronously online, and perhaps asynchronously online)</li> <li>those who primarily lecture. Better options for those faculty would be to record lectures and post to Canvas or teach synchronously via Zoom</li> </ul> <p>Faculty who self nominate to teach in this modality, and are selected, will be provided with professional development training, pedagogical consultation, course redesign, and technology support. While some faculty may become comfortable leveraging the technology during the professional development training they have received, others may rely on a student assistant for support while in the classroom.</p>",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  }

  getData() {
    return this.data;
  }
};
