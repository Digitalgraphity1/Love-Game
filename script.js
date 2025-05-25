
document.addEventListener('DOMContentLoaded', () => {
  // --- Constants ---
  const APP_TITLE = "Viral Love Test";
  const WEBSITE_URL = "yourwebsite.com"; // Replace with actual domain

  const QUIZ_QUESTIONS_POOL = [
    // Original 10
    { id: 1, questionTextTemplate: "What does {name1} admire most about {name2}'s personality?", options: ["Kindness", "Humor", "Intelligence", "Adventurousness"] },
    { id: 2, questionTextTemplate: "{name2}, what is {name1}'s favorite shared memory with you?", options: ["A specific vacation", "A funny incident", "A quiet evening", "A big celebration"] },
    { id: 3, questionTextTemplate: "If {name1} could describe {name2} in one word, what would it be?", options: ["Amazing", "Supportive", "Inspiring", "MyEverything"] },
    { id: 4, questionTextTemplate: "What is {name2}'s go-to comfort food that {name1} knows about?", options: ["Pizza", "Ice Cream", "Chocolate", "A home-cooked meal"] },
    { id: 5, questionTextTemplate: "{name1}, what is a small gesture from {name2} that always makes your day?", options: ["A surprise text", "A warm hug", "Making coffee", "A compliment"] },
    { id: 6, questionTextTemplate: "How does {name2} prefer to spend a lazy Sunday with {name1}?", options: ["Binge-watching a series", "Cooking together", "Reading side-by-side", "Outdoor chilling"] },
    { id: 7, questionTextTemplate: "{name1}, what song reminds you most of {name2} or your relationship?", options: ["Our first dance song", "A cheesy pop song", "A romantic classic", "An upbeat anthem"] },
    { id: 8, questionTextTemplate: "What is {name2}'s dream travel destination to visit with {name1}?", options: ["Paris", "A tropical island", "Mountain retreat", "A bustling city"] },
    { id: 9, questionTextTemplate: "{name1}, what quality in {name2} makes you feel most loved and secure?", options: ["Loyalty", "Understanding", "Patience", "Affection"] },
    { id: 10, questionTextTemplate: "If your love story was a movie, {name2}, what genre would it be, starring {name1}?", options: ["Romantic Comedy", "Epic Romance", "Adventure", "Slice of Life"] },
    // Added 40 more
    { id: 11, questionTextTemplate: "{name1}, what's {name2}'s secret talent you find adorable?", options: ["Singing off-key", "Wiggling ears", "Impressive whistling", "Unique dance move"] },
    { id: 12, questionTextTemplate: "If {name2} were an animal, what would {name1} say they'd be?", options: ["Loyal dog", "Cunning fox", "Graceful swan", "Playful otter"] },
    { id: 13, questionTextTemplate: "What's a little quirk of {name1} that {name2} secretly loves?", options: ["Snorting when laughing", "Talking to plants", "Their messy handwriting", "Always losing keys"] },
    { id: 14, questionTextTemplate: "{name2}, what's {name1}'s favorite way to de-stress after a long day?", options: ["Hot bath", "Listening to music", "Exercising", "Venting to you"] },
    { id: 15, questionTextTemplate: "What color does {name1} think best represents {name2}'s spirit?", options: ["Sunny Yellow", "Calm Blue", "Passionate Red", "Mysterious Purple"] },
    { id: 16, questionTextTemplate: "{name2}, what type of movie would {name1} choose for a cozy night in?", options: ["Action-packed thriller", "Heartwarming comedy", "Thought-provoking documentary", "Classic romance"] },
    { id: 17, questionTextTemplate: "{name1}, what is {name2}'s most used emoji when texting you?", options: ["❤️", "😂", "😘", "😊"] },
    { id: 18, questionTextTemplate: "What kind of gift from {name2} would make {name1} feel most understood?", options: ["Something handmade", "A practical item they need", "An experience together", "A luxurious treat"] },
    { id: 19, questionTextTemplate: "{name1}, if {name2} was a dessert, what would they be?", options: ["Spicy chocolate cake", "Sweet vanilla ice cream", "Fruity sorbet", "Complex tiramisu"] },
    { id: 20, questionTextTemplate: "What's {name2}'s favorite season, and why does {name1} think so?", options: ["Summer - for the sun", "Autumn - for the colors", "Winter - for coziness", "Spring - for new beginnings"] },
    { id: 21, questionTextTemplate: "{name1}, what is one thing {name2} does that always makes you laugh?", options: ["Their silly jokes", "A particular face they make", "Their dance moves", "Mispronouncing a word"] },
    { id: 22, questionTextTemplate: "{name2}, what is {name1}'s ideal morning routine?", options: ["Slow start with coffee", "Quick and efficient", "Workout session", "Sleeping in late"] },
    { id: 23, questionTextTemplate: "If {name1} could have any superpower, which one would {name2} say they'd pick?", options: ["Flying", "Invisibility", "Telepathy", "Super strength"] },
    { id: 24, questionTextTemplate: "What's a shared dream {name2} and {name1} often talk about?", options: ["Owning a home", "Traveling the world", "Starting a family", "A specific career goal"] },
    { id: 25, questionTextTemplate: "{name1}, what is {name2}'s favorite type of music to listen to when happy?", options: ["Upbeat pop", "Chill lo-fi", "Rock anthems", "Classical music"] },
    { id: 26, questionTextTemplate: "{name2}, how does {name1} show they care without saying 'I love you'?", options: ["Doing thoughtful chores", "Giving surprise gifts", "Being a good listener", "Physical affection"] },
    { id: 27, questionTextTemplate: "{name1}, what is {name2}'s biggest pet peeve?", options: ["Loud chewing", "Being late", "Messiness", "Interrupting"] },
    { id: 28, questionTextTemplate: "What is a skill {name2} has that {name1} really admires?", options: ["Cooking/Baking", "Playing an instrument", "Artistic talent", "Problem-solving"] },
    { id: 29, questionTextTemplate: "{name1}, if you were stranded on a desert island, why would you want {name2} there?", options: ["Their survival skills", "Their calming presence", "Their humor", "Their resourcefulness"] },
    { id: 30, questionTextTemplate: "{name2}, what is {name1}'s 'love language' primarily?", options: ["Words of Affirmation", "Acts of Service", "Receiving Gifts", "Quality Time / Physical Touch"] },
    { id: 31, questionTextTemplate: "What's a TV show {name1} and {name2} can always agree to watch?", options: ["A gripping drama", "A hilarious sitcom", "A nature documentary", "A reality TV show"] },
    { id: 32, questionTextTemplate: "{name2}, what is {name1}'s go-to karaoke song?", options: ["A power ballad", "A classic rock hit", "A pop diva anthem", "Something silly and fun"] },
    { id: 33, questionTextTemplate: "{name1}, what's the first thing {name2} does in the morning?", options: ["Checks phone", "Makes coffee/tea", "Hits snooze multiple times", "Stretches dramatically"] },
    { id: 34, questionTextTemplate: "If {name2} could only eat one cuisine for the rest of their life, what would {name1} say it is?", options: ["Italian", "Mexican", "Japanese", "Indian"] },
    { id: 35, questionTextTemplate: "{name1}, what is {name2}'s most prized possession?", options: ["A sentimental gift", "A piece of tech", "A collection", "Something related to a hobby"] },
    { id: 36, questionTextTemplate: "{name2}, what is {name1}'s idea of a perfect date?", options: ["Adventurous outing", "Romantic dinner", "Cozy night in", "Fun group activity"] },
    { id: 37, questionTextTemplate: "{name1}, what is a book or movie that deeply impacted {name2}?", options: ["A classic novel", "A sci-fi epic", "A moving biography", "A philosophical film"] },
    { id: 38, questionTextTemplate: "How does {name2} react when {name1} is feeling down?", options: ["Offers advice", "Gives space", "Provides comfort food/hugs", "Tries to make them laugh"] },
    { id: 39, questionTextTemplate: "{name1}, what's a weird food combination that {name2} surprisingly enjoys?", options: ["Pickles and peanut butter", "Fries dipped in milkshake", "Pineapple on pizza", "Something you can't imagine"] },
    { id: 40, questionTextTemplate: "What would {name2} say is {name1}'s most charming habit?", options: ["The way they smile", "How they listen intently", "Their infectious laugh", "Their generosity"] },
    { id: 41, questionTextTemplate: "{name1}, what's an inside joke that only you and {name2} would understand?", options: ["A mispronounced word", "A funny travel story", "A quirky observation", "A shared embarrassing moment"] },
    { id: 42, questionTextTemplate: "{name2}, what is {name1}'s favorite way to be creative?", options: ["Writing or journaling", "Drawing or painting", "Playing music", "DIY projects"] },
    { id: 43, questionTextTemplate: "{name1}, if {name2} won the lottery, what's the first extravagant thing they'd buy?", options: ["A dream car", "A luxury vacation", "A mansion", "Invest it wisely (boring!)"] },
    { id: 44, questionTextTemplate: "What is a non-physical trait of {name2} that {name1} finds most attractive?", options: ["Their intellect", "Their ambition", "Their empathy", "Their wit"] },
    { id: 45, questionTextTemplate: "{name1}, what is {name2}'s 'spirit animal' according to you?", options: ["Wise owl", "Playful dolphin", "Majestic lion", "Free-spirited butterfly"] },
    { id: 46, questionTextTemplate: "{name2}, what does {name1} do that shows they trust you completely?", options: ["Shares their deepest fears", "Lets you handle important tasks", "Is vulnerable with you", "Never doubts your intentions"] },
    { id: 47, questionTextTemplate: "{name1}, what is {name2}'s favorite board game or card game?", options: ["A strategy game", "A party game", "A classic card game", "They dislike games"] },
    { id: 48, questionTextTemplate: "What kind of compliment from {name2} makes {name1} blush the most?", options: ["About their looks", "About their intelligence", "About their kindness", "A very specific, personal one"] },
    { id: 49, questionTextTemplate: "{name1}, what is a place {name2} feels most at peace?", options: ["In nature", "At home", "Near water", "In a bustling city cafe"] },
    { id: 50, questionTextTemplate: "If your love story was a song, {name2}, what instrument would be the lead for {name1}'s part?", options: ["Passionate violin", "Soulful saxophone", "Steady bass guitar", "Energetic drums"] }
  ];

  const LOVE_SUGGESTIONS = [
    { id: 1, text: "Plan a surprise date night this week, focusing on an activity you both enjoy. Quality time strengthens bonds! 🥰" },
    { id: 2, text: "Write a heartfelt note expressing your appreciation for each other. Sometimes, small words make a big impact. ❤️" },
    { id: 3, text: "Set a shared goal to work towards, whether it's learning a new skill or planning a future adventure. Teamwork makes the dream work! ✨" },
  ];

  // --- SVG Icon Generators ---
  const ICONS = {
    Heart: (className = "w-6 h-6") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="${className}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>`,
    Sparkles: (className = "w-6 h-6") => `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="${className}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M19 3v4M17 5h4M12 5v2.55a2.5 2.5 0 01-2.5 2.5H7M12 5v2.55A2.5 2.5 0 0014.5 10H17M12 14v5M10 19h4M5 17v-2.55A2.5 2.5 0 017.5 12H10M19 17v-2.55A2.5 2.5 0 0016.5 12H14"></path></svg>`,
    WhatsApp: (className = "w-6 h-6") => `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.03 22l5.3-1.38c1.43.78 3.03 1.21 4.71 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.09 13.16c-.21.49-.86.92-1.45 1.04-.48.1-.98.11-1.52-.04-.69-.2-1.5-.62-2.99-1.29-1.9-.89-3.13-2.33-3.36-2.68-.23-.35-.48-.72-.48-1.13 0-.27.11-.52.3-.71.15-.15.34-.21.51-.21.13 0 .26.01.38.02.2.02.39.03.55.31.2.31.62.92.68 1 .05.08.08.18.02.31-.07.13-.15.23-.27.38-.1.13-.21.23-.3.29-.12.08-.24.18-.18.38.12.35.59.99 1.29 1.61.88.76 1.49 1.02 1.75 1.13.08.03.2.05.29-.02.2-.15.34-.43.47-.62.15-.21.3-.23.48-.15.18.08.92.43 1.1.53.18.1.27.15.31.23.05.09.05.27-.01.52z"/></svg>`,
    Facebook: (className = "w-6 h-6") => `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>`,
    Instagram: (className = "w-6 h-6") => `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8A3.6 3.6 0 0 0 20 16.4V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>`,
    XTwitter: (className = "w-6 h-6") => `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    Telegram: (className = "w-6 h-6") => `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.91 3.37a1.06 1.06 0 0 0-1.4-.26L3.63 9.64c-1.25.48-1.26 2.18-.02 2.64l4.3 1.43 1.43 4.3c.22.67.74 1.02 1.28.92.3-.06.57-.24.78-.48l2.02-2.32 4.35 3.21c.92.64 2.19.11 2.37-1.05l2.88-13.79a1.06 1.06 0 0 0-.21-1.15zM8.02 12.46l10.3-6.46-7.53 7.03-2.77-.97zM12.44 19.1l-1.5-4.55 7.2-6.71-5.7 11.26z"/></svg>`,
    Email: (className = "w-6 h-6") => `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>`,
    Download: (className = "w-6 h-6") => `<svg class="${className}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>`,
    Trophy: (className = "w-6 h-6") => `<svg class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 21v-7h3.5l-4-4-4 4H12v7h1zM5 21h14"></path></svg>`,
  };

  // --- State Variables ---
  let currentPage = 'home'; // 'home', 'quiz', 'result'
  let names = { name1: '', name2: '' };
  let score = null;
  let currentQuestionIndex = 0;
  let selectedQuizQuestions = []; // Holds the 10 randomly selected questions for the current session
  let visitorCount = 110000;
  let visitorCountdownInterval = null;


  // --- DOM Elements ---
  const appTitleElement = document.getElementById('app-title');
  const footerAppTitleElement = document.getElementById('footer-app-title');
  const currentYearElement = document.getElementById('current-year');

  const homePage = document.getElementById('home-page');
  const quizPage = document.getElementById('quiz-page');
  const resultPage = document.getElementById('result-page');

  const nameForm = document.getElementById('name-form');
  const name1Input = document.getElementById('name1');
  const name2Input = document.getElementById('name2');
  const popupMessage = document.getElementById('popup-message');
  const closePopupBtn = document.getElementById('close-popup-btn');
  const homeHeartIcon = document.getElementById('home-heart-icon');
  const submitHeartIcon = document.getElementById('submit-heart-icon');
  const popupSparklesIcon = document.getElementById('popup-sparkles-icon');
  const visitorCountdownContainer = document.getElementById('visitor-countdown-container');

  const progressBar = document.getElementById('progress-bar');
  const questionNumberElement = document.getElementById('question-number');
  const questionTextElement = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const adBannerQuestionBottomContainer = document.getElementById('ad-banner-question-bottom');

  const resultCongratsElement = document.getElementById('result-congrats');
  const resultScoreElement = document.getElementById('result-score');
  const resultMessageElement = document.getElementById('result-message');
  const suggestionsList = document.getElementById('suggestions-list');
  const shareButtonsContainer = document.getElementById('share-buttons-container');
  const certificateDisplayContainer = document.getElementById('certificate-display-container');
  const playAgainBtn = document.getElementById('play-again-btn');
  const resultSparklesIcon = document.getElementById('result-sparkles-icon');
  const suggestionsHeartIcon = document.getElementById('suggestions-heart-icon');


  // --- Utility Functions ---
  function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function showPage(pageId) {
    homePage.classList.add('hidden', 'animate-fadeIn');
    quizPage.classList.add('hidden', 'animate-fadeIn');
    resultPage.classList.add('hidden', 'animate-fadeInUp');

    if (pageId === 'home') homePage.classList.remove('hidden');
    else if (pageId === 'quiz') quizPage.classList.remove('hidden');
    else if (pageId === 'result') resultPage.classList.remove('hidden');
    currentPage = pageId;
    window.scrollTo(0, 0);
  }

  function shuffleArray(array) {
    const newArray = [...array]; // Create a copy to avoid modifying the original
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  // --- Visitor Countdown Logic ---
  function updateVisitorCountdown() {
    const increment = Math.floor(Math.random() * 3) + 1;
    visitorCount += increment;
    if (visitorCountdownContainer) {
         visitorCountdownContainer.innerHTML = `🔥 <strong class="text-red-500">${visitorCount.toLocaleString()}</strong> people are taking the test right now! Join them! ✨`;
    }
  }

  function initializeVisitorCountdown() {
    if (visitorCountdownInterval) {
      clearInterval(visitorCountdownInterval);
    }
    updateVisitorCountdown(); 
    visitorCountdownInterval = setInterval(updateVisitorCountdown, 2500); 
  }


  // --- Page Rendering Functions ---

  function renderHomePage() {
    showPage('home');
    name1Input.value = '';
    name2Input.value = '';
    homeHeartIcon.innerHTML = ICONS.Heart('w-24 h-24 text-red-500');
    submitHeartIcon.innerHTML = ICONS.Heart('w-6 h-6');
    popupSparklesIcon.innerHTML = ICONS.Sparkles('w-5 h-5');
    
    visitorCount = 110000; 
    initializeVisitorCountdown();

    setTimeout(() => {
      if (currentPage === 'home') {
          popupMessage.classList.remove('hidden');
      }
    }, 1500);
  }

  function setupQuizQuestions() {
    selectedQuizQuestions = shuffleArray(QUIZ_QUESTIONS_POOL).slice(0, 10);
  }

  function renderQuizPage() {
    showPage('quiz');
    setupQuizQuestions(); // Select 10 random questions
    currentQuestionIndex = 0;
    renderQuestion();
    if (visitorCountdownInterval) {
        clearInterval(visitorCountdownInterval);
    }
  }

  function renderQuestion() {
    if (currentQuestionIndex >= selectedQuizQuestions.length) {
      handleQuizComplete();
      return;
    }

    const question = selectedQuizQuestions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / selectedQuizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuizQuestions.length}`;
    
    const personalizedQuestion = question.questionTextTemplate
      .replace(/{name1}/g, capitalize(names.name1))
      .replace(/{name2}/g, capitalize(names.name2));
    questionTextElement.textContent = personalizedQuestion;

    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.className = "w-full text-left bg-pink-100 hover:bg-pink-400 hover:text-white text-pink-700 font-medium py-3 px-4 rounded-lg transition-all duration-200 ease-in-out shadow-sm hover:shadow-md text-lg";
      button.textContent = option;
      button.onclick = () => handleAnswer(option);
      optionsContainer.appendChild(button);
    });
    
    const questionCardContainer = document.getElementById('question-card-container');
    questionCardContainer.classList.remove('opacity-0');

    renderNewBottomQuestionAd();
  }

  function renderResultPage() {
    showPage('result');
    const capName1 = capitalize(names.name1);
    const capName2 = capitalize(names.name2);

    resultSparklesIcon.innerHTML = ICONS.Sparkles('w-20 h-20 text-yellow-400');
    suggestionsHeartIcon.innerHTML = ICONS.Heart('w-7 h-7');

    resultCongratsElement.textContent = `Congratulations, ${capName1} & ${capName2}!`;
    resultScoreElement.textContent = `${score}%`;

    let message = "";
    if (score >= 95) message = "An absolutely perfect match! Your love story is one for the ages! 💕✨";
    else if (score >= 85) message = "Wow! You're an incredibly compatible couple! Keep shining together! 🥰💖";
    else if (score >= 70) message = "A fantastic connection! Your love is strong and beautiful! ❤️🌟";
    else if (score >= 55) message = "Great score! You have a wonderful bond! Keep nurturing your love! 😊💞";
    else message = "A promising start! Every great love story has its chapters. Keep exploring yours! 👍💖";
    resultMessageElement.textContent = message;

    suggestionsList.innerHTML = '';
    LOVE_SUGGESTIONS.forEach(suggestion => {
      const li = document.createElement('li');
      li.className = "p-3 bg-pink-50 rounded-md shadow-sm flex items-start";
      li.innerHTML = `${ICONS.Heart('w-5 h-5 text-pink-400 mr-3 mt-1 flex-shrink-0')} ${suggestion.text}`;
      suggestionsList.appendChild(li);
    });

    renderShareButtons(capName1, capName2, score);
    renderCertificateDisplay(capName1, capName2, score);
  }


  function renderNewBottomQuestionAd() {
    if (!adBannerQuestionBottomContainer) return;

    adBannerQuestionBottomContainer.innerHTML = ''; 
    adBannerQuestionBottomContainer.className = "mt-6 flex justify-center items-center h-[60px] w-[468px] max-w-full mx-auto bg-gray-200/30 rounded"; 

    const adDiv = document.createElement('div');
    adDiv.style.width = '468px'; 
    adDiv.style.height = '60px';
    adDiv.style.maxWidth = '100%';

    const atOptionsScript = document.createElement('script');
    atOptionsScript.type = 'text/javascript';
    atOptionsScript.textContent = `
        atOptions = {
            'key' : '45b75ea3cb6302192333a9c317574635',
            'format' : 'iframe',
            'height' : 60,
            'width' : 468,
            'params' : {}
        };
    `;
    
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = "//www.highperformanceformat.com/45b75ea3cb6302192333a9c317574635/invoke.js";
    invokeScript.async = true;

    adDiv.appendChild(atOptionsScript);
    adDiv.appendChild(invokeScript);
    adBannerQuestionBottomContainer.appendChild(adDiv);
  }


  function renderShareButtons(name1, name2, currentScore) {
    const shareText = `💘 Hey Lovebirds! 💘\n💑 ${name1} & ${name2} just got a ${currentScore}% LOVE SCORE!\nTheir hearts are perfectly matched ❤️🔥\n\n💥 Want to know your love score too?\n👇 Tap the link & take the test now!\n👉 ${WEBSITE_URL} 👈\n\n📲 Don’t forget to share your score & challenge your friends! 💌✨`;
    const encodedShareMessage = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(WEBSITE_URL);

    const shareOptions = [
        { name: 'WhatsApp', icon: ICONS.WhatsApp(), url: `https://api.whatsapp.com/send?text=${encodedShareMessage}` },
        { name: 'Facebook', icon: ICONS.Facebook(), url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedShareMessage}` },
        { name: 'Instagram', icon: ICONS.Instagram(), url: `https://www.instagram.com` },
        { name: 'X (Twitter)', icon: ICONS.XTwitter(), url: `https://twitter.com/intent/tweet?text=${encodedShareMessage}` },
        { name: 'Telegram', icon: ICONS.Telegram(), url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedShareMessage}` },
        { name: 'Email', icon: ICONS.Email(), url: `mailto:?subject=Our Amazing Love Score! 💕&body=${encodedShareMessage}` },
    ];

    shareButtonsContainer.innerHTML = `
      <div class="mt-8 text-center">
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Share Your Lovely Score!</h3>
        <div class="flex flex-wrap justify-center gap-3 mb-6">
          ${shareOptions.map(option => `
            <a href="${option.url}" target="_blank" rel="noopener noreferrer" title="Share on ${option.name}"
               class="bg-gradient-to-br from-pink-500 to-red-500 text-white p-3 rounded-full shadow-md hover:shadow-lg hover:scale-110 transform transition-all duration-200 flex items-center justify-center w-12 h-12"
               ${option.name === 'Instagram' ? 'onclick="event.preventDefault(); alert(\'To share on Instagram, take a screenshot of your results or certificate and post it to your Story or Feed! Don\\\'t forget to tag us! 😉\');"' : ''}>
              ${option.icon}
            </a>
          `).join('')}
        </div>
        <div class="text-md text-gray-700 bg-gradient-to-r from-pink-100 to-red-100 p-4 rounded-lg shadow-md leading-relaxed max-w-lg mx-auto">
          <p>💘 Hey Lovebirds! 💘</p>
          <p>💑 ${name1} & ${name2} just got a ${currentScore}% LOVE SCORE!</p>
          <p>Their hearts are perfectly matched ❤️🔥</p>
          <br />
          <p>💥 Want to know your love score too?</p>
          <p>👇 Tap the link & take the test now!</p>
          <p><a href="http://${WEBSITE_URL}" target="_blank" rel="noopener noreferrer" class="font-bold text-pink-600 hover:text-red-600 underline">👉 ${WEBSITE_URL} 👈</a></p>
          <br />
          <p>📲 Don’t forget to share your score & challenge your friends! 💌✨</p>
        </div>
      </div>
    `;
  }

  function renderCertificateDisplay(name1, name2, currentScore) {
    certificateDisplayContainer.innerHTML = `
      <div class="mt-10 text-center p-4 md:p-6 bg-gradient-to-br from-indigo-800 via-purple-800 to-blue-800 rounded-xl shadow-2xl">
        <h3 class="text-3xl md:text-4xl font-lobster text-yellow-300 mb-3 flex items-center justify-center drop-shadow-lg">
          ${ICONS.Trophy('w-10 h-10 md:w-12 md:h-12 mr-3 text-yellow-400')}
          Your Cosmic Love Certificate!
        </h3>
        <p class="text-gray-300 mb-6 text-lg">
          Dear <span class="font-bold text-yellow-200">${name1}</span> & <span class="font-bold text-yellow-200">${name2}</span>,
          behold this celestial token of your love!
        </p>
        
        <div id="certificate-preview" class="w-full max-w-md mx-auto p-0.5 mb-6 border-[10px] border-yellow-500 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 rounded-md shadow-2xl relative aspect-[1/1.414] min-h-[60vh] overflow-hidden text-gray-200">
          <div class="absolute inset-[2px] border-[5px] border-yellow-300/70 rounded-sm flex flex-col items-center justify-around p-1 md:p-2 h-full">
            ${ICONS.Sparkles('absolute top-1 left-1 w-5 h-5 text-yellow-300 opacity-70 animate-pulse')}
            ${ICONS.Sparkles('absolute top-1 right-1 w-5 h-5 text-yellow-300 opacity-70 animate-pulse')}
            ${ICONS.Sparkles('absolute bottom-1 left-1 w-5 h-5 text-yellow-300 opacity-70 animate-pulse')}
            ${ICONS.Sparkles('absolute bottom-1 right-1 w-5 h-5 text-yellow-300 opacity-70 animate-pulse')}

            <h4 class="font-lobster text-xl md:text-2xl text-yellow-300 mt-1 md:mt-2 tracking-wide drop-shadow-sm">Our Love Story in the Stars</h4>
            <div class="w-3/4 h-[1px] bg-yellow-400/50 my-0.5 md:my-1"></div>
            
            <div class="my-0.5 md:my-1 flex flex-col items-center justify-center">
               <p class="text-md md:text-lg font-semibold text-gray-100 font-georgia leading-tight">
                  ${name1} <span class="font-lobster text-yellow-300 text-lg md:text-xl">&amp;</span> ${name2}
               </p>
               <p class="text-xs md:text-sm text-yellow-200 italic font-dancing-script">A Celestial Bond</p>
            </div>
            
            <div class="relative my-1 md:my-2">
              <div class="bg-yellow-400 text-indigo-800 rounded-full w-16 h-16 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg border-2 border-yellow-200">
                <p class="text-2xl md:text-4xl font-bold font-poppins">${currentScore}%</p>
              </div>
            </div>
            <p class="text-[10px] md:text-xs font-semibold text-indigo-800 bg-yellow-300 px-2 py-0.5 rounded-sm -mt-2 md:-mt-3 z-10">Cosmic Compatibility</p>
            
            <p class="text-[9px] md:text-[10px] text-gray-300 italic mt-1 md:mt-2 text-center px-1 leading-tight">
              "Two souls aligned, a love divinely designed."
            </p>
            <div class="absolute bottom-0.5 md:bottom-1 w-full px-1">
              <hr class="border-t border-yellow-400/30 my-0.5" />
              <p class="text-[8px] md:text-[9px] text-gray-400">
                The Love Test Game &bull; ${new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        <button id="download-certificate-btn" aria-label="Download Your Cosmic Love Certificate"
          class="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:to-red-600 active:scale-95 text-white font-bold py-3.5 px-10 rounded-lg shadow-xl text-lg transform hover:scale-105 transition-all duration-150 flex items-center justify-center mx-auto">
          ${ICONS.Download('w-6 h-6 mr-3')}
          Download Your Cosmic Token!
        </button>
      </div>
    `;
    document.getElementById('download-certificate-btn').onclick = () => downloadCertificate(name1, name2, currentScore);
  }

  function drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius, color) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }
  
  function drawShootingStar(ctx, x, y, length, angle, starColor, tailColorStart, tailColorEnd) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);
    drawStar(ctx, 0, 0, 5, 10, 4, starColor);
    const tailGradient = ctx.createLinearGradient(0, 0, -length, 0);
    tailGradient.addColorStop(0, tailColorStart);
    tailGradient.addColorStop(1, tailColorEnd);
    ctx.fillStyle = tailGradient;
    ctx.beginPath();
    ctx.moveTo(0, -2);
    ctx.lineTo(-length, -8);
    ctx.lineTo(-length, 8);
    ctx.lineTo(0, 2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function downloadCertificate(name1, name2, currentScore) {
    const canvas = document.createElement('canvas');
    const canvasWidth = 800; 
    const canvasHeight = 1131;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      alert('Oops! We couldn\'t create your certificate artwork. Please try again.');
      return;
    }
    
    const padding = 30;

    const bgColorCenter = '#4a0e6c'; 
    const bgColorMid = '#2a0a4f';  
    const bgColorOuter = '#0b022e'; 
    const starColor = '#FFFDD0'; 
    const majorStarColor = '#FFEB3B';
    const nebulaColorSoft = 'rgba(200, 100, 255, 0.15)';
    const nebulaColorBlueish = 'rgba(100, 150, 255, 0.1)';
    const titleColor = '#FFD700'; 
    const namesColor = '#FFFDD0'; 
    const scoreTextOnSealColor = '#1f0651'; 
    const scoreSealMainColor = '#FFD700'; 
    const scoreSealHighlightColor = '#FFFACD'; 
    const affirmationColor = '#E0E7FF'; 
    const footerTextColor = '#B0B0CF'; 
    const borderColorOuter = '#FFD700'; 
    const borderColorInner = '#C0C0C0'; 

    const bgGradient = ctx.createRadialGradient(canvasWidth / 2, canvasHeight / 2, 50, canvasWidth / 2, canvasHeight / 2, Math.max(canvasWidth, canvasHeight) / 1.5);
    bgGradient.addColorStop(0, bgColorCenter);
    bgGradient.addColorStop(0.4, bgColorMid);
    bgGradient.addColorStop(1, bgColorOuter);
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = nebulaColorSoft;
    ctx.beginPath();
    ctx.ellipse(canvasWidth * 0.3, canvasHeight * 0.25, 150, 200, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = nebulaColorBlueish;
    ctx.beginPath();
    ctx.ellipse(canvasWidth * 0.7, canvasHeight * 0.7, 200, 120, -Math.PI / 6, 0, 2 * Math.PI);
    ctx.fill();
    
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvasWidth;
      const y = Math.random() * canvasHeight;
      const radius = Math.random() * 1.5 + 0.5;
      const alpha = Math.random() * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255, 253, 208, ${alpha})`;
      ctx.fill();
    }
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        drawStar(ctx, x,y, 5, Math.random()*3 + 2, Math.random()*1+1, majorStarColor);
    }
    drawShootingStar(ctx, canvasWidth * 0.8, canvasHeight * 0.2, 100, 135, majorStarColor, 'rgba(255, 235, 59, 0.5)', 'rgba(255, 235, 59, 0)');

    ctx.strokeStyle = borderColorOuter;
    ctx.lineWidth = 3;
    ctx.strokeRect(padding, padding, canvasWidth - 2 * padding, canvasHeight - 2 * padding);
    
    ctx.strokeStyle = borderColorInner;
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(padding + 8, padding + 8, canvasWidth - 2 * (padding + 8), canvasHeight - 2 * (padding + 8));
    ctx.setLineDash([]);

    ctx.textAlign = 'center';
    const titleText = "Our Love Story in the Stars";
    let titleFontSize = 52; 
    const maxTitleWidth = canvasWidth - 2 * (padding + 8 + 10); 

    ctx.font = `bold ${titleFontSize}px 'Lobster', cursive`;
    while (ctx.measureText(titleText).width > maxTitleWidth && titleFontSize > 30) { 
        titleFontSize -= 2;
        ctx.font = `bold ${titleFontSize}px 'Lobster', cursive`;
    }

    ctx.fillStyle = titleColor;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 10; ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 2;
    ctx.fillText(titleText, canvasWidth / 2, 130);
    ctx.shadowColor = 'transparent';

    ctx.font = `normal ${name1.length + name2.length > 20 ? '48px' : '56px'} 'Georgia', serif`;
    ctx.fillStyle = namesColor;
    ctx.fillText(`${name1} & ${name2}`, canvasWidth / 2, 230);
    
    ctx.beginPath();
    ctx.moveTo(canvasWidth/2 - 50, 260);
    ctx.quadraticCurveTo(canvasWidth/2, 275, canvasWidth/2 + 50, 260);
    ctx.strokeStyle = titleColor;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    drawStar(ctx, canvasWidth/2, 258, 5, 6, 2.5, titleColor);

    const sealCenterX = canvasWidth / 2;
    const sealCenterY = 420;
    const sealRadius = 90;

    const glowGradient = ctx.createRadialGradient(sealCenterX, sealCenterY, sealRadius * 0.8, sealCenterX, sealCenterY, sealRadius * 1.5);
    glowGradient.addColorStop(0, 'rgba(255, 215, 0, 0.4)'); 
    glowGradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(sealCenterX, sealCenterY, sealRadius * 1.5, 0, 2 * Math.PI);
    ctx.fill();
    
    const sealGradient = ctx.createRadialGradient(sealCenterX - 20, sealCenterY - 20, 10, sealCenterX, sealCenterY, sealRadius);
    sealGradient.addColorStop(0, scoreSealHighlightColor);
    sealGradient.addColorStop(1, scoreSealMainColor);
    ctx.fillStyle = sealGradient;
    ctx.beginPath();
    ctx.arc(sealCenterX, sealCenterY, sealRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1; ctx.stroke();

    ctx.font = `bold ${currentScore === 100 ? '70px' : '80px'} 'Poppins', sans-serif`;
    ctx.fillStyle = scoreTextOnSealColor;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(255,255,255,0.2)'; ctx.shadowBlur = 3;
    ctx.fillText(`${currentScore}%`, sealCenterX, sealCenterY);
    ctx.shadowColor = 'transparent';

    ctx.font = "italic 24px 'Georgia', serif";
    ctx.fillStyle = namesColor;
    ctx.fillText("Cosmic Compatibility", sealCenterX, sealCenterY + sealRadius + 30);

    ctx.font = "italic 28px 'Georgia', serif";
    ctx.fillStyle = affirmationColor;
    wrapTextCanvas(ctx, "A celestial bond, forever entwined,\ntwo souls aligned, a love divinely designed.", canvasWidth / 2, sealCenterY + sealRadius + 100, canvasWidth - 200, 35);
    
    drawStar(ctx, canvasWidth / 2 - 180, sealCenterY + sealRadius + 90, 5, 8, 3, starColor);
    drawStar(ctx, canvasWidth / 2 + 180, sealCenterY + sealRadius + 140, 5, 8, 3, starColor);

    const cornerPad = padding + 25;
    [[cornerPad, cornerPad], [canvasWidth - cornerPad, cornerPad], [cornerPad, canvasHeight - cornerPad], [canvasWidth - cornerPad, canvasHeight - cornerPad]].forEach(coords => {
        for(let i=0; i<3; i++){
            const sx = coords[0] + (Math.random()-0.5)*20;
            const sy = coords[1] + (Math.random()-0.5)*20;
            const sSize = Math.random()*4+2;
            drawStar(ctx, sx, sy, 5, sSize, sSize/2.5, borderColorInner);
        }
    });

    const footerLineY = canvasHeight - 80;
    ctx.beginPath();
    ctx.moveTo(padding + 50, footerLineY);
    ctx.lineTo(canvasWidth - padding - 50, footerLineY);
    ctx.strokeStyle = 'rgba(192, 192, 192, 0.5)'; ctx.lineWidth = 0.5; ctx.stroke();

    ctx.font = "16px 'Poppins', sans-serif";
    ctx.fillStyle = footerTextColor;
    ctx.textAlign = 'center';
    ctx.fillText(`Crafted with Stardust: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`, canvasWidth / 2, footerLineY + 25);
    
    ctx.font = "italic 14px 'Poppins', sans-serif";
    ctx.fillStyle = 'rgba(176, 176, 207, 0.8)';
    ctx.fillText(`The Love Test Game - ${WEBSITE_URL}`, canvasWidth / 2, footerLineY + 50);

    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `Cosmic_Love_Certificate_${name1}_${name2}.png`;
    link.href = image;
    link.click();
  }

  function wrapTextCanvas(context, text, x, y, maxWidth, lineHeight) {
    const lines = text.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let words = lines[i].split(' ');
        let line = '';
        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = context.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                context.fillText(line.trim(), x, y);
                line = words[n] + ' ';
                y += lineHeight;
            } else {
                line = testLine;
            }
        }
        context.fillText(line.trim(), x, y);
        if (i < lines.length -1) y += lineHeight; 
    }
  }


  // --- Event Handlers ---
  function handleStartQuiz(e) {
    e.preventDefault();
    const n1 = name1Input.value.trim();
    const n2 = name2Input.value.trim();

    if (n1 && n2) {
      names = { name1: n1, name2: n2 };
      renderQuizPage();
    } else {
      alert("Please enter both names! 🥰");
    }
  }

  function handleAnswer(_answer) {
    const questionCardContainer = document.getElementById('question-card-container');
    questionCardContainer.classList.add('opacity-0');

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuizQuestions.length) {
            renderQuestion(); 
        } else {
            handleQuizComplete();
        }
    }, 300); 
  }

  function handleQuizComplete() {
    // Score will be between 40 and 100 (inclusive)
    score = Math.floor(Math.random() * (100 - 40 + 1)) + 40; 
    renderResultPage();
  }

  function handlePlayAgain() {
    names = { name1: '', name2: '' };
    score = null;
    currentQuestionIndex = 0;
    selectedQuizQuestions = []; // Clear selected questions
    renderHomePage();
  }


  // --- Initialization ---
  function init() {
    appTitleElement.textContent = APP_TITLE;
    footerAppTitleElement.textContent = APP_TITLE;
    currentYearElement.textContent = new Date().getFullYear();

    nameForm.onsubmit = handleStartQuiz;
    closePopupBtn.onclick = () => popupMessage.classList.add('hidden');
    playAgainBtn.onclick = handlePlayAgain;
    
    renderHomePage();
  }

  init();
});
