import {
    backAiah,
    backColet,
    backMaloi,
    backGwen,
    backStacey,
    backMikha,
    backJhoanna,
    backSheena,
    frontAiah,
    frontColet,
    frontMaloi,
    frontGwen,
    frontStacey,
    frontMikha,
    frontJhoanna,
    frontSheena,
    kareraAlbumArt,
	kareraAlbumVinyl,
	cherryOnTopAlbumArt,
	cherryOnTopAlbumVinyl,
    salaminSalaminAlbumArt,
	salaminSalaminAlbumVinyl,
	lagiAlbumArt,
	lagiAlbumVinyl,
	talaarawanAlbumArt,
	talaarawanAlbumVinyl,
	bornToWinAlbumArt,
	bornToWinAlbumVinyl,
	hmtuAlbumArt,
	hmtuAlbumVinyl,
	pantropikoAlbumArt,
	pantropikoAlbumVinyl,
    biniverse,
    biniday,
    binirun,
    aiahGallery,
	coletGallery,
	maloiGallery,
	gwenGallery,
	staceyGallery,
	mikhaGallery,
	jhoannaGallery,
	sheenaGallery,
	bini1Gallery,
	bini2Gallery,
	bini3Gallery,
	bini4Gallery,
} from '../assets/images';

export const navLinks = [
    { 
        id: "#profile", 
        label: "Profile" 
    },
    { 
        id: "#music",
        label: "Music"
    },
    {
        id: "#gallery",
        label: "Gallery"
    },
    {
        id: "#events",
        label: "Events"
    },
    {
        id: "#subscribe",
        label: "Subscribe"
    },
];

export const profileDetails = [
    {
        backPic: backAiah,
        frontPic: frontAiah,
        nickname: 'aiah',
        fullname: 'Maraiah Queen Arceta',
        birthdate: 'January 27, 2001',
        color: 'bg-[#a0d7e5]',
    },
    {
        backPic: backColet,
        frontPic: frontColet,
        nickname: 'Colet',
        fullname: 'Ma. Nicolette Vergara',
        birthdate: 'September 14, 2001',
        color: 'bg-[#79cdb4]',
    },
    {
        backPic: backMaloi,
        frontPic: frontMaloi,
        nickname: 'Maloi',
        fullname: 'Mary Loi Yves Ricalde',
        birthdate: 'May 27, 2002',
        color: 'bg-[#fcee95]',
    },
    {
        backPic: backGwen,
        frontPic: frontGwen,
        nickname: 'Gwen',
        fullname: 'Gweneth L. Apuli',
        birthdate: 'June 19, 2003',
        color: 'bg-[#efba90]',
    },
    {
        backPic: backStacey,
        frontPic: frontStacey,
        nickname: 'Stacey',
        fullname: 'Stacey Aubrey Sevilleja',
        birthdate: 'July 13, 2003',
        color: 'bg-[#fdbcd4]',
    },
    {
        backPic: backMikha,
        frontPic: frontMikha,
        nickname: 'Mikha',
        fullname: 'Mikhaela Janna Lim',
        birthdate: 'November 8, 2003',
        color: 'bg-[#fc8293]',
    },
    {
        backPic: backJhoanna,
        frontPic: frontJhoanna,
        nickname: 'Jhoanna',
        fullname: 'Jhoanna Christine Robles',
        birthdate: 'January 26, 2004',
        color: 'bg-[#89c4f9]',
    },
    {
        backPic: backSheena,
        frontPic: frontSheena,
        nickname: 'Sheena',
        fullname: 'Sheena Mae Catacutan',
        birthdate: 'May 9, 2004',
        color: 'bg-[#cdb6ea]',
    },
]

export const musicAlbumDetails = [
    {
        title: 'cherry on top',
        albumVinyl: cherryOnTopAlbumVinyl,
        albumArt: cherryOnTopAlbumArt,
        shadow: 'hover:shadow-red-200'
    },
    {
        title: 'salamin, salamin',
        albumVinyl: salaminSalaminAlbumVinyl,
        albumArt: salaminSalaminAlbumArt,
        shadow: 'hover:shadow-pink-200'
    },
    {
        title: 'talaarawan',
        albumVinyl: talaarawanAlbumVinyl,
        albumArt: talaarawanAlbumArt,
        shadow: 'hover:shadow-orange-200'
    },
    {
        title: 'pantropiko',
        albumVinyl: pantropikoAlbumVinyl,
        albumArt: pantropikoAlbumArt,
        shadow: 'hover:shadow-amber-200'
    },
    {
        title: 'karera',
        albumVinyl: kareraAlbumVinyl,
        albumArt: kareraAlbumArt,
        shadow: 'hover:shadow-teal-200'
    },
    {
        title: 'huwag muna tayong umuwi',
        albumVinyl: hmtuAlbumVinyl,
        albumArt: hmtuAlbumArt,
        shadow: 'hover:shadow-pink-200'
    },
    {
        title: 'lagi',
        albumVinyl: lagiAlbumVinyl,
        albumArt: lagiAlbumArt,
        shadow: 'hover:shadow-rose-200'
    },
    {
        title: 'born to win',
        albumVinyl: bornToWinAlbumVinyl,
        albumArt: bornToWinAlbumArt,
        shadow: 'hover:shadow-emerald-200'
    },
]

export const eventCardDetails = [
    {
        poster: biniverse,
        eventTitle: 'BINIverse: The First Solo Concert',
        location: 'New Frontier Theater Quezon City',
        day: 'Fri',
        date: '28',
        monthYear: 'Jun. 2024'
    },
    {
        poster: binirun,
        eventTitle: 'BINI Run',
        location: '5KM run along Roxas Boulevard',
        day: 'Sun',
        date: '23',
        monthYear: 'Jun. 2024'
    },
    {
        poster: biniday,
        eventTitle: 'Happy BINI Day',
        location: 'One Ayala Makati City',
        day: 'Tue',
        date: '11',
        monthYear: 'Jun. 2024'
    },
]

export const galleryImages = [
        {
            img: aiahGallery,
            num: 1,
        },
        {
            img: coletGallery,
            num: 2,
        },
        {
            img: maloiGallery,
            num: 3,
        },
        {
            img: gwenGallery,
            num: 4,
        },
        {
            img:  staceyGallery,
            num: 5,
        },
        {
            img:  mikhaGallery,
            num: 6,
        },
        {
            img: jhoannaGallery,
            num: 7,
        },
        {
            img:  sheenaGallery,
            num: 8,
        },
        {
            img:  bini1Gallery,
            num: 9,
        },
        {
            img:  bini2Gallery,
            num: 10,
        },
        {
            img:   bini3Gallery,
            num: 11,
        },
        {
            img:  bini4Gallery,
            num: 12,
        }
]