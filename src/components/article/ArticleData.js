import { SeparationKey } from "../../utils/constants"

const shopee =
{
    "header": "Shopee",
    "subtext": "Shopee Techops Intern for ATAP (CP3880)",
    "sections": [
        {
            "img": "assets/internships/shopee.jpg",
            "description": "jan 21 - jul 21",
        },
        {
            "img": "assets/article/shopee/entry_task.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `- Create a simple Web Application that supports login, logout, view profile and edit profile
            - It has to have a TCP server with a custom protocol (not http)
            - Deploy to shopee k8 server
            - Performance Metrics: request per second must be recorded and optimised
            - Service had to be profiled`
        },
        {
            "img": "assets/article/shopee/entry_task1.jpg",
            "description": "Photo of the front-end interface of the entry task"
        },
        {
            "img": "assets/article/shopee/entry_task2.jpg",
            "description": "Flamegraph of the cpu usage of the entry task's http server when fetching profile information"
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- Spent a lot of time learning the basics of web dev with golang
 - There was a detailed document created on how i should implement the project, had to google pretty much everything and seek help from my mentor
 - Struggled especially with the deployment phase`
        },
        {
            "title": "What I have learnt",
            "paragraph": `- Web sessions (with cookies and redis)
            - Password salt and hash
            - Using redis to cache mysql database
            - Creating a TCP server using a custom protocol with protobuf
            - Service deployment with Shopee's Jenkins pipeline
            - Golang
            - Using pprof in the command line as well as with the UI in space
            - Using AWS s3 container to upload and retrieve files (profile picture)
            `
        },
        {
            "title": "Completion Time",
            "paragraph": "~4 Weeks"
        },
        {
            "img": "assets/article/shopee/ps.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `- Develop a dynamic CLI tool that supports the retrieval of service process information quickly
            - Before this task, Devs had to check which process in the container the service is running before making separate commands to check the different metrics
            - This utility to be implemented should combine these steps and other useful process status tools into one
            `
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- Had to research and learn about the command line tools used for troubleshooting and debugging
            - Much like adding a new feature to any project, I had to read and understand the underlying software architecture before I can start
            `
        },
        {
            "title": "What I have learnt",
            "paragraph": `- An example of how the architecture of a production grade command line tool would look like
            - Troubleshooting and debugging tools, in particular, pidstat, nethogs and ss.`
        },
        {
            "title": "Completion Time",
            "paragraph": `~2.5 Weeks`
        },
        {
            "img": "assets/article/shopee/cron.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `- Receive a config detailing the schedule of profiling for a Service Data Unit (SDU)
            - Submit a profiling command to Shopee’s rundeck according to this config
            - Maintain a database of these configs for the record of configs for each service
            - Support CRUD for this database by adding additional API endpoints to the project
            - Support email notifications if a profiling job has failed
            - Communicate with FE dev to push the feature
            `
        },
        {
            "img": "assets/article/shopee/cron1.jpg",
            "description": "Front end user interface of the cron profiler"
        },
        {
            "img": "assets/article/shopee/cron2.jpg",
            "description": "Gmail notification of cron profiler result"
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- Spent a long time debugging code only to find out the bug was in shopee’s rundeck API (Shortage of QAs in my department)
            - Was unfamiliar with Shopee’s internal libraries
            - There were multiple feedback updates and bugs for this task (I had to keep coming back to fix them)
            - Since I was an intern, I had permission issues. (I was not authorised to use this feature for both the test and live service)
            `
        },
        {
            "title": "What I have learnt",
            "paragraph": `- Shopee’s internal services and libraries such as Shopee’s Access Management (SAM)
            - More knowledge in Backend Web Development with Gin-Gonic
            - Cron scheduling
            - Rundeck
            - Some Code Quality notes`
        },
        {
            "title": "Completion Time",
            "paragraph": `~4 Weeks`
        },
        {
            "img": "assets/article/shopee/grafana_overview.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `- Grafana is a useful visualisation tool
            I had to create a dashboard which shows...
            - Average live and non-live Deployment Time trend
            - Failure cause distribution of top 5 highest error jobs
            - Top 5 longest deployment jobs
            - Deployment stage failure pie chart
            `
        },
        {
            "img": "assets/article/shopee/grafana_overview1.jpg",
            "description": "Deployment Status pie chart"
        },
        {
            "img": "assets/article/shopee/grafana_overview2.jpg",
            "description": "Failed vs Total Deployments over time"
        },
        {
            "img": "assets/article/shopee/grafana_overview3.jpg",
            "description": "Example top 5 highest error rate services and error causes"
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- Recap on my SQL knowledge to make complex queries
            `
        },
        {
            "title": "What I have learnt",
            "paragraph": `- Grafana
            - Grafana variables`
        },
        {
            "title": "Completion Time",
            "paragraph": `~3 Weeks`
        },
        {
            "img": "assets/article/shopee/rm.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `Release Management (RM) is a team in shopee
            I was tasked to discuss with them to provide them with API that queries deployment data
            `
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- Code quality (writing code in an easily understandable and maintainable way)
            - Many new terms in deployment that got me confused (rollback, platform, ...)
            `
        },
        {
            "title": "What I have learnt",
            "paragraph": `- Effective communication with user (RM)
            - Always check code thoroughly before merge to master
            `
        },
        {
            "title": "Completion Time",
            "paragraph": `~4 Weeks`
        },
        {
            "img": "assets/article/shopee/grafana_service.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `- Similar to the earlier grafana task but this time, it should be service specific and more detailed
            `
        },
        {
            "img": "assets/article/shopee/grafana_service1.jpg",
            "description": "Snap shot of the dashboard of a selected service"
        },
        {
            "img": "assets/article/shopee/grafana_service2.jpg",
            "description": "Selecting a service' dashboard"
        },
        {
            "img": "assets/article/shopee/grafana_service3.jpg",
            "description": "Other statistics per service"
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- Did not finish this quickly due to careless mistakes and code freeze near hari raya and 5/5
            `
        },
        {
            "title": "What I have learnt",
            "paragraph": `- Check in Shopee’s k8 test environment before pushing to master even though fix may seem trivial
            - NGINX will ignore http headers containing an underscore ‘_’
           - Using Grafana’s JSON data as source of variables
           `
        },
        {
            "title": "Completion Time",
            "paragraph": `~2 Weeks`
        },
        {
            "img": "assets/article/shopee/gorm.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `- Shopee’s golang library utilises Golang Object Relational Mapping (GORM) to manage databases.
            - Since Version 2 of GORM has been released, I have been tasked to update it in Shopee’s library.
            - I had to maintain backward compatibility and read the docs on what has changed
            `
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- This task was really difficult and daunting initially as gorm developers seemed to have reworked many methods and types
            - Had to slowly read through how some features are implemented to ensure backward compatibility
            `
        },
        {
            "title": "What I have learnt",
            "paragraph": `- Understanding golang code
            - GORM features
            `
        },
        {
            "title": "Completion Time",
            "paragraph": `~4 Weeks`
        },
        {
            "img": "assets/article/shopee/blackbox.jpg",
        },
        {
            "title": "What is it about?",
            "paragraph": `- A blackbox-monitor simulates how a user would interact with endpoints of an API
            - It then validates the output by checking the relevant keys or status code of the request
           - I have to design its yaml input config file that will detail what and how endpoints of a service are checked.
           - Mattermost notification will alert responsible devs if the program reported an error
           `
        },
        {
            "title": "Difficulties and Challenges",
            "paragraph": `- Unlike the other tasks in this internship, I had to create this project from scratch
            - Had to carefully plan the design and software architecture to be as maintainable, scalable and understandable as possible`
        },
        {
            "title": "What I have learnt",
            "paragraph": `- Recap on software architecture
            - How to build a blackbox-monitor
            `
        },
        {
            "title": "Completion Time",
            "paragraph": `~6 Weeks`
        },
    ],
}

