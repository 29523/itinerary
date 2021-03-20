var config = {
    style: 'mapbox://styles/29523/ckmhg2xk00ov817lkducxi97f',
    accessToken: 'pk.eyJ1IjoiMjk1MjMiLCJhIjoiY2tsbHdzNXU4MDNpajJxcWY0NWw3aDdieCJ9.Ua6JW_pxhGIaepg-oQDusg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    title: 'Vancouver, Canada',
    subtitle: 'Explore Locally, A Day Itinerary for the Solo Traveller',
    byline: '',
    footer: 'Have fun and be safe, always wear a mask in public',
    chapters: [
        {
            id: 'vancouver',
            alignment: 'left',
            hidden: false,
            title: 'Welcome to Vancouver!',	
            image: 'https://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg',
            description: "Vancouver is a bustling coastal city in British Columbia. It is one of the most ethnically diverse communities with a rich history and many cultural foods. Surrounded by breath-taking views of the mountains, ocean, and river, Vancouver is a popular filming location featured in various renowned movies such as Twilight. It is a city thriving with art, theatre, and music. Let's explore!",
            location: {
                center: [-123.1207, 49.23],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },	
			onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'breakfast',
            alignment: 'right',
            hidden: false,
            title: 'Breakfast for only $2.95?!',
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/mAN4i9Fu2Z1GPpRcvPIHfw/o.jpg',
            description: "Bon's Off Broadway serves up the CHEAPEST and most fulfilling breakfast packed with a variation of ham, bacon, eggs, toast, waffles, and potatoes for only CAD 2.95! Don't be intimidated by the walls full of writing, graffiti and pictures; it's a vibe. Yes, even the washroom, every crook and cranny is graffitied.",
            location: {
                center: [-123.05688, 49.26257],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'skytrain',
            alignment: 'left',
            hidden: false,
            title: 'Hop on the Skytrain',
            image: 'https://604now.com/wp-content/uploads/2019/07/Skytrain-Station-1280x720.jpg',
            description: "",
            location: {
                center: [-123.05688, 49.26257],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'chinatown',
            alignment: 'right',
            hidden: false,
            title: 'Chinatown',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_675/https://res.cloudinary.com/simpleview/image/upload/v1453848398/clients/vancouverbc/Dr_Sun_Yat_Sen_Chinese_Garden_5d3f139b-45e1-4769-af15-5d3ba84cb592.jpg',
            description: "",
            location: {
                center: [-123.05688, 49.26257],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'gastown',
            alignment: 'left',
            hidden: false,
            title: 'Steam Clock, Coffee, and Donuts',
            image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_65,w_845/v1/clients/vancouverbc/Gastown_d994e2e0-e8d3-4a82-9bf3-30c9469b5f1b.gif',
            description: "",
            location: {
                center: [-123.05688, 49.26257],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
				{
            id: 'Granville Island',
            alignment: 'right',
            hidden: false,
            title: 'Fresh Local Produce for Dinner',
            image: 'https://www.likealocalguide.com/media/cache/f2/94/f294b8ac94aa1e23f1ca2b1db9e74a55.jpg',
            description: "",
            location: {
                center: [-123.05688, 49.26257],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
				{
            id: 'Head Back Home and Make Dinner',
            alignment: 'center',
            hidden: false,
            title: 'Cook Up Your Own Dinner',
            image: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.nbcnews-fp-1200-630.jpg',
            description: "",
            location: {
                center: [-123.05688, 49.26257],
                zoom: 18,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
