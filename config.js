var config = {
    style: 'mapbox://styles/29523/ckmhbwypljfhg17qk3cqc6472',
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
			callback: 'my_dataviz3',
			onChapterEnter: [
                {
                    layer: 'vancouverborder',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'vancouverborder',
                    opacity: 1
                }
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
                zoom: 19,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [
			    {
                    layer: 'arrowbons',
                    opacity: 1
                }
			],
            onChapterExit: [
			    {
                    layer: 'arrowbons',
                    opacity: 1
                }
			]
        },
		{
            id: 'skytrain',
            alignment: 'left',
            hidden: false,
            title: 'Walk to Commercial Broadway Station',
            image: 'https://604now.com/wp-content/uploads/2019/07/Skytrain-Station-1280x720.jpg',
            description: "Take a 10-minute walk from Bon's to Commercial Broadway Station. Then take the Expo Line to Stadium-Chinatown. I recommend buying a day pass for unlimited use throughout the day!",
            location: {
                center: [-123.06911, 49.26266],
                zoom: 18,
                pitch: 45,
                bearing: -0.47
            },
            callback: '',
            onChapterEnter: [
			    {
                    layer: 'arrowbons',
                    opacity: 1
                }
			],
            onChapterExit: [
			    {
                    layer: 'arrowbons',
                    opacity: 1
                }
			]
        },
		{
            id: 'chinatown',
            alignment: 'right',
            hidden: false,
            title: 'Learn about the History of Chinatown',
            image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_450,q_75,w_675/https://res.cloudinary.com/simpleview/image/upload/v1453848398/clients/vancouverbc/Dr_Sun_Yat_Sen_Chinese_Garden_5d3f139b-45e1-4769-af15-5d3ba84cb592.jpg',
            description: "Vancouver is home to Canada's largest Chinatown in the Downtown area. Visit the Dr. Sun Yat-Sen Classical Chinese Garden to learn more about the Chinese diaspora and immigration history in Canada.",
            location: {
                center: [-123.10342, 49.27948],
                zoom: 17,
                pitch: 35,
                bearing: -4
            },
            onChapterEnter: [
				{
                    layer: 'gastown-9ie4x0',
                    opacity: 0
                }
			],
            onChapterExit: [
				{
                    layer: 'gastown-9ie4x0',
                    opacity: 1
                }
			]
        },
		{
            id: 'gastown',
            alignment: 'left',
            hidden: false,
            title: 'Steam Clock, Coffee, and Donuts',
            image: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_65,w_845/v1/clients/vancouverbc/Gastown_d994e2e0-e8d3-4a82-9bf3-30c9469b5f1b.gif',
            description: "Following Chinatown, walk towards the oldest neighbourhoods in Vancouver, Gastown. Check out the steam clock that chimes every 15-minutes, and sit down in a cafe for some coffee and donuts.",
            location: {
                center: [-123.10651, 49.28349],
                zoom: 16,
                pitch: 60,
                bearing: -55.2
            },
            onChapterEnter: [
				{
                    layer: 'garden',
                    opacity: 0
                }
			],
            onChapterExit: [
				{
                    layer: 'garden',
                    opacity: 1
                }
			]
        },
				{
            id: 'Granville Island',
            alignment: 'right',
            hidden: false,
            title: 'Fresh Local Produce',
            image: 'https://www.likealocalguide.com/media/cache/f2/94/f294b8ac94aa1e23f1ca2b1db9e74a55.jpg',
            description: "The last stop in today's itinerary is Granville Island, surrounded by False Creek. From Gastown, take the number 50 bus (S False Creek Via Granville Island) to Lamey's Mill Rd. Explore the island for artisan workshops, craft studios, and shop for some fresh local produce inside the Public Market.",
            location: {
                center: [-123.13444, 49.27080],
                zoom: 16,
                pitch: 50,
                bearing: -20
            },
            onChapterEnter: [
				{
                    layer: 'granville-island-4fox5g',
                    opacity: 1
                }
			],
            onChapterExit: [
				{
                    layer: 'granville-island-4fox5g',
                    opacity: 1
                }
			]
        },
				{
            id: 'Head Back Home and Make Dinner',
            alignment: 'center',
            hidden: false,
            title: 'Cook Up Your Own Dinner',
            image: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3044956/191009-cooking-vegetables-al-1422_ae181a762406ae9dce02dd0d5453d1ba.nbcnews-fp-1200-630.jpg',
            description: "After a long day, wind down back at home (hotel/Airbnb/hostel) and cook up some dinner to enjoy the night.",
            location: {
                center: [-123.1207, 49.23],
                zoom: 10,
                pitch: 30,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'vancouverborder',
                    opacity: 1
                }			
			],
            onChapterExit: [
			    {
                    layer: 'vancouverborder',
                    opacity: 0
                }
			]
        }
    ]
};