const dso =
{
    "header": "Defence Science Organisation",
    "subtext": "Software Engineer Intern at Electronic Systems Division",
    "sections": [
        {
            "img": "assets/internships/dso.jpg",
            "description": "jun 20 - aug 20",
        },
        {
            "title": "What is it about?",
            "paragraph": `- Modelled entities in C# using Object-Oriented Programming
            - Simulated behaviour of entities with Discrete Event Simulation (O2DESNet)
            - Visualised the simulation on a 3D mapping library (CesiumJs)
            
            This internship was very interesting as I got to play around with simulations and 3D graphics. Unfortunately, more details of this internship is confidential.`
        }
    ],
}

const electricSkateboard =
{
    "header": "Electric Skateboard",
    "subtext": "dec 18 - jan 19",
    "sections": [
        {
            "youtube": "ZKxLzO2IJS4",
            "description": "Completed Electric Skateboard Demo"
        },
        {
            "title": "The Journey",
            "paragraph": `After experiencing our first semester as a computer engineering undergrad, Guan Yew, Jin Wen, Shannon and I were craving to create something using our freshly learnt knowledge. We knew we wanted to make something physical that we could use but yet be able to apply our programming skills. Guan Yew then suggested we built an electronic skateboard. I had my doubts as I felt that it would be too challenging for us. However, the thought of cruising to school on an electric skateboard assembled and programmed by ourselves was too exciting. Needless to say, the rest of us agreed. I felt that doing this was a big step up for us since we only had introductory knowledge to programming and electronics. Nonetheless, that did not stop us. We proceeded to research on parts to first assemble our skateboard such as wheel mounts, motors, electronic speed controllers etc. Thankfully, Shannon already had a board he could donate to our cause so we did not have to worry about the main body. 
            After about two weeks of research, we found a great brushless DC motor, motor mount, esc and a set of batteries perfect for our skateboard and proceeded to order them online. While waiting for the parts, I was testing out some software code to control the acceleration using an arduino nano. Since the controller had to be wireless, we also bought a pair of bluetooth modules such that one arduino could send commands over to the other.
            In about a month more, most of our parts arrived. We were quite scared because we watched how easy it was to explode lithium polymer batteries or to spoil the ESC. We carefully tested interfacing the arduino with the ESC and the Brushless DC motor.
            Nothing goes completely as planned. When Shannon was testing the motor, he plugged in the usb of the arduino to his laptop in order to program it without removing the power cables from the LIPO batteries. His laptop crashed and had to be sent back to the servicing center. Luckily, it was still under warranty and after about 2 or so weeks it came back good as new. By that time, we already had a working program. We then proceeded to purchase a tupperware to house all our components and wire up the skateboard. By the second week of school (after the break), we had a working electronic skateboard with a bluetooth joystick remote control.`,
        },
        {
            "img": "assets/article/electricSkateboard/featuring_shannon.jpeg",
            "description": "Shannon and I connecting the skateboard to a DC power supply (batteries have not arrived)"
        },
        {
            "youtube": "z5d0IM-GLZg",
            "description": "Non-human test of Skateboard with power supply"
        },
        {
            "youtube": "K-G05g_60G0",
            "description": "Me testing the Skateboard with a power supply in School of Computing's Student Lounge"
        },
        {
            "youtube": "GzWWwCclhng",
            "description": "Shannon turn at testing the skateboard"
        },
        {
            "youtube": "TF7ohE8ceH4",
            "description": "Guan Yew bravely testing our skateboard while standing up, having faith that we have created a reliable product."
        },
        {
            "youtube": "K3lMmZ6AX40",
            "description": "Batteries finally arrived!"
        },
        {
            "paragraph": `This was a really fun project to plan, work on and test. It marked a great start to our Computer Engineering Journey and the future projects we will embark on.
            
            
            `
        }
    ],
}

