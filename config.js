const CONFIG = {
    // pookie's name
    valentineName: "Rylee",

    pageTitle: "Will You Be My Valentine? 💝💞💕",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'], 
        bears: ['😻', '😽']                   
    },

    questions: {
        first: {
            text: "Do you like me?",                                  
            yesBtn: "Yes",                                            
            noBtn: "No",                                              
            secretAnswer: "I don't like you, I love you mostestostest! ❤️"         
        },
        second: {
            text: "How much do you love me?",                          
            startText: "This much!",                                   
            nextBtn: "Next ❤️"                                        
        },
        third: {
            text: "Will you be my forever valentine? 🌹", 
            yesBtn: "Yes!",                                         
            noBtn: "No"                                                 
        }
    },

    loveMessages: {
        extreme: "ALL OF IT??? YAYYYY!!! (good girl 😜)",
        high: "Maybe you win a little bit, but I love you mostest! 💝",
        normal: "nuhuh I love you more! 🥰"                           
    },

    celebration: {
        title: "You'll always be my forever valentine, I love you so much...",
        message: "I want you to know that there's nothing else in my entire life that's more precious to me than you. I love you more than words can describe and I want you to understand that you make me feel a happiness and comfort I'm not used to. You always manage to make me get lost in your pretty eyes and beautiful smile because you're the prettiest girl, even if you sometimes don't think so. I love that I can depend on you, especially with how smart and capable you are, because you're my other half and the one who is always there to support me. I think you're amazing in so many ways that I can't fit it all here, so instead I'll just have to keep letting you know how pretty, cute, funny, kind, smart, capable, and amazing you are for the rest of our lives together, my darling.",
        emojis: "💖💝💋❤️💕"
    },

    colors: {
        backgroundStart: "#d8b4f8",      // Soft pastel purple
        backgroundEnd: "#a0e9d1",        // Light jade green for contrast
        buttonBackground: "#ff85a2",     // Muted pink that stands out
        buttonHover: "#ffabc8",          // Lighter pink for hover effect
        textColor: "#a24cd3"             // Rich purple for readable contrast
    },
    


    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    music: {
        enabled: true,                    
        autoplay: true,                   
        musicUrl: "https://res.cloudinary.com/dbznthf3q/video/upload/v1741229795/sw_tdjxqa.mp3", 
        startText: "🎵 Play Music",        
        stopText: "🔇 Stop Music",        
        volume: 0.5                        
    }
};

window.VALENTINE_CONFIG = CONFIG; 