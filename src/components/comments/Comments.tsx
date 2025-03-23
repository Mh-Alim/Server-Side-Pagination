import React from "react";
import Comment from "./Comment";

export type CommentDataType = {
  profileIcon: string;
  name: string;
  comment: {
    message: string;
    replies: CommentDataType[];
  };
};
const comments: CommentDataType[] = [
  {
    profileIcon:
      "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
    name: "Kishan",
    comment: {
      message: "comment1",
      replies: [
        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Rupal",
          comment: {
            message: "Rupal Comment",
            replies: [
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "Saksham",
                comment: {
                  message: "Saksham Comment",
                  replies: [
                    {
                      profileIcon:
                        "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                      name: "Rupal",
                      comment: {
                        message: "Rupal Comment",
                        replies: [
                          {
                            profileIcon:
                              "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                            name: "Saksham",
                            comment: {
                              message: "Saksham Comment",
                              replies: [
                                {
                                  profileIcon:
                                    "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                  name: "Rupal",
                                  comment: {
                                    message: "Rupal Comment",
                                    replies: [
                                      {
                                        profileIcon:
                                          "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                        name: "Saksham",
                                        comment: {
                                          message: "Saksham Comment",
                                          replies: [
                                            {
                                              profileIcon:
                                                "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                              name: "Rupal",
                                              comment: {
                                                message: "Rupal Comment",
                                                replies: [
                                                  {
                                                    profileIcon:
                                                      "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                    name: "Saksham",
                                                    comment: {
                                                      message:
                                                        "Saksham Comment",
                                                      replies: [
                                                        {
                                                          profileIcon:
                                                            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                          name: "Rupal",
                                                          comment: {
                                                            message:
                                                              "Rupal Comment",
                                                            replies: [
                                                              {
                                                                profileIcon:
                                                                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                                name: "Saksham",
                                                                comment: {
                                                                  message:
                                                                    "Saksham Comment",
                                                                  replies: [],
                                                                },
                                                              },
                                                              {
                                                                profileIcon:
                                                                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                                name: "lakshman",
                                                                comment: {
                                                                  message:
                                                                    "lakshman Comment",
                                                                  replies: [],
                                                                },
                                                              },
                                                              {
                                                                profileIcon:
                                                                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                                name: "mukul",
                                                                comment: {
                                                                  message:
                                                                    "mukul Comment",
                                                                  replies: [],
                                                                },
                                                              },
                                                              {
                                                                profileIcon:
                                                                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                                name: "prem",
                                                                comment: {
                                                                  message:
                                                                    "prem Comment",
                                                                  replies: [],
                                                                },
                                                              },
                                                            ],
                                                          },
                                                        },
                                                      ],
                                                    },
                                                  },
                                                  {
                                                    profileIcon:
                                                      "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                    name: "lakshman",
                                                    comment: {
                                                      message:
                                                        "lakshman Comment",
                                                      replies: [],
                                                    },
                                                  },
                                                  {
                                                    profileIcon:
                                                      "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                    name: "mukul",
                                                    comment: {
                                                      message: "mukul Comment",
                                                      replies: [],
                                                    },
                                                  },
                                                  {
                                                    profileIcon:
                                                      "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                                    name: "prem",
                                                    comment: {
                                                      message: "prem Comment",
                                                      replies: [],
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        profileIcon:
                                          "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                        name: "lakshman",
                                        comment: {
                                          message: "lakshman Comment",
                                          replies: [],
                                        },
                                      },
                                      {
                                        profileIcon:
                                          "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                        name: "mukul",
                                        comment: {
                                          message: "mukul Comment",
                                          replies: [],
                                        },
                                      },
                                      {
                                        profileIcon:
                                          "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                                        name: "prem",
                                        comment: {
                                          message: "prem Comment",
                                          replies: [],
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            profileIcon:
                              "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                            name: "lakshman",
                            comment: {
                              message: "lakshman Comment",
                              replies: [],
                            },
                          },
                          {
                            profileIcon:
                              "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                            name: "mukul",
                            comment: {
                              message: "mukul Comment",
                              replies: [],
                            },
                          },
                          {
                            profileIcon:
                              "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                            name: "prem",
                            comment: {
                              message: "prem Comment",
                              replies: [],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "lakshman",
                comment: {
                  message: "lakshman Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "mukul",
                comment: {
                  message: "mukul Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "prem",
                comment: {
                  message: "prem Comment",
                  replies: [],
                },
              },
            ],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Deepak",
          comment: {
            message: "Deepak Comment",
            replies: [],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Bibhu",
          comment: {
            message: "Bibhu Comment",
            replies: [],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Rupal",
          comment: {
            message: "Rupal Comment",
            replies: [],
          },
        },
      ],
    },
  },
  {
    profileIcon:
      "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
    name: "Kishan",
    comment: {
      message: "comment1",
      replies: [
        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Rupal",
          comment: {
            message: "Rupal Comment",
            replies: [
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "Saksham",
                comment: {
                  message: "Saksham Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "lakshman",
                comment: {
                  message: "lakshman Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "mukul",
                comment: {
                  message: "mukul Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "prem",
                comment: {
                  message: "prem Comment",
                  replies: [],
                },
              },
            ],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Deepak",
          comment: {
            message: "Deepak Comment",
            replies: [],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Bibhu",
          comment: {
            message: "Bibhu Comment",
            replies: [],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Rupal",
          comment: {
            message: "Rupal Comment",
            replies: [],
          },
        },
      ],
    },
  },
  {
    profileIcon:
      "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
    name: "Kishan",
    comment: {
      message: "comment1",
      replies: [
        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Rupal",
          comment: {
            message:
              "loremsdfkhsl flsh loremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flshloremsdfkhsl flsh ",
            replies: [
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "Saksham",
                comment: {
                  message: "Saksham Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "lakshman",
                comment: {
                  message: "lakshman Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "mukul",
                comment: {
                  message: "mukul Comment",
                  replies: [],
                },
              },
              {
                profileIcon:
                  "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
                name: "prem",
                comment: {
                  message: "prem Comment",
                  replies: [],
                },
              },
            ],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Deepak",
          comment: {
            message: "Deepak Comment",
            replies: [],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Bibhu",
          comment: {
            message: "Bibhu Comment",
            replies: [],
          },
        },

        {
          profileIcon:
            "https://styles.redditmedia.com/t5_e7unx/styles/profileIcon_whvgx9epiti81.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=a38a93f0571320667ae57f9560aee66833ec15d3",
          name: "Rupal",
          comment: {
            message: "Rupal Comment",
            replies: [],
          },
        },
      ],
    },
  },
];
const Comments = () => {
  return (
    <div className=" w-[80vw] m-auto mt-20 border border-black overflow-x-scroll ">
      <Comment comments={comments} />
    </div>
  );
};

export default Comments;