const musicviz =
{
    "header": "Music Visualiser",
    "subtext": "feb 19",
    "sections": [
        {
            "youtube": "uL7dHAAg3Qk",
            "description": "Completed Music Visualiser in action",
        },
        {
            "title": "Description",
            "paragraph": `This was a solo project. I wanted to make a nice led music visualiser and thought it would look awesome by lighting acrylic tubes with neopixels. I completed the project over the chinese new year break.
            This was made using an arduino nano hooked up to an operational amplifier (knowledge from CG1111) and then connected to a microphone. The arduino nano will send signals to the neopixels using pulse width modulation on board to change the rgb values. The colours produced are determined based on the amplitude and frequency of the sound waves picked up by the microphone. The casing was made up of a mixture of laser-cut acrylic and wood. The device is powered externally by USB.`
        }
    ],
}

const overflow =
{
    "header": "OVERFLOW",
    "subtext": "mar 19- apr 19",
    "sections": [
        {
            "youtube": "5F8EnDHLDB0",
            "description": "OVERFLOW Demo",
        },
        {
            "title": "Motivation",
            "paragraph": `Initially, we were tasked to create a music visualiser using an FPGA and a mic for our final project in the module, EE2026. Since it was quite an open ended project, Jin Wen and I wanted to make our project unique and better than the rest. We arrived at the idea of creating a Retro-styled Game which makes use of the surrounding sound. 
            `
        },
        {
            "img": "assets/article/EE2026/overflow_fpga.jpg",
            "description": "Still Image of playing OVERFLOW"
        },
        {
            "title": "Description",
            "paragraph": `The rain droplets and fireballs in the game are randomly generated based on the surrounding sound (it works by generating either a rain droplet or fire ball from the sound wave at the top of the screen once a subsection of the sound wave exceeds a certain amplitude).
            The player controls the bucket using the left and right push buttons on the FPGA. Upon contact with the bucket, a water droplet will fill the bucket while a fire ball will evaporate water out of the bucket. The player loses the game once the bucket is overflowed with water or there is no more water in the bucket. The objective is to last as long as possible without losing and the highscore keeps track of the longest time a player has lasted in seconds since the fpga has been resetted. The high speed droplets/fireballs would have a high probability of being generated if the lightning indicator on the right is maxed out. (it measures the current volume of ambient sounds)
            As one can imagine, this game is very dynamic as the game's difficulty depends on the sound playing in the background. I had a lot of fun playing the game and was quite sad when we had to return the FPGA at the end of the project.`
        },
        {
            "img": "assets/article/overflow/overflow_gameover.jpg",
            "description": "Gameover screen of OVERFLOW"
        },
        {
            "img": "assets/article/overflow/overflow_pause.jpg",
            "description": "Game pause screen of OVERFLOW"
        },
    ],
}

const keysight =
{
    "header": "Keysight Smart Water Challenge",
    "subtext": "may 19",
    "sections": [
        {
            "img": "assets/article/keysight/poster.jpg",
            "description": "The Keysight iot innovation challenge poster",
        },
        {
            "title": "Description",
            "paragraph": `The Keysight IOT challenge required participants to submit video entries on a smart solution that combats either land or water pollution. The team for this project was Jing Xuan, Guan Yew, Jin Wen, Shannon and myself.`
        },
        {
            "youtube": "Z7_XgDQ_Yf0",
            "title": "Our submission for smart water"
        }
    ],
}

const bitsnbolts =
{
    "header": "Bits n Bolts '19 Hackathon",
    "subtext": "may 19",
    "sections": [
        {
            "img": "assets/article/bitsnbolts/team_photo.jpeg",
            "description": "Team photo, awarded best hack. From left, Jing Xuan, Jin Wen, myself, Guan Yew",
        },
        {
            "title": "Description",
            "paragraph": "We implemented a water monitoring solution using an esp32 (nodemcu) with sensors (pH and turbidity) and a server which displays the metrics in realtime on a webapp. We demonstrated our product by adding sparkling apple juice from the vending machine to show the judges a change in acidity and added coffee creamer to the water to demonstrate a change in turbidity. Unfortunately, we were so focused on the hackathon that we completely forgot to take any other pictures during the event."
        }
    ],
}

const brainxpace =
{
    "header": "brainxpace",
    "subtext": "may 19 - jul 19",
    "sections": [
        {
            "img": "assets/article/brainxpace/booth_pic.jpeg",
            "description": "Glen and I at our booth, showcasing brainxpace at School of Computing's Orbital 2019.",
        },
        {
            "title": "Description",
            "paragraph": "Brainxpace is an educational webapp that allows everyone to share lessons, quizes, screen-cast, learning materials and much more. Check out our video below for more information!"
        },
        {
            "youtube": "viX5OPovXiQ",
            "description": "Our Demo Video for brainxpace"
        },
    ],
}

const farmio =
{
    "header": "Farmio",
    "subtext": "aug 19 - nov 19",
    "sections": [
        {
            "youtube": "GPSQ7Cvv9wM",
            "description": "Final Presentation for CS2101 of FARMIO (our application developed in CS2113T)"
        },
        {
            "paragraph": "Click the link below for Farmio's github repo, user guide and developer guide and more information."
        },
        {
            "title": "Farmio Github Repo",
            "link": "https://github.com/AY1920S1-CS2113T-F14-2/main"
        },
        {
            "img": "assets/article/CS2113T/farmio_cover.jpg",
            "description": "Welcome page of Farmio"
        },
        {
            "img": "assets/article/CS2113T/farmio_programming.jpg",
            "description": "Coding Segment of Gameplay"
        },
        {
            "img": "assets/article/CS2113T/farmio_animation.jpg",
            "description": "ASCII animation shows how your code affects the game."
        },
        {
            "description": "Farmio full game speed run",
            "youtube": "EgUMWGmHW1I"
        }
    ],
}

