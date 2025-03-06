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
        title: "You'll always be my forever valentine, I love you so much 💝💖💝💓",
        message: "You mean the world to me, you're smart, kind, beautiful, and I get lost in your lovely eyes. You support me no matter what and I never want to lose you because you're precious to me.",
        emojis: "💖💝💋❤️💕"
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
  /*  colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },*/
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