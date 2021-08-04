const electricSkateboard = {
    "id": "electricSkateboard",
    "img": "assets/projects/electricSkateboard.png",
    "tags": ["arduino", "hardware", "software", "team", "self-initiated"],
    "timeframe": "dec 18 - jan 19",
    "title": "ELECTRIC SKATEBOARD",
    "description": "Armed with arduinos and a brushless DC motor, my team and I created a working bluetooth-controlled electric skateboard over the summer break.",
}

const bitsnbolts = {
    "id": "bitsnbolts",
    "img": "assets/projects/bitsnbolts.png",
    "tags": ["esp32", "hardware", "software", "team", "web app", "hackathon", "self-initiated"],
    "timeframe": "may 19 - may 19",
    "title": "BITS N BOLTS HACK'19",
    "description": "We implemented a water monitoring solution using an esp32 with sensors and a server which displays the metrics in realtime.",
}

const keysight = {
    "id": "keysight",
    "img": "assets/projects/keysight.png",
    "tags": ["team", "hackathon", "self-initiated"],
    "timeframe": "may 19 - may 19",
    "title": "KEYSIGHT SMART WATER",
    "description": "We made a promotional video on how we planned to monitor the nation's water bodies to check for water pollution.",
}

const overflow = {
    "id": "overflow",
    "img": "assets/projects/overflow.png",
    "tags": ["pair", "hardware", "fpga", "game", "EE2026", "module"],
    "timeframe": "mar 19 - apr 19",
    "title": "OVERFLOW",
    "description": "We took a different approach to the EE2026 digital design project by creating a fun and exciting FPGA Game interacting with ambient sounds and songs.",
}

const musicviz = {
    "id": "musicviz",
    "img": "assets/projects/musicviz.png",
    "tags": ["arduino", "hardware", "software", "solo", "self-initiated"],
    "timeframe": "feb 19 - feb 19",
    "title": "MUSIC VISUALISER",
    "description": "Colourful Sound Visualisation Display Lights created with acrylic tubes, neopixels, a mic and an arduino nano.",
}

const brainxpace = {
    "id": "brainxpace",
    "img": "assets/projects/brainxpace.png",
    "tags": ["software", "pair", "self-initiated", "CP2106", "web app", "django", "module"],
    "timeframe": "may 19 - jul 19",
    "title": "BRAINXPACE",
    "description": "Brainxpace is an educational webapp that allows everyone to share lessons, quizes, screen-cast, learning materials and much more.",
}

const farmio = {
    "id": "farmio",
    "img": "assets/projects/farmio.png",
    "tags": ["software", "team", "game", "CS2113T", "module"],
    "timeframe": "aug 19 - nov 19",
    "title": "FARMIO",
    "description": "Farmio is a command line game that teaches computational concepts in a fun and interactive manner. It features gamified learning and simulation of in-game code.",
}

const electricTrolley = {
    "id": "electricTrolley",
    "img": "assets/projects/electricTrolley.png",
    "tags": ["esp32", "hardware", "software", "pair", "self-initiated"],
    "timeframe": "may 19 - jun 19",
    "title": "ELECTRIC TROLLEY",
    "description": "Double the power, this trolley can move really really fast. It is controlled by a webpage that is hosted by an esp32 at the core of the machine.",
}

const teledoor = {
    "id": "teledoor",
    "img": "assets/projects/teledoor.png",
    "tags": ["esp32", "hardware", "software", "solo", "self-initiated"],
    "timeframe": "nov 19 - dec 19",
    "title": "TELE-DOOR",
    "description": "Created a mechanism to remotely lock and unlock my front door as well as opening and closing my front gate by sending telegram messages to a bot.",
}

const brainhack = {
    "id": "brainhack",
    "img": "assets/projects/brainhack.png",
    "tags": ["software", "mobile app", "team", "flutter", "hackathon", "self-initiated"],
    "timeframe": "jul 20 - jul 20",
    "title": "BRAINHACK 2020",
    "description": "My team created a group video calling ktv app to address the lack of personal interaction during the covid19 circuit breaker.",
}

const IEEEHack = {
    "id": "IEEEHack",
    "img": "assets/projects/IEEEHack.png",
    "tags": ["software", "team", "web app", "hackathon", "self-initiated"],
    "timeframe": "mar 20 - mar 20",
    "title": "IEEE NUS HACK 2020",
    "description": "We prototyped a sentiment analysis tool in response to covid 19 that aims to improve morale in the nation",
}

const furryFantasy = {
    "id": "furryFantasy",
    "img": "assets/projects/furryFantasy.png",
    "tags": ["software", "react", "web app", "postgres sql", "team", "CS2102"],
    "timeframe": "sep 20 - nov 20",
    "title": "FURRY FANTASY",
    "description": "Furry Fantasy is a webapp which facilitates the arrangements and scheduling between pet owners and care givers.",
}

const zhengWen = {
    "id": "zhengWen",
    "img": "assets/projects/zhengwen.png",
    "tags": ["software", "react", "web app", "solo", "self-initiated"],
    "timeframe": "jul 21 - aug 21",
    "title": "ZHENG WEN'S SITE",
    "description": "This webapp which serves as my resume as well as a catalogue for the modules and projects I have taken.",
}

export const projectData = [
    electricSkateboard,
    musicviz,
    overflow,
    keysight,
    bitsnbolts,
    electricTrolley,
    brainxpace,
    farmio,
    teledoor,
    IEEEHack,
    brainhack,
    furryFantasy,
    zhengWen
]

const getProjectTags = () => {
    var projectTagsSet = new Set()
    for (var p = 0; p < projectData.length; p++) {
        projectData[p].tags.forEach(item => projectTagsSet.add(item));
    }

    const projectTags_ = [...projectTagsSet]

    for (p = 0; p < projectData.length; p++) {
        projectTags_.push("* " + projectData[p].title)
    }

    return projectTags_
}

export const projectTags = getProjectTags()