const electricTrolley =
{
    "header": "Electric Trolley",
    "subtext": "may 19 - jun 19",
    "sections": [
        {
            "title": "Description",
            "paragraph": `Jing Xuan recruited me for this project. We had many mechanical challenges such as securing the motor mounts tightly in place. Also, the two swivel wheels in front coupled with the uneven torque of each motor made it incredibly hard to steer. 
            Instead of using an arduino connected to a bluetooth module like for my electric skateboard, we used an esp32 and controlled the two motors using a webpage hosted by the microcontroller.`
        },
        {
            "img": "assets/article/electricTrolley/trolley_setup.jpg",
            "description": "Setting up the mounts for the 2 brushless motors for the electric trolley",
        },
        {
            "youtube": "hdwQTW2ipsk",
            "description": "Demonstration of html 2d virtual joystick for esp32 to control both motors."
        },
        {
            "youtube": "qZi5xu1MWPc",
            "description": "Electric Trolley Test Run"
        }
    ],
}

const teledoor =
{
    "header": "Teledoor",
    "subtext": "nov 19 - dec 19",
    "sections": [
        {
            "youtube": "aFrQp9pFvNo",
            "description": "Telegram controlled door with internal physical button demo",
        },
        {
            "youtube": "8uEhCBjbn-A",
            "description": "Teledoor Remote testing with telegram. (without cover)"
        },
        {
            "title": "Description",
            "paragraph": `Using an esp32 wired up with a servo motor, I made it possible to open my front door by sending a message to a telegram bot (hosted on the esp32) provided the sender's ID is verified. 
            For this project I had to utilise my CG2271 (Real Time Operating Systems) knowledge to make the esp32 multi-thread between hosting the telegram bot, operating the lock and unlock mechanism when a command is issued from either telegram or the physical button.
            `
        }
    ],
}

const brainhack =
{
    "header": "Brainhack'20 CODE_EXP Hackathon",
    "subtext": "jul 20",
    "sections": [
        {
            "title": "Description",
            "paragraph": "My Team (Jin Wen, Kang Ming, Tamelly, Guan Yew) created a karaoke app using flutter with video calling capabilities to address the lack of personal interaction during the covid19 circuit breaker. The app included functionality such as the ability to add karoke videos into a queue using youtube links as well as real time playing and pausing of the current video by any user in the virtual room. Watch our demo video below!"
        },
        {
            "youtube": "mwTgA_9oudI",
            "description": "WeOke demo video (forgive our singing)"
        },
        {
            "img": "assets/article/brainhack/finalist.png",
            "description": "Brainhack 2020 finalist certificate",
        },
    ],
}

const IEEEHack =
{
    "header": "IEEE NUS Hackathon'20",
    "subtext": "mar 20",
    "sections": [
        {
            "img": "assets/article/IEEE/presenting.jpg",
            "description": "Vernon and I showing our hardware display to the judges and fellow contestants",
        },
        {
            "title": "Description",
            "paragraph": "We prototyped a sentiment analysis tool in response to covid 19 that aims to improve morale in the nation. More details can be found in the video below."
        },
        {
            "youtube": "WPaT4W_8ans",
            "description": "Our hackathon's product demo video"
        },
        {
            "img": "assets/article/IEEE/2tzw.png",
            "description": "Certificate of 2nd place for NUS IEEE 2020"
        }
    ],
}

const furryFantasy =
{
    "header": "Furry Fantasy",
    "subtext": "sep 20 - nov 20",
    "sections": [
        {
            "title": "Description",
            "paragraph": "Furry Fantasy is a webapp which facilitates the arrangements and scheduling between pet owners and care givers. My group members for this project are Shannon, Kang Ming, Rusdi, Zayne. Check out our demo video!"
        },
        {
            "youtube": "MtqDmYlPbaM",
            "description": "Furry Fantasy demo video",
        },
    ],
}

const zhengWen =
{
    "header": "Zheng Wen's Site",
    "subtext": "jul 21 - aug 21",
    "sections": [
        {
            "title": "Motivation",
            "paragraph": "Always wanted to make my very own website to document my university life and beyond but never had the time until now."
        },
    ],
}

const CG1111 =
{
    "header": "CG1111",
    "subtext": "Engineering Principles and Practice I",
    "sections": [
        {
            "img": "assets/modules/CG1111.jpg",
            "description": "taken 18/19 sem 1, MCs: 6",
        },
        {
            "link": "https://nusmods.com/modules/CG1111A/engineering-principles-and-practice-i",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: S (B+)",
            "paragraph": `This module introduces the usage and integration of various electronic sensors and actuators with an mbot programmed using the arduino IDE.
            The final project requires students to group in teams of 4-5 to build and program the mbot to solve a maze. The mbot decides on which way to go at each junction based on either the color of the ceiling or based on the sound frequency emitted at the junction.
            The workload of this module is low for a 6MC module. Only at the end, during the final project, was the workload moderately high.
            I enjoyed the module as it was very hands-on and practical. In fact, I am still applying some of the things taught such as the use of op-amps to amplify signals to be more easily read by microcontrollers`
        },
        {
            "img": "assets/article/CG1111/fullbot.jpg",
            "description": "My team's final bot for the project"
        },
        {
            "paragraph": `In the photo, you can see the microphone to detect sound frequency as well as a black wall in order to get a more accurate reading for the color of the ceiling. The IR sensors on the side and ultrasonic sensor infront prevents the mbot from crashing into the wall of the maze.`
        }
    ],
}

