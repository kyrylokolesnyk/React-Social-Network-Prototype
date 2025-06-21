let state = {
    profilePageData: {
        postsData: [
            {id: 1, message: "I'm learning React JS", likes: 100},
            {id: 2, message: "Hello World!", likes: 0},
            {id: 3, message: "Dame da ne...", likes: 4},
            {id: 4, message: "This is the way", likes: 23},
            {id: 5, message: "Still my guitar gently weeps...", likes: 10}
        ]
    },
    messagesPageData: {
        chatsData: [
            {id: 1, name: "Kyrylo"},
            {id: 2, name: "Samir"},
            {id: 3, name: "Rakhman"},
            {id: 4, name: "Ilya"},
            {id: 5, name: "Vold"},
            {id: 6, name: "Misha"},
            {id: 7, name: "Agata"},
            {id: 8, name: "Bohdan"},
            {id: 9, name: "Alisa"},
            {id: 10, name: "Arthur"},
            {id: 11, name: "Mariia"},
            {id: 12, name: "Maksym"},
            {id: 13, name: "Mykyta"},
            {id: 14, name: "Ihor"}
        ],
        messagesData: [
            {id: 1, message: "Hi", senderName: "Samir", isCurrentUser: false},
            {id: 2, message: "How are you?", senderName: "Samir", isCurrentUser: false},
            {id: 3, message: "Hello there!", senderName: "Kyrylo", isCurrentUser: true},
            {id: 4, message: "I'm fine, thanks. How about you?", senderName: "Kyrylo", isCurrentUser: true},
            {id: 5, message: "I just bought a brand new car!", senderName: "Samir", isCurrentUser: false},
            {id: 6, message: "Can't wait to drive!", senderName: "Samir", isCurrentUser: false},
            {id: 7, message: "Cool! Congratulations!", senderName: "Kyrylo", isCurrentUser: true},
            {id: 8, message: "Can I send a picture of the car here?", senderName: "Samir", isCurrentUser: false},
            {id: 9, message: "No, unfortunately I didn't add this function yet", senderName: "Kyrylo", isCurrentUser: true},
            {id: 10, message: "It's ok", senderName: "Samir", isCurrentUser: false},
            {id: 11, message: "Hopefully I will add it one day", senderName: "Kyrylo", isCurrentUser: true},
            {id: 12, message: "But hey", senderName: "Kyrylo", isCurrentUser: true},
            {id: 13, message: "Check out the message box scrolling", senderName: "Kyrylo", isCurrentUser: true}
        ]
    },
    friendsBoxData: {
        friendsData: [
            {id: 1, name: "Samir", pfpLink: "https://i.pinimg.com/474x/89/5c/1e/895c1e9df11b83ae1a587125dfa431e7.jpg"},
            {id: 2, name: "Rakhman", pfpLink: "https://images.pexels.com/photos/19525125/pexels-photo-19525125/free-photo-of-brown-dog-with-black-snout-lying-on-a-beige-bed-throw.jpeg"},
            {id: 3, name: "Ilya", pfpLink: "https://i.pinimg.com/736x/c7/27/f8/c727f8ade46cf17b796158e1fef95da7.jpg"},
            {id: 4, name: "Misha", pfpLink: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"}
        ]
    }
}

export default state;