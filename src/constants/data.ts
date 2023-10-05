interface IHomeLinks {
    name: string,
    link: string,
}


export const HomeLinks: IHomeLinks[] = [
    {
        name: "Date Picker",
        link: "datePicker"
    },
    {
        name: "Google Map",
        link: "google-map"
    },
    {
        name: "O Auth Google",
        link: "oAuthGoogle"
    },
    {
        name: "Reac Hook",
        link: "react-hook-form-test"
    },
    {
        name: "Rich Text Using Lexical",
        link: "RichTextUsingLexical"
    },
    {
        name: "Rich Text Using Quill",
        link: "RichTextUsingQuill"
    },
    {
        name: "Rich Text Using TipTap",
        link: "RichTextUsingTipTap"
    },
    {
        name: "Search and Select",
        link: "searchAndSelect"
    },
    {
        name: "Swiper",
        link: "swiperv1"
    },
    {
        name: "Use Query",
        link: "use-query-test"
    },
    {
        name: "Foodbourg delivery time picker",
        link: "fd-delivery-timepicker"
    },
    {
        name: "FB share",
        link: "FBshare"
    }
]



export const initialDeliveryHours = {
    "friday": [
        {
            "open": "2023-09-25T15:40:40.207Z",
            "close": "2023-09-25T16:15:00.207Z"
        },
        {
            "open": "2023-09-25T15:40:42.039Z",
            "close": "2023-09-25T15:40:42.039Z"
        }
    ],
    "monday": [],
    "sunday": [],
    "tuesday": [],
    "saturday": [],
    "thursday": [],
    "wednesday": []
};