const CS1010 =
{
    "header": "CS1010",
    "subtext": "Programming Methodology",
    "sections": [
        {
            "img": "assets/modules/CS1010.jpg",
            "description": "taken 18/19 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS1010/programming-methodology",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `CS1010 introduces programming with C-language. In this module, only the standard libraries are allowed since we are expected to code almost everything from scratch.
            The module covers basic data structures, memory allocations and covers the concept of time complexity. It was a fun module and the assignment questions were often interesting to solve.
            The workload of this module depends on how quickly you can solve the assignments. For me, the workload was moderately-high.`
        },
        {
            "img": "assets/article/CS1010/CS1010_group_photo.jpg",
            "description": "My Tutorial Group for CS1010. The C stands for C-language."
        }
    ],
}

const CS1231 =
{
    "header": "CS1231",
    "subtext": "Discrete Structures",
    "sections": [
        {
            "img": "assets/modules/CS1231.jpg",
            "description": "taken 18/19 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS1231/discrete-structures",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: S (B+)",
            "paragraph": `This module had a reputation of being difficult amongst most year 1 computing students. However, it was also really interesting.
            The module covers basic proofs, graph theory, pigeon hole principle and some probability. Assuming you attempt all the tutorials, the workload for this module is high.`
        },
    ],
}

const MA1511 =
{
    "header": "MA1511",
    "subtext": "Engineering Calculus",
    "sections": [
        {
            "img": "assets/modules/MA1511.jpg",
            "description": "taken 18/19 sem 1, MCs: 2",
        },
        {
            "link": "https://nusmods.com/modules/MA1511/engineering-calculus",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `This module is required for most engineering students. I do not remember much about it and don't recall using the concepts taught.`
        },
    ],
}

const MA1512 =
{
    "header": "MA1512",
    "subtext": "Differential Equations for Engineering",
    "sections": [
        {
            "img": "assets/modules/MA1512.jpg",
            "description": "taken 18/19 sem 1, MCs: 2",
        },
        {
            "link": "https://nusmods.com/modules/MA1512/differential-equations-for-engineering",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A+",
            "paragraph": `Similiar to MA1511, this module is also required for most engineering students. I do not remember much about it and don't recall using the concepts taught.`
        },
    ],
}

const GER1000 =
{
    "header": "GER1000",
    "subtext": "Quantitative Reasoning",
    "sections": [
        {
            "img": "assets/modules/GER1000.jpg",
            "description": "taken 18/19 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/GER1000/quantitative-reasoning",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `This is the most relevant General Education module to my degree, mainly because of the probability and statistics part. (NUS students must complete a minimum of 5 General Education modules, one from each pillar; GER, GEQ, GES, GEH, GET)`
        },
    ],
}

const CG1112 =
{
    "header": "CG1112",
    "subtext": "Engineering Principles and Practice II",
    "sections": [
        {
            "img": "assets/modules/CG1112.jpg",
            "description": "taken 18/19 sem 2, MCs: 6",
        },
        {
            "link": "https://nusmods.com/modules/CG2111A/engineering-principles-and-practice-ii",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `This module is the continuation of CG1111. LIDARS, Raspberry pi 3, Arduino Uno are introduced. Much like CG1111, there is a final project that grades students based on the time of completion of a maze.
            This time, although we remotely control the robot's movement with ROS, we are unable to see the maze directly. Instead, we have to utilise the LIDAR issued in order to map out a path. Additionally, we also use wheel encoders to alleviate the effects of the unbalanced power from the left and right motors. 
            Along the way, we have to identify the colours and general shape of obstacles. Definitely, still a very fun module just like CG1112. It was significantly much harder.`
        },
        {
            "img": "assets/article/CG1112/CG1112_front_profile.jpg",
            "description": "Front Profile (in view: colour sensor and ultrasonic sensor, custom acrylic mount made by laser cutting followed by heat bending)"
        },
        {
            "img": "assets/article/CG1112/CG1112_motor_driver_circuit.jpg",
            "description": "Motor Driver Circuit"
        },
        {
            "img": "assets/article/CG1112/CG1112_side_view.jpg",
            "description": "Side View"
        },
        {
            "img": "assets/article/CG1112/CG1112_top_view.jpg",
            "description": "Top View"
        }
    ],
}

const CS2040C =
{
    "header": "CS2040C",
    "subtext": "Data Structures and Algorithms",
    "sections": [
        {
            "img": "assets/modules/CS2040C.jpg",
            "description": "taken 18/19 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS2040C/data-structures-and-algorithms",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `Data structures taught include linked list, queue, stack, map, set, graphs, heaps. While algorithms are taught how to travers or utilise them. Definitely way harder than CS1010. Programming Language used is C++.
            Assignments and Practical Exams are done on Kattis. It can get pretty stressful and/or competetive and/or rewarding since your attempts and how fast you solve are published for everyone to see.
            One huge difference from CS1010 is that you are no longer expected to code every single trivial function from scratch. Thinking and Coding quickly and having an extensive knowledge on the useful library functions are key to succeed in this module`
        },
    ],
}

const EE2026 =
{
    "header": "EE2026",
    "subtext": "Digital Design",
    "sections": [
        {
            "img": "assets/modules/EE2026.jpg",
            "description": "taken 18/19 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/EE2026/digital-design",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A+",
            "paragraph": `This module introduces the different gates; (and/or/nor/xor/xnor/invert) in digital design. It also touches on some binary arithmetics. It then proceeds to teach how you can use a collection of such gates to build more complex logic such as adders and shifters. 
            For labs, we program the basys 3 fpga board using verilog with Vivado to demonstrate logical concepts we have learnt. Teaching assistants will check for correct behaviour based on pressing inputs or outputs on the board and then grade us accordingly.`
        },
        {
            "img": "assets/article/EE2026/basys3.png",
            "description": "BASYS 3 FPGA"
        },
        {
            "paragraph": `For the final project, we were tasked to create a sound visualiser that would output on an external monitor using the VGA port. There was points awarded for a creative design and creating new features.
            It was pair work and my team created OVERFLOW, a retro-style-game which made use of the directional push buttons as well as the ambient sound. You can view more details and gameplay videos about OVERFLOW by clicking the button below.`
        },
        {
            "title": "OVERFLOW",
            "article": "projects" + SeparationKey + "overflow",
        },
        {
            "img": "assets/article/EE2026/overflow_fpga.jpg",
            "description": "image of our game in action"
        },
        {
            "img": "assets/article/EE2026/EE2026_normal_wave.jpg",
            "description": "(normal wave) required by final project guidelines"
        },
        {
            "img": "assets/article/EE2026/EE2026_bar_wave.jpg",
            "description": "(bar wave) a special wave required by final project guidelines "
        },
        {
            "paragraph": `This module, especially the final project was very interesting and fun. 
            For my team, we spent alot of time on this module since we wanted to make something unique and fun. The effort was 100% worth the result.`
        }

    ],
}

const MA1508E =
{
    "header": "MA1508E",
    "subtext": "Linear Algebra for Engineering",
    "sections": [
        {
            "img": "assets/modules/MA1508E.jpg",
            "description": "taken 18/19 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/MA1508E/linear-algebra-for-engineering",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A",
            "paragraph": `As the name suggest, this is an introductory module for Linear Algebra. Around the last few weeks when I had to focus on projects from my other modules, I had to put this on hold. Thankfully, I revised enough before finals to secure an A. This will probably come in handy for some computing modules.`
        },
    ],
}

const GEQ1000 =
{
    "header": "GEQ1000",
    "subtext": "Asking Questions",
    "sections": [
        {
            "img": "assets/modules/GEQ1000.jpg",
            "description": "taken 18/19 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/GEQ1000/asking-questions",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: CS",
            "paragraph": `Module has alot of content to read or watch and graded quizes at the end to check if you actually visited the content. It also has an emphasis on philosophy which was interesting. Glad that it was a CS/SU module.`
        },
    ],
}

const CG2271 =
{
    "header": "CG2271",
    "subtext": "Real Time Operating Systems",
    "sections": [
        {
            "img": "assets/modules/CG2271.jpg",
            "description": "taken 19/20 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CG2271/real-time-operating-systems",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: B",
            "paragraph": `Topics covered in this module are priority inheritance, semaphores, mutex, message queues, buffer, race conditions, deadlocks. Labs involved using concepts learnt to solve problems with freeRTOS on arduino.
            I felt that the module could have been made more exciting. For example, the final project was programming a simulation of a car which was just a bunch of LEDs and a potentiometer wired up to the arduino. The lecturer in charge of this module for semester 2 let students built an actual bluetooth car for the final project.`
        },
        {
            "img": "assets/article/CG2271/Logo_freeRTOS.png",
            "description": "freeRTOS logo"
        },
        {
            "paragraph": `Although I scored badly for this module, I felt that the content was really useful. In fact, I used some of my knowledge on a personal project, TELEDOOR, linked below.`
        },
        {
            "title": "TELEDOOR",
            "article": "projects" + SeparationKey + "teledoor"
        },
    ],
}

const CS2101 =
{
    "header": "CS2101",
    "subtext": "Effective Communication for Computing Professionals",
    "sections": [
        {
            "img": "assets/modules/CS2101.jpg",
            "description": "taken 19/20 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS2101/effective-communication-for-computing-professionals",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A",
            "paragraph": `This is a twin module coupled with CS2113T. This module covers some key points of making a good presentation, team discussions, interviews and basically effective communication.
            The final project is to give a product pitch of the application we made in CS2113T (Software Engineering & Object Oriented Programming) linked below.`
        },
        {
            "article": "modules" + SeparationKey + "CS2113T",
            "title": "CS2113T"
        },
        {
            "youtube": "GPSQ7Cvv9wM",
            "description": "Final Presentation for CS2101 of FARMIO (our application developed in CS2113T)"
        },
    ],
}

const CS2113T =
{
    "header": "CS2113T",
    "subtext": "Software Engineering & Object Oriented Programming",
    "sections": [
        {
            "img": "assets/modules/CS2113T.jpg",
            "description": "taken 19/20 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS2113T/software-engineering-object-oriented-programming",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A+",
            "paragraph": `This module covers sotware engineering concepts such as cohesion and coupling, error exception handling, code quality, inheritance, classes, singletons, software architecture and object oriented programming. It is taught in Java.
            The theme of the final project was to create an application that allowed the user to create, delete and update task. It was quite open-ended and flexible. After getting our idea approved, my team developed Farmio, (name inspired from 'Farm Input Output').
            Farmio is a command-line interactive game that aims to teach basic concepts in programming such as conditional clauses and loops. 
            The product demo presentation can be found in the link below to CS2101 (CS2113T's twin module)`
        },
        {
            "title": "CS2101",
            "article": "modules" + SeparationKey + "CS2101"
        },
        {
            "img": "assets/article/CS2113T/farmio_cover.jpg",
            "description": "Welcome page of Farmio"
        },
        {
            "img": "assets/article/CS2113T/farmio_programming.jpg",
            "description": "Coding Segment of Gameplay"
        },
        {
            "img": "assets/article/CS2113T/farmio_animation.jpg",
            "description": "ASCII animation shows how your code affects the game."
        },
        {
            "paragraph": "Due to the project decision of making a complex game instead of a simple task planning application, the workload of this module was very high. However we were very satisfied with the result. Find out more about farmio using the link below."
        },
        {
            "title": "farmio",
            "article": "projects" + SeparationKey + "farmio"
        },
        {
            "paragraph": " Checkout the github repo, user guide and developer guide of Farmio here."
        },
        {
            "title": "Farmio Github Repo",
            "link": "https://github.com/AY1920S1-CS2113T-F14-2/main"
        }
    ],
}

const GET1042 =
{
    "header": "GET1042",
    "subtext": "Sky and Telescopes",
    "sections": [
        {
            "img": "assets/modules/GET1042.jpg",
            "description": "taken 19/20 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/GET1042/sky-and-telescopes",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: S (B+)",
            "paragraph": `Every other Friday, there would be a 3 hour session where you gather with your group to set up a telescope in the nus field to observe stars and the planets in our solar system. Great GET to take. More information can be found in the link above to nusmods.`
        },
    ],
}

const DMY1401TT =
{
    "header": "DMY1401TT",
    "subtext": "Machine Learning",
    "sections": [
        {
            "img": "assets/modules/DMY1401TT.jpg",
            "description": "taken 19/20 sem 1, MCs: 4",
        },
        {
            "title": "Grade: CS",
            "paragraph": `This module introduces fundamentals to machine learning such as linear regression and support vector machines, it also covers how to clean data. The module is taught in python.`
        },
    ],
}

const CP2106 =
{
    "header": "CP2106",
    "subtext": "Orbital",
    "sections": [
        {
            "img": "assets/modules/CP2106.jpg",
            "description": "taken 18/19 Summer Break, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CP2106/independent-software-development-project-orbital",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: CS",
            "paragraph": `Orbital is usually taken in the summer break of a year 1 computing student. The module awards modular credits and a certificate for student pairs to come up with a software project and create it. 
            My pair chose to create an educational resource webapp called Brainxpace, linked below.`
        },
        {
            "article": "projects" + SeparationKey + "brainxpace",
            "title": "brainxpace"
        },
        {
            "description": "Our Booth",
            "img": "assets/article/brainxpace/booth_pic.jpeg"
        }
    ],
}

const CG2023 =
{
    "header": "CG2023",
    "subtext": "Signals and Systems",
    "sections": [
        {
            "img": "assets/modules/CG2023.jpg",
            "description": "taken 19/20 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CG2023/signals-and-systems",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A",
            "paragraph": `Topics covered fourier transform, signal filtering and reconstruction, frequency response of systems (Bode diagrams)`
        },
    ],
}

const CG2027 =
{
    "header": "CG2027",
    "subtext": "Transistor-level Digital Circuits",
    "sections": [
        {
            "img": "assets/modules/CG2027.jpg",
            "description": "taken 19/20 sem 2, MCs: 2",
        },
        {
            "link": "https://nusmods.com/modules/CG2027/transistor-level-digital-circuits",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A+",
            "paragraph": `This module covers topics like voltage transfer curve of CMOS and NMOS, noise margins, practical limitations of gates compared to ideal gates, pn, np junctions. 
            Grades for this module mainly depended on memorisation. However, it allowed me to appreciate low level concepts such as the delay time of carry-bypass adders.`
        },
    ],
}

const CG2028 =
{
    "header": "CG2028",
    "subtext": "Computer Organisation",
    "sections": [
        {
            "img": "assets/modules/CG2028.jpg",
            "description": "taken 19/20 sem 2, MCs: 2",
        },
        {
            "link": "https://nusmods.com/modules/CG2028/computer-organization",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A",
            "paragraph": `CG2028 is an introduction to ARMv7-M assembly language using the NXP LPC1769. It covers data processing, memory and branch instructions.
            It also covers the pipeline and execution sequence in a single-cycle processor as well as memory cache.`
        },
        {
            "img": "assets/article/CG2028/lpc1769.png",
            "description": "LPC1769 board"
        }
    ],
}

const CS3243 =
{
    "header": "CS3243",
    "subtext": "Introduction to Artificial Intelligence",
    "sections": [
        {
            "img": "assets/modules/CS3243.jpg",
            "description": "taken 19/20 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS3243/introduction-to-artificial-intelligence",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: S (B-)",
            "paragraph": `This module teaches algorithms for informed search (A* path finding algorithm), Adverserial Search, Constraint Satisfaction Problems, Reinforced Learning, No Regret Learning, Inference on First Order Logic.
            There were 2 projects, one focussing on informed and uninformed search and the other, on sodoku (CSP) and PACMAN (reinforced learning). It was an exciting module but I struggled alot understanding the concepts taught and as a result, performed poorly for the exams.`
        },
    ],
}

const ST2334 =
{
    "header": "ST2334",
    "subtext": "Probability and Statistics",
    "sections": [
        {
            "img": "assets/modules/ST2334.jpg",
            "description": "taken 19/20 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/ST2334/probability-and-statistics",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `This module covers concepts like conditional probability, Bayes' Theorem, concept of random variables as well as binomial, poisson, normal, discrete uniform, bernoulli, exponential distribution and hypothesis testing.
            This is a prime example of a module that you can put on hold for the first few weeks and still perform okay since a bulk of the concepts are covered in A'levels.`
        },
    ],
}

const GES1038 =
{
    "header": "GES1038",
    "subtext": "La Kopi: Forging of the Chinese Singaporean Community",
    "sections": [
        {
            "img": "assets/modules/GES1038.jpg",
            "description": "taken 19/20 sem 2, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/GES1038/la-kopi-forging-of-the-chinese-singaporean-community",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A+",
            "paragraph": `Initially I wanted to use my SU on this module. Unexpectedly, the module had much to offer as it talks about controversies in some of Singapore's campaigns. I ended up studying very hard for this and happy to say, it was worth it.`
        },
    ],
}

const CS3210 =
{
    "header": "CS3210",
    "subtext": "Parallel Computing",
    "sections": [
        {
            "img": "assets/modules/CS3210.jpg",
            "description": "taken 20/21 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS3210/parallel-computing",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A",
            "paragraph": `I really liked this module since it had a unique format at which assignments and questions are solved. Instead of just implementing an optimal solution that gets the correct output, a working solution is often provided with each assignment question. 
            Our job was to use concepts taught in order to parallelise the problem and often solve small problems which will eventually lead to solving the big problem. There was alot of flexibility on how you can solve the assignments.
            For the first assignment, we needed to parallelise the problem with threads and processes. The second assignment required us to use CUDA to program a GPU while the third one was on distributed programming, we needed to use multiple nodes and share information across multiple computers and cores to solve the question.
            Workload was very high.`
        },
    ],
}

const CG3207 =
{
    "header": "CG3207",
    "subtext": "Computer Architecture",
    "sections": [
        {
            "img": "assets/modules/CG3207.jpg",
            "description": "taken 20/21 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CG3207/computer-architecture",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `This module requires knowledge from EE2026, CG2027 and CG2028. There are a total of 4 labs and they keep building up until you program a fully functioning ARM processor on an FPGA.
            The processor will be able to carry out all instructions including multiplication and division and minimally be able to handle data, load and use and control hazards.`
        },
    ],
}

const EE4211 =
{
    "header": "EE4211",
    "subtext": "Data Science for the Internet of Things",
    "sections": [
        {
            "img": "assets/modules/EE4211.jpg",
            "description": "taken 20/21 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/EE4211/data-science-for-the-internet-of-things",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: B+",
            "paragraph": `The format of this module seems strange to me. Two different profs teach this module in parallel. Each prof will take one 2hr tutorial slot in a week.
            They each issue their own mid-terms and their own graded assignments, almost like they are teaching two different modules.
            
            One prof covers bayesian data analysis, parameter estimation from data, linear regression while the other covers bayes theorem, unsupervised vs supervised vs reinforcement learning, decision trees, ensemble learning, support vector machines..`
        },
    ],
}

const CS2102 =
{
    "header": "CS2102",
    "subtext": "Database Systems",
    "sections": [
        {
            "img": "assets/modules/CS2102.jpg",
            "description": "taken 20/21 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/CS2102/database-systems",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `This module covers Relational Algebra, Entity-Relation Diagrams, SQL using postgreSQL and functional dependencies.
            For the final project, we had to create a pet care-taking webapp where we have to maintain complex relationships between care takers, pet owners and pets. More details in the link below for our project, Furry Fantasy.`
        },
        {
            "title": "Furry Fantasy",
            "article": "projects" + SeparationKey + "furry_fantasy"
        }
    ],
}

const EE4204 =
{
    "header": "EE4204",
    "subtext": "Computer Networks",
    "sections": [
        {
            "img": "assets/modules/EE4204.jpg",
            "description": "taken 20/21 sem 1, MCs: 4",
        },
        {
            "link": "https://nusmods.com/modules/EE4204/computer-networks",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: A-",
            "paragraph": `Introductory Computer Networks Course more information in the nusmods link above.`
        },
    ],
}

const EG2401A =
{
    "header": "EG2401A",
    "subtext": "Engineering Professionalism",
    "sections": [
        {
            "img": "assets/modules/EG2401A.jpg",
            "description": "taken 20/21 sem 2, MCs: 2",
        },
        {
            "link": "https://nusmods.com/modules/EG2401A/engineering-professionalism",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: B+",
            "paragraph": `This module covers ethics in the workplace. It is required to be taken for all engineering students. View the nusmods link for more details.`
        },
    ],
}

const CP3880 =
{
    "header": "CP3880",
    "subtext": "Advanced Technology Attachment Programme",
    "sections": [
        {
            "img": "assets/modules/CP3880.jpg",
            "description": "taken 20/21 sem 2, MCs: 12",
        },
        {
            "link": "https://nusmods.com/modules/CP3880/advanced-technology-attachment-programme",
            "title": "more details @nusmods",
        },
        {
            "title": "Grade: CS",
            "paragraph": `This module is a prerequisite for my graduation. I chose to intern at shopee as a techops engineer for 6+ months. More details are linked below.`
        },
        {
            "title": "Shopee Internship",
            "article": "internships" + SeparationKey + "shopee"
        }
    ],
}

export var ArticleData = {
    "internships-shopee": shopee,
    "internships-dso": dso,
    "projects-electric_skateboard": electricSkateboard,
    "projects-musicviz": musicviz,
    "projects-overflow": overflow,
    "projects-keysight": keysight,
    "projects-bits_n_bolts": bitsnbolts,
    "projects-brainxpace": brainxpace,
    "projects-farmio": farmio,
    "projects-electric_trolley": electricTrolley,
    "projects-teledoor": teledoor,
    "projects-brainhack": brainhack,
    "projects-ieee_hack": IEEEHack,
    "projects-furry_fantasy": furryFantasy,
    "projects-zheng_wen": zhengWen,
    "modules-CG1111": CG1111,
    "modules-CS1010": CS1010,
    "modules-CS1231": CS1231,
    "modules-MA1511": MA1511,
    "modules-MA1512": MA1512,
    "modules-GER1000": GER1000,
    "modules-CG1112": CG1112,
    "modules-CS2040C": CS2040C,
    "modules-EE2026": EE2026,
    "modules-MA1508E": MA1508E,
    "modules-GEQ1000": GEQ1000,
    "modules-CG2271": CG2271,
    "modules-CS2101": CS2101,
    "modules-CS2113T": CS2113T,
    "modules-GET1042": GET1042,
    "modules-DMY1401TT": DMY1401TT,
    "modules-CP2106": CP2106,
    "modules-CG2023": CG2023,
    "modules-CG2027": CG2027,
    "modules-CG2028": CG2028,
    "modules-CS3243": CS3243,
    "modules-ST2334": ST2334,
    "modules-GES1038": GES1038,
    "modules-CS3210": CS3210,
    "modules-CG3207": CG3207,
    "modules-EE4211": EE4211,
    "modules-CS2102": CS2102,
    "modules-EE4204": EE4204,
    "modules-EG2401A": EG2401A,
    "modules-CP3880": CP3880,
}

export const SerialiseArticleData = () => {
    for (const [articleID, article] of Object.entries(ArticleData)) {
        for (let i = 0; i < article["sections"].length; i++) {
            ArticleData[articleID]["sections"][i]["key"] = articleID + i
        }
    }